
function Aadhaar() {
  return (
    <section className="feature-section">
      <div className="container">

        <div className="feature-intro">
          <div>
            <span className="eyebrow">Aadhaar Services</span>
            <h2>Your Aadhaar, Your Digital Identity</h2>
          </div>
          <p>
            Find useful information about Aadhaar services,
            updates and official online facilities.
          </p>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number blue">01</span>
            <h3>Update Aadhaar</h3>
            <p>
              Access official information about updating
              your Aadhaar details.
            </p>
            <a href="https://myaadhaar.uidai.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Update Aadhaar →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number saffron">02</span>
            <h3>Download Aadhaar</h3>
            <p>
              Visit the official UIDAI portal to access
              your Aadhaar services.
            </p>
            <a href="https://myaadhaar.uidai.gov.in/"
              target="_blank" rel="noopener noreferrer">
              Visit Portal →
            </a>
          </article>

          <article className="feature-card">
            <span className="feature-number green">03</span>
            <h3>Required Documents</h3>
            <p>
              Check the official UIDAI website for
              accepted documents and requirements.
            </p>
            <a href="https://uidai.gov.in/"
              target="_blank" rel="noopener noreferrer">
              UIDAI Website →
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Aadhaar;
