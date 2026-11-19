import { useEffect, useState } from "react";

import { products } from "../lib/productCatalog";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const getPrice = (price) => Number(String(price).replace(/[$,]/g, ""));

export default function CtaSection({ onAddBundle }) {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const selectedProducts = products.filter((product) => selectedIds.includes(product.id));
  const selectedPrices = selectedProducts.map((product) => getPrice(product.price));
  const bundlePrice =
    selectedPrices.length === 4
      ? selectedPrices.reduce((total, price) => total + price, 0) - Math.min(...selectedPrices)
      : 0;
  const freeProduct =
    selectedProducts.length === 4
      ? selectedProducts.reduce((lowest, product) =>
          getPrice(product.price) < getPrice(lowest.price) ? product : lowest,
        )
      : null;

  useEffect(() => {
    if (!isBuilderOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsBuilderOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBuilderOpen]);

  const toggleProduct = (productId) => {
    setSelectedIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : current.length < 4
          ? [...current, productId]
          : current,
    );
  };

  const handleAddBundle = () => {
    onAddBundle(selectedProducts);
    setSelectedIds([]);
    setIsBuilderOpen(false);
  };

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
      <p className="cta-bundle-offer">
        <strong>Bundle offer:</strong> Choose 4 different coffees. The lowest-priced coffee is free.
      </p>

      <div className="cta-buttons">
        <Button
          type="button"
          variant="accent"
          size="lg"
          onClick={() =>
            document
              .getElementById("coffee-products")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          Shop the Collection
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          onClick={() => setIsBuilderOpen(true)}
        >
          Build Your Box
        </Button>
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

      {isBuilderOpen && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsBuilderOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="build-box-title"
            className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[var(--cart-bg)] p-6 text-[var(--cart-text)] shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close box builder"
              className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-xl"
              onClick={() => setIsBuilderOpen(false)}
            >
              ×
            </button>
            <h2 id="build-box-title" className="pr-10 text-2xl font-bold">
              Build Your Box
            </h2>
            <p className="mt-2 text-sm text-[var(--cart-muted)]">
              Choose 4 different coffees. The lowest-priced coffee is free.
            </p>

            <div className="mt-5 max-h-[45vh] space-y-2 overflow-y-auto pr-1">
              {products.map((product) => {
                const isSelected = selectedIds.includes(product.id);
                const isDisabled = !isSelected && selectedIds.length === 4;

                return (
                  <label
                    key={product.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                      isSelected
                        ? "border-[var(--amber)] bg-[var(--amber)]/10"
                        : "border-[var(--cart-border)] bg-[var(--cart-card-bg)]"
                    } ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      disabled={isDisabled}
                      onChange={() => toggleProduct(product.id)}
                      className="h-4 w-4 accent-[var(--amber)]"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{product.name}</span>
                      <span className="block text-xs text-[var(--cart-muted)]">
                        {product.roast} roast
                      </span>
                    </span>
                    <span className="font-bold">{product.price}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[var(--cart-muted)]" aria-live="polite">
                {selectedIds.length < 4
                  ? `Choose ${4 - selectedIds.length} more coffee${4 - selectedIds.length === 1 ? "" : "s"}`
                  : `${freeProduct.name} is free — bundle total $${bundlePrice.toFixed(2)}`}
              </p>
              <Button
                type="button"
                variant="accent"
                disabled={selectedIds.length !== 4}
                onClick={handleAddBundle}
              >
                Add Bundle to Cart
              </Button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

