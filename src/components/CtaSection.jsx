import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function CtaSection() {
  return (
    <section className="cta-section bg-cta">
      <Badge variant="accent" className="mb-4">
        Brew Better Mornings
      </Badge>
      <h2>Wake up to a better cup.</h2>
      <p className="cta-subtitle">
        Discover single-origin favorites, espresso blends, and tasting notes that make every pour feel
        intentional.
      </p>

      <div className="cta-buttons">
        <Button variant="accent" size="lg">Shop the Collection</Button>
        <Button variant="ghost" size="lg">Build Your Box</Button>
      </div>

      <div className="cta-stats">
        <div className="cta-stat">
          <div className="cta-stat-number">18k+</div>
          <div className="cta-stat-label">happy brews</div>
        </div>
        <div className="cta-stat-divider" />
        <div className="cta-stat">
          <div className="cta-stat-number">4.9/5</div>
          <div className="cta-stat-label">average rating</div>
        </div>
        <div className="cta-stat-divider" />
        <div className="cta-stat">
          <div className="cta-stat-number">72h</div>
          <div className="cta-stat-label">roasted-to-order</div>
        </div>
      </div>
    </section>
  );
}

