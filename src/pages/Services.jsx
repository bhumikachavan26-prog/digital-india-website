
function Services() {
  return (
    <section className="feature-section">
      <div className="container">

        <div className="feature-intro">
          <div>
            <span className="eyebrow">Digital Services</span>
            <h2>Services for everyone</h2>
          </div>
          <p>
            Explore citizen-focused digital services and
            government benefits.
          </p>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number blue">01</span>
            <h3>Aadhaar Services</h3>
            <p>
              Learn about Aadhaar updates and required
              documents through official UIDAI services.
            </p>
            <a href="https://myaadhaar.uidai.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Visit UIDAI Portal →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number saffron">02</span>
            <h3>Government Schemes</h3>
            <p>
              Explore scholarships, farmer benefits,
              pensions and schemes based on eligibility.
            </p>
            <a href="https://www.myscheme.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Find My Benefits →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number green">03</span>
            <h3>Digital Government Services</h3>
            <p>
              Discover citizen services offered through
              the Government of India's UMANG platform.
            </p>
            <a href="https://web.umang.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Explore Services →
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Services;
