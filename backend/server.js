const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();
const session = require("express-session");
const path = require("path");

const app = express();
app.get("/admin.html", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 30 * 60 * 1000
    }
}));

// MySQL connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "NewPass@123",
    database: "student",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Digital India Backend is running successfully!"
    });
});

// Contact API
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contact (name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, message], (err, result) => {

        if (err) {
            console.log("Database error:", err);

            return res.status(500).json({
                success: false,
                message: "Data save failed"
            });
        }

        console.log("Contact data saved successfully!");

        res.json({
            success: true,
            message: "Contact form submitted successfully!"
        });
    });
});
// Get all contact messages
app.get("/api/contact", (req, res) => {
    if (req.session.isAdmin !== true) {
    return res.status(401).json({
        success: false,
        message: "Admin login required"
    });
}
    const sql = "SELECT * FROM contact ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Fetch contacts error:", err);
            return res.status(500).json({
                success: false,
                message: "Could not fetch contact messages"
            });
        }

        res.json({
            success: true,
            contacts: results
        });
    });
});

 // Secure Delete Contact API
app.delete("/api/contact/:id", (req, res) => {
    if (req.session.isAdmin !== true) {
        return res.status(401).json({
            success: false,
            message: "Admin login required"
        });
    }

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid contact ID"
        });
    }

    db.query(
        "DELETE FROM contact WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Delete failed"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Message not found"
                });
            }

            res.json({
                success: true,
                message: "Message deleted successfully"
            });
        }
    );
});


 // Admin Login API
app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;

    const bcrypt = require("bcryptjs");

    if (
        username !== process.env.ADMIN_USERNAME ||
        !password ||
        !process.env.ADMIN_PASSWORD_HASH ||
        !bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH)
    ) {
        return res.status(401).json({
            success: false,
            message: "Invalid username or password"
        });
    }

    req.session.isAdmin = true;

    res.json({
        success: true,
        message: "Admin login successful"
    });
});

// Check Admin Session
app.get("/api/admin/check", (req, res) => {
    res.json({
        loggedIn: req.session.isAdmin === true
    });
});

// Admin Logout API
app.post("/api/admin/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Logout failed"
            });
        }

        res.clearCookie("connect.sid");

        res.json({
            success: true,
            message: "Logged out successfully"
        });
    });
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});