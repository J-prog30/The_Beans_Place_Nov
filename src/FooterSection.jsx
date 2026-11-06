export default function FooterSection() {
  return (
    <footer className="bg-footer">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 text-2xl font-black tracking-tight text-[var(--cream)]">The Beans Place</div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Thoughtful coffee, responsibly sourced and roasted for people who care about the details.
          </p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">Our Story</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <div className="footer-links">
            <a href="#">Shipping</a>
            <a href="#">Subscriptions</a>
            <a href="#">Roaster Notes</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex flex-col gap-3 py-5 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <span>© 2026 The Beans Place.</span>
          <span>Crafted with care for better coffee rituals.</span>
        </div>
      </div>
    </footer>
  );
}
