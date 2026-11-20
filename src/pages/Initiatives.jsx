
function Initiatives() {
  return (
    <section className="feature-section">
      <div className="container">

        <div className="feature-intro">
          <div>
            <span className="eyebrow">Our Initiatives</span>
            <h2>Building a digitally empowered India</h2>
          </div>
          <p>
            Digital initiatives that connect citizens with
            technology, knowledge and opportunities.
          </p>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <span className="feature-number blue">01</span>
            <span className="icon-box large blue">₹</span>
            <h3>Digital Payments</h3>
            <p>
              Promoting secure and convenient digital payment
              services for everyday transactions.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number saffron">02</span>
            <span className="icon-box large saffron">▣</span>
            <h3>DigiLocker</h3>
            <p>
              Access and store important digital documents
              securely in one place.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-number green">03</span>
            <span className="icon-box large green">◎</span>
            <h3>BharatNet</h3>
            <p>
              Improving broadband connectivity in rural
              areas across India.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Initiatives;
