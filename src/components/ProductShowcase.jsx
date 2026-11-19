import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

import { additionalProducts, featuredProducts } from "../lib/productCatalog";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Separator from "./ui/Separator";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

function ProductGrid({ products, addToCart, onSelectProduct }) {
  return (
    <StaggerContainer className="product-grid" amount={0.2}>
      {products.map((product) => (
        <StaggerItem key={product.id} className="product-card-wrap">
          <Motion.div className="product-card" whileHover={{ y: -8 }}>
            <button
              type="button"
              className="product-card-image"
              aria-label={`View ${product.name} details`}
              aria-haspopup="dialog"
              onClick={() => onSelectProduct(product)}
            >
              <img src={product.image} alt={product.name} />
              {product.badge && <span className="product-badge">{product.badge}</span>}
            </button>

            <div className="product-card-info">
              <div className="product-card-header">
                <div>
                  <h3>{product.name}</h3>
                  <p>
                    {[product.origin, product.roast && `${product.roast} Roast`]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                </div>
                <span className="product-price">{product.price}</span>
              </div>

              <p className="product-notes">{product.notes}</p>

              <Button
                type="button"
                variant="accent"
                className="w-full"
                aria-label={`Add ${product.name} to cart`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </Motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default function ProductShowcase({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAdditionalProducts, setShowAdditionalProducts] = useState(false);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  useEffect(() => {
    if (!showAdditionalProducts) return;

    document
      .getElementById("additional-coffee-products")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [showAdditionalProducts]);

  return (
    <div className="container py-20">
      <ScrollReveal className="mb-10 text-center">
        <Badge variant="accent">Curated Selection</Badge>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--cream)] md:text-6xl">
          Shop Our <span className="text-[var(--amber-light)]">Finest Beans</span>
        </h2>
        <Separator className="mx-auto my-6 max-w-32 bg-white/20" />
        <p className="mx-auto max-w-2xl text-base text-white/75">
          Every roast is crafted for balance, clarity, and the kind of aroma that turns a routine cup
          into a ritual.
        </p>
      </ScrollReveal>

      <ProductGrid
        products={featuredProducts}
        addToCart={addToCart}
        onSelectProduct={setSelectedProduct}
      />

      <div className="mt-12 text-center">
        <Button
          type="button"
          variant="ghost"
          className="inline-flex"
          onClick={() =>
            showAdditionalProducts
              ? document
                  .getElementById("additional-coffee-products")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              : setShowAdditionalProducts(true)
          }
        >
          View All Coffee
        </Button>
      </div>

      {showAdditionalProducts && (
        <section id="additional-coffee-products" className="mt-14 scroll-mt-8">
          <ScrollReveal className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-[var(--cream)]">
              More <span className="text-[var(--amber-light)]">Coffees to Explore</span>
            </h3>
          </ScrollReveal>
          <ProductGrid
            products={additionalProducts}
            addToCart={addToCart}
            onSelectProduct={setSelectedProduct}
          />
        </section>
      )}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="showcase-product-title"
            className="relative grid w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[var(--cart-bg)] text-[var(--cart-text)] shadow-2xl md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xl text-white"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="flex min-h-64 items-center justify-center bg-black/10 p-8">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-72 object-contain drop-shadow-xl"
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-9">
              {(selectedProduct.origin || selectedProduct.roast) && (
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--cart-muted)]">
                  {[selectedProduct.origin, selectedProduct.roast && `${selectedProduct.roast} roast`]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
              <h2 id="showcase-product-title" className="mt-3 text-3xl font-bold">
                {selectedProduct.name}
              </h2>
              <p className="mt-4 leading-7 text-[var(--cart-muted)]">{selectedProduct.notes}</p>
              <p className="mt-5 text-2xl font-extrabold text-[var(--amber-light)]">
                {selectedProduct.price}
              </p>
              <Button
                type="button"
                variant="accent"
                className="mt-6 w-full"
                onClick={() => {
                  setSelectedProduct(null);
                  addToCart(selectedProduct);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
