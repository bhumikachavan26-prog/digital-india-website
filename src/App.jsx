
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Services from './pages/Services';
import Aadhaar from './pages/Aadhaar';
import Schemes from './pages/Schemes';
import Impact from './pages/Impact';
import Contact from './pages/Contact';

function Logo({ onClick }) {
  return (
    <button className="logo" onClick={onClick}>
      <span className="logo-mark">
        <span /><span /><span />
      </span>
      <span>
        <b>Digital</b> India
        <small>Power to Empower</small>
      </span>
    </button>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    ['Home', '/'],
    ['About', '/about'],
    ['Initiatives', '/initiatives'],
    ['Services', '/services'],
    ['Impact', '/impact'],
    ['Contact', '/contact']
  ];

  return (
    <div className="app">

      <header className="header">
        <div className="container nav-wrap">

          <Logo onClick={() => goTo('/')} />

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([name, path]) => (
              <button
                key={path}
                className={location.pathname === path ? 'active' : ''}
                onClick={() => goTo(path)}
              >
                {name}
              </button>
            ))}

            <button
              className="btn btn-primary nav-cta"
              onClick={() => goTo('/services')}
            >
              Access Services →
            </button>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(v => !v)}
          >
            ☰
          </button>

        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aadhaar" element={<Aadhaar />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer id="footer">
        <div className="container footer-grid">

          <div className="footer-brand">
            <Logo onClick={() => goTo('/')} />
            <p>
              Technology for transformation.
              Access for everyone. Opportunity without limits.
            </p>
            <span>Designed as a college project</span>
          </div>

          <div>
            <h3>Quick Links</h3>
            <button onClick={() => goTo('/about')}>About</button>
            <button onClick={() => goTo('/impact')}>Our Impact</button>
            <button onClick={() => goTo('/contact')}>Contact</button>
          </div>

          <div>
            <h3>Initiatives</h3>
            <button onClick={() => goTo('/initiatives')}>Digital Payments</button>
            <button onClick={() => goTo('/initiatives')}>DigiLocker</button>
            <button onClick={() => goTo('/initiatives')}>BharatNet</button>
          </div>

          <div>
            <h3>Services</h3>
            <button onClick={() => goTo('/services')}>Service Directory</button>
            <button onClick={() => goTo('/aadhaar')}>Aadhaar Services</button>
            <button onClick={() => goTo('/schemes')}>Government Schemes</button>
          </div>

        </div>

        <div className="container footer-bottom">
          <span>© 2025 Digital India College Project</span>
          <span>Made with purpose for an empowered India</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
