
function Contact() {
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Contact form submitted successfully!");
        form.reset();
      } else {
        alert("Failed to submit contact form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server connection failed.");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">

        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>Connect with Digital India</h2>
          <p>
            Have a question, suggestion, or need help
            with a digital service? Send us a message.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleContactSubmit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              rows="5"
              required
            />
          </div>

          <button type="submit">
            Send Message →
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
