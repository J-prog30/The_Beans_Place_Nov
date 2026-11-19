import { useEffect, useState } from "react";

import ContactForm from "./ContactForm";

const contactAddress = "143 Maple Street, Portland, OR";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`;
const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(contactAddress)}`;

export default function ContactSection() {
  const [isMapPickerOpen, setIsMapPickerOpen] = useState(false);

  useEffect(() => {
    if (!isMapPickerOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMapPickerOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMapPickerOpen]);

  const handleAddressClick = (event) => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      event.preventDefault();
      setIsMapPickerOpen(true);
    }
  };

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
                  <div className="contact-card-icon">📧</div>
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
                  <div className="contact-card-icon">☎️</div>
                  <div className="contact-card-text">
                    <div className="contact-card-title">Call us</div>
                    <div className="contact-card-detail">+1 (555) 567-8901</div>
                  </div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>

              <a
                className="contact-card"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAddressClick}
                aria-haspopup="dialog"
              >
                <span className="contact-card-accent" />
                <div className="contact-card-content">
                  <div className="contact-card-icon">🏠</div>
                  <div className="contact-card-text">
                    <div className="contact-card-title">Visit</div>
                    <div className="contact-card-detail">{contactAddress}</div>
                  </div>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>
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

        {isMapPickerOpen && (
          <div
            className="contact-map-picker-overlay"
            onClick={() => setIsMapPickerOpen(false)}
          >
            <section
              className="contact-map-picker"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-map-picker-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="contact-map-picker-close"
                aria-label="Close map app chooser"
                onClick={() => setIsMapPickerOpen(false)}
              >
                ×
              </button>
              <h3 id="contact-map-picker-title">Open address with</h3>
              <a
                className="contact-map-picker-option"
                href={appleMapsUrl}
                onClick={() => setIsMapPickerOpen(false)}
              >
                Apple Maps
              </a>
              <a
                className="contact-map-picker-option"
                href={googleMapsUrl}
                onClick={() => setIsMapPickerOpen(false)}
              >
                Google Maps
              </a>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}
