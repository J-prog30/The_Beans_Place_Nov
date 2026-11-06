import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section-wrap bg-cta" id="contact">
      <div className="container py-20">
        <div className="contact-header">
          <span className="contact-pill">Let’s Talk Coffee</span>
          <h2>Ready for your next favorite roast?</h2>
          <p>
            We’re here to help you find the right beans, the right brew, and the right vibe for your
            daily ritual.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-col">
            <ContactForm />
          </div>

          <div className="contact-info-col">
            <div className="contact-info-cards">
              <a className="contact-card" href="mailto:hello@thebeansplace.com">
                <span className="contact-card-accent" />
                <div className="contact-card-content">
                  <div className="contact-card-icon">✉</div>
                  <div className="contact-card-text">
                    <div className="contact-card-title">Email us</div>
                    <div className="contact-card-detail">hello@thebeansplace.com</div>
                  </div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <a className="contact-card" href="tel:+15555678901">
                <span className="contact-card-accent" />
                <div className="contact-card-content">
                  <div className="contact-card-icon">☎</div>
                  <div className="contact-card-text">
                    <div className="contact-card-title">Call us</div>
                    <div className="contact-card-detail">+1 (555) 567-8901</div>
                  </div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <div className="contact-card">
                <span className="contact-card-accent" />
                <div className="contact-card-content">
                  <div className="contact-card-icon">⌂</div>
                  <div className="contact-card-text">
                    <div className="contact-card-title">Visit</div>
                    <div className="contact-card-detail">143 Maple Street, Portland, OR</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <span className="contact-social-label">Follow the journey</span>
              <div className="contact-social-icons">
                <a href="https://instagram.com" className="contact-social-link">IG</a>
                <a href="https://x.com" className="contact-social-link">X</a>
                <a href="https://facebook.com" className="contact-social-link">FB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
