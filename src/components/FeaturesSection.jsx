import { useEffect, useRef, useState } from "react";

import { products } from "../lib/productCatalog";
import Button from "./ui/Button";
import imgArabianMocha from "../assets/Arabian-Mocha-Bag.png";
import imgBrazilianSantos from "../assets/Brazilian-Santos-Bag.png";
import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgCostaRicaTarrazu from "../assets/Costa-Rica-Tarrazu-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgJamaicanBlueMountain from "../assets/Jamaican-Blue-Mountain-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";
import imgRedSulawesi from "../assets/Red-Sulawesi-Bag.png";
import imgSumatraMandheling from "../assets/Sumatra-Mandheling-Bag.png";
import imgTanzaniaPeaberry from "../assets/Tanzania-Peaberry-Bag.png";
import imgUrigacheffe from "../assets/Urigacheffe-Bag.png";
import imgVietnameseRobusta from "../assets/Vietnamese-Robusta.png";

const row1 = [
  { image: imgJamaicanBlueMountain, name: "Jamaican Blue Mountain" },
  { image: imgEthiopianHarrar, name: "Ethiopian Harrar" },
  { image: imgPanamaGeisha, name: "Panama Geisha" },
  { image: imgRedSulawesi, name: "Red Sulawesi" },
  { image: imgKona, name: "Kona" },
  { image: imgTanzaniaPeaberry, name: "Tanzania Peaberry" },
];

const row2 = [
  { image: imgKenyaAA, name: "Kenya AA" },
  { image: imgArabianMocha, name: "Arabian Mocha" },
  { image: imgGuatemalaAntigua, name: "Guatemala Antigua" },
  { image: imgSumatraMandheling, name: "Sumatra Mandheling" },
  { image: imgBrazilianSantos, name: "Brazilian Santos" },
  { image: imgColombianSupremo, name: "Colombian Supremo" },
];

const row3 = [
  { image: imgCostaRicaTarrazu, name: "Costa Rica Tarrazu" },
  { image: imgUrigacheffe, name: "Urigacheffe" },
  { image: imgVietnameseRobusta, name: "Vietnamese Robusta" },
  { image: imgJamaicanBlueMountain, name: "Jamaican Blue Mountain" },
  { image: imgGuatemalaAntigua, name: "Guatemala Antigua" },
  { image: imgKenyaAA, name: "Kenya AA" },
];

function ImageRow({ images, offset = 0, onSelectItem }) {
  const doubled = [...images, ...images];

  return (
    <div className="carousel-row" style={{ transform: `translate3d(${offset}px, 0, 0)`, transition: "transform 0.2s linear" }}>
      {doubled.map((item, index) => {
        const isInCatalog = products.some((product) => product.image === item.image);
        return (
        <button
          key={`${item.name}-${index}`}
          type="button"
          className="carousel-card"
          aria-label={
            isInCatalog
              ? `View ${item.name} details`
              : `Browse the shop for ${item.name}`
          }
          onClick={() => onSelectItem(item)}
        >
          <img src={item.image} alt={item.name} className="carousel-image" loading="lazy" />
        </button>
        );
      })}
    </div>
  );
}

export default function FeaturesSection({ addToCart }) {
  const sectionRef = useRef(null);
  const [offsets, setOffsets] = useState([0, 0, 0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);

      setOffsets([-progress * 120, progress * 150, -progress * 90]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const selectItem = (item) => {
    const product = products.find((entry) => entry.image === item.image);
    if (product) {
      setSelectedProduct(product);
      return;
    }

    document.getElementById("coffee-products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="carousel-gallery-section" ref={sectionRef}>
        <div className="carousel-gallery-container">
          <ImageRow images={row1} offset={offsets[0]} onSelectItem={selectItem} />
          <ImageRow images={row2} offset={offsets[1]} onSelectItem={selectItem} />
          <ImageRow images={row3} offset={offsets[2]} onSelectItem={selectItem} />
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="carousel-product-title"
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--cart-muted)]">
                {selectedProduct.origin} · {selectedProduct.roast} roast
              </p>
              <h2 id="carousel-product-title" className="mt-3 text-3xl font-bold">
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
    </>
  );
}
