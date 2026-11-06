import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const isComplete = Object.values(formData).every((value) => value.trim() !== "");
    if (!isComplete) {
      setMessage("Please complete all required fields before submitting.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setMessage("Thanks! Our team will be in touch shortly.");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-card">
      <h3 className="contact-form-title">Start a conversation</h3>
      <p className="contact-form-subtitle">Tell us what kind of coffee experience you’re after.</p>

      <div className="contact-form-grid">
        <label>
          <span>First name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className={submitted && !formData.firstName ? "has-error" : ""}
          />
          {submitted && !formData.firstName && <small>First name is required</small>}
        </label>

        <label>
          <span>Last name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={submitted && !formData.lastName ? "has-error" : ""}
          />
          {submitted && !formData.lastName && <small>Last name is required</small>}
        </label>

        <label className="full-width">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@yourbrew.com"
            className={submitted && !formData.email ? "has-error" : ""}
          />
          {submitted && !formData.email && <small>Email is required</small>}
        </label>

        <label className="full-width">
          <span>Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the coffee you want"
            className={submitted && !formData.message ? "has-error" : ""}
          />
          {submitted && !formData.message && <small>Message is required</small>}
        </label>
      </div>

      {message && <p className="mt-4 text-sm text-[var(--amber-light)]">{message}</p>}

      <button type="submit" className="contact-form-submit" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
