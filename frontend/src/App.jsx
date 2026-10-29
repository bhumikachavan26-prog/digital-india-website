import { useState } from 'react';
import "./App.css";

const Arrow = ({ left = false }) => (
  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {left ? <path d="m15 18-6-6 6-6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
  </svg>
);

const Check = () => (
  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const UserIcon = ({ size = 20 }) => (
  <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="icon" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
    <path d="m10.2 10.2-3.8-3.8m7.4 3.8 3.8-3.8m-7.4 7.4-3.8 3.8m7.4-3.8 3.8 3.8" />
  </svg>
);

function Logo({ onClick }) {
  return (
    <button className="logo" aria-label="Digital India home" onClick={onClick}>
      <span className="logo-mark"><span /><span /><span /></span>
      <span><b>Digital</b> India<small>Power to Empower</small></span>
    </button>
  );
}

function App() {
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
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container nav-wrap">
          <Logo onClick={() => goTo('home')} />

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button className="active" onClick={() => goTo('home')}>Home</button>
            <button onClick={() => goTo('about')}>About</button>
            <button onClick={() => goTo('initiatives')}>Initiatives</button>
            <button onClick={() => goTo('services')}>Services</button>
            <button onClick={() => goTo('impact')}>Impact</button>
            <button onClick={() => goTo('contact')}>Contact</button>
            <button className="btn btn-primary nav-cta" type="button" onClick={() => goTo('services')}>
              Access Services <Arrow />
            </button>
          </nav>

          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
     <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="announcement"><span>India's digital transformation</span><Arrow /></div>
             <h1>Digital India<br /><em>Power to Empower</em></h1>
              <p>Empowering citizens through technology, digital services and inclusive innovation.</p>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button" onClick={() => goTo('initiatives')}>Explore Initiatives <Arrow /></button>
                <button className="btn btn-secondary" type="button" onClick={() => goTo('services')}>Digital Services <Arrow left /></button>
              </div>
              <div className="trust-row"><span><Check /> Inclusive</span><span><Check /> Secure</span><span><Check /> Citizen-first</span></div>
            </div>

            <div className="hero-visual" aria-label="India connected through digital technology">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="india-shape">
                <svg aria-label="Stylized map of India" role="img" viewBox="0 0 280 360">
                  <defs><linearGradient id="indiaGradient" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#d9e8ff" /></linearGradient></defs>
                  <path d="M90 21 119 10l16 20 38 9 24 22-11 23 20 25-17 29-23 6-4 31-21 31-6 42-20 32-10 52-18-27-6-42-22-35-2-36-24-28 13-30-19-26 18-18 5-35 23-10Z" fill="url(#indiaGradient)" stroke="currentColor" strokeWidth="3" />
                  <g fill="#1769e0"><circle cx="105" cy="76" r="6" /><circle cx="153" cy="107" r="5" /><circle cx="86" cy="139" r="5" /><circle cx="126" cy="180" r="7" /><circle cx="98" cy="230" r="5" /><circle cx="116" cy="282" r="5" /></g>
                  <g opacity=".55" stroke="#1769e0" strokeWidth="2"><path d="m105 76 48 31-67 32 40 41-28 50 18 52" /><path d="m153 107-27 73" /></g>
                </svg>
                <div className="pulse" />
              </div>
              <div className="float-card card-users"><span className="icon-box green"><UserIcon /></span><span><b>1.4B+</b><small>Citizens empowered</small></span></div>
              <div className="float-card card-services"><span className="icon-box saffron"><span className="icon">✦</span></span><span><b>Digital first</b><small>Services for everyone</small></span></div>
              <div className="chakra"><span /></div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="about">
          <div className="container">
            <div className="feature-intro">
              <div><span className="eyebrow">Building a digital nation</span><h2>Technology that transforms lives</h2></div>
              <p>Creating an ecosystem where every citizen can access opportunity, knowledge and public services.</p>
            </div>
            <div className="feature-grid" id="initiatives">
              <article className="feature-card">
                <span className="feature-number blue">01</span><span className="icon-box large blue"><span className="icon">☁</span></span>
                <h3>Digital Services</h3><p>Essential government services, available online—simple, secure and always accessible.</p>
                <button onClick={() => goTo('services')}>Discover more <Arrow /></button>
              </article>
              <article className="feature-card">
                <span className="feature-number saffron">02</span><span className="icon-box large saffron"><UserIcon size={25} /></span>
                <h3>Digital Empowerment</h3><p>Building skills and confidence so every citizen can thrive in a digital economy.</p>
                <button onClick={() => goTo('services')}>Discover more <Arrow /></button>
              </article>
              <article className="feature-card">
                <span className="feature-number green">03</span><span className="icon-box large green"><NetworkIcon /></span>
                <h3>Digital Connectivity</h3><p>Connecting urban and rural India through resilient, high-speed digital infrastructure.</p>
                <button onClick={() => goTo('services')}>Discover more <Arrow /></button>
              </article>
            </div>
          </div>
        </section>
       <section className="feature-section" id="services">
  <div className="container">
    <div className="feature-intro">
      <div>
        <span className="eyebrow">Digital services</span>
        <h2>Services for everyone</h2>
      </div>
      <p>
        Explore citizen-focused digital services and government benefits.
      </p>
    </div>

    <div className="feature-grid">
      <article className="feature-card">
        <span className="feature-number blue">01</span>
        <h3>Aadhaar Services</h3>
        <p>
          Learn about Aadhaar updates and required documents through official UIDAI services.
        </p>
        <a
          href="https://myaadhaar.uidai.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit UIDAI Portal →
        </a>
      </article>

      <article className="feature-card">
        <span className="feature-number saffron">02</span>
        <h3>Government Schemes</h3>
        <p>
          Explore scholarships, farmer benefits, pensions and schemes based on eligibility.
        </p>
        <a
          href="https://www.myscheme.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find My Benefits →
        </a>
      </article>

      <article className="feature-card">
        <span className="feature-number green">03</span>
        <h3>Digital Government Services</h3>
        <p>
          Discover citizen services offered through the Government of India's UMANG platform.
        </p>
        <a
          href="https://web.umang.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Services →
        </a>
      </article>
    </div>
  </div>
</section>


        <section className="home-impact" id="impact">
          <div className="container impact-strip">
            <div><b>1.3B+</b><span>Digital identities</span></div><div><b>750M+</b><span>Internet users</span></div><div><b>12B+</b><span>Monthly UPI transactions</span></div><div><b>200K+</b><span>Gram panchayats connected</span></div>
          </div>
        </section>
      </main>
      <section className="contact-section" id="contact">
  <div className="container">

    <div className="contact-heading">
      <span>GET IN TOUCH</span>
      <h2>Connect with Digital India</h2>
      <p>
        Have a question, suggestion, or need help with a digital service?
        Send us a message.
      </p>
    </div>

    <form className="contact-form" onSubmit={handleContactSubmit}>

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
        ></textarea>
      </div>

      <button type="submit">
        Send Message →
      </button>

    </form>

  </div>
</section>

      <footer id="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Logo onClick={() => goTo('home')} /><p>Technology for transformation. Access for everyone. Opportunity without limits.</p><span>Designed as a college project</span></div>
          <div><h3>Quick Links</h3><button onClick={() => goTo('about')}>About</button><button onClick={() => goTo('impact')}>Our Impact</button><button onClick={() => goTo('contact')}>Contact</button></div>
          <div><h3>Initiatives</h3><button onClick={() => goTo('initiatives')}>Digital Payments</button><button onClick={() => goTo('initiatives')}>DigiLocker</button><button onClick={() => goTo('initiatives')}>BharatNet</button></div>
          <div><h3>Services</h3><button onClick={() => goTo('services')}>Service Directory</button><button onClick={() => goTo('services')}>Citizen Services</button><button onClick={() => goTo('services')}>Digital Learning</button></div>
        </div>
        <div className="container footer-bottom"><span>© 2025 Digital India College Project</span><span>Made with purpose for an empowered India</span></div>
      </footer>
    </div>
  );
}

export default App;
