
function About() {
  return (
    <section className="feature-section">
      <div className="container">

        <div className="feature-intro">
          <div>
            <span className="eyebrow">About Digital India</span>
            <h2>Technology that transforms lives</h2>
          </div>

          <p>
            Creating an ecosystem where every citizen can access
            opportunity, knowledge and public services.
          </p>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number blue">01</span>
            <span className="icon-box large blue">☁</span>

            <h3>Digital Services</h3>

            <p>
              Essential government services, available online —
              simple, secure and always accessible.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number saffron">02</span>
            <span className="icon-box large saffron">♙</span>

            <h3>Digital Empowerment</h3>

            <p>
              Building skills and confidence so every citizen
              can thrive in a digital economy.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number green">03</span>
            <span className="icon-box large green">◎</span>

            <h3>Digital Connectivity</h3>

            <p>
              Connecting urban and rural India through
              resilient, high-speed digital infrastructure.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default About;
