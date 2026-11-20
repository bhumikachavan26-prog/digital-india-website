
function Schemes() {
  return (
    <section className="feature-section">
      <div className="container">

        <div className="feature-intro">
          <div>
            <span className="eyebrow">Government Schemes</span>
            <h2>Government Benefits for Everyone</h2>
          </div>
          <p>
            Discover government schemes, scholarships and
            benefits available for eligible citizens.
          </p>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number blue">01</span>
            <h3>Student Scholarships</h3>
            <p>
              Explore scholarship opportunities and
              educational support schemes for students.
            </p>
            <a href="https://scholarships.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Explore Scholarships →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number saffron">02</span>
            <h3>Farmer Schemes</h3>
            <p>
              Find information about government schemes
              and benefits for farmers.
            </p>
            <a href="https://pmkisan.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Explore Farmer Schemes →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number green">03</span>
            <h3>Other Government Benefits</h3>
            <p>
              Discover schemes based on your eligibility,
              location and requirements.
            </p>
            <a href="https://www.myscheme.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Find Government Schemes →
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Schemes;
