
const Arrow = ({ left = false }) => (
  <svg
    className="icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {left ? (
      <path d="m15 18-6-6 6-6" />
    ) : (
      <path d="M5 12h14M13 6l6 6-6 6" />
    )}
  </svg>
);

const Check = () => (
  <svg
    className="icon"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

function Home() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">

        <div className="hero-copy">
          <div className="announcement">
            <span>India's digital transformation</span>
            <Arrow />
          </div>

          <h1>
            Digital India<br />
            <em>Power to Empower</em>
          </h1>

          <p>
            Empowering citizens through technology, digital services and
            inclusive innovation.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/initiatives">
              Explore Initiatives <Arrow />
            </a>

            <a className="btn btn-secondary" href="/services">
              Digital Services <Arrow left />
            </a>
          </div>

          <div className="trust-row">
            <span><Check /> Inclusive</span>
            <span><Check /> Secure</span>
            <span><Check /> Citizen-first</span>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="India connected through digital technology"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="india-shape">
            <svg
              aria-label="Stylized map of India"
              role="img"
              viewBox="0 0 280 360"
            >
              <defs>
                <linearGradient
                  id="indiaGradient"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="1"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#d9e8ff" />
                </linearGradient>
              </defs>

              <path
                d="M90 21 119 10l16 20 38 9 24 22-11 23 20 25-17 29-23 6-4 31-21 31-6 42-20 32-10 52-18-27-6-42-22-35-2-36-24-28 13-30-19-26 18-18 5-35 23-10Z"
                fill="url(#indiaGradient)"
                stroke="currentColor"
                strokeWidth="3"
              />

              <g fill="#1769e0">
                <circle cx="105" cy="76" r="6" />
                <circle cx="153" cy="107" r="5" />
                <circle cx="86" cy="139" r="5" />
                <circle cx="126" cy="180" r="7" />
                <circle cx="98" cy="230" r="5" />
                <circle cx="116" cy="282" r="5" />
              </g>

              <g
                opacity=".55"
                stroke="#1769e0"
                strokeWidth="2"
              >
                <path d="m105 76 48 31-67 32 40 41-28 50 18 52" />
                <path d="m153 107-27 73" />
              </g>
            </svg>

            <div className="pulse" />
          </div>

          <div className="float-card card-users">
            <span className="icon-box green">
              <span>♙</span>
            </span>
            <span>
              <b>1.4B+</b>
              <small>Citizens empowered</small>
            </span>
          </div>

          <div className="float-card card-services">
            <span className="icon-box saffron">
              <span className="icon">✦</span>
            </span>
            <span>
              <b>Digital first</b>
              <small>Services for everyone</small>
            </span>
          </div>

          <div className="chakra">
            <span />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
