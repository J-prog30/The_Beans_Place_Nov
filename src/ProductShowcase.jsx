import { motion } from "framer-motion";

import imgArabianMocha from "../assets/Arabian-Mocha-Bag.png";
import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";

import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Separator from "./ui/Separator";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const products = [
  {
    id: "ethiopian-harrar",
    name: "Ethiopian Harrar",
    origin: "Ethiopia",
    price: "$18.99",
    roast: "Medium",
    notes: "Blueberry, dark chocolate, wine",
    image: imgEthiopianHarrar,
    badge: "Best Seller",
  },
  {
    id: "colombian-supremo",
    name: "Colombian Supremo",
    origin: "Colombia",
    price: "$16.99",
    roast: "Medium-Dark",
    notes: "Caramel, citrus peel, cocoa",
    image: imgColombianSupremo,
    badge: null,
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    origin: "Kenya",
    price: "$21.99",
    roast: "Light",
    notes: "Blackcurrant, jasmine, stone fruit",
    image: imgKenyaAA,
    badge: "Staff Pick",
  },
  {
    id: "panama-geisha",
    name: "Panama Geisha",
    origin: "Panama",
    price: "$34.99",
    roast: "Light",
    notes: "Tea-like florals, mango, honey",
    image: imgPanamaGeisha,
    badge: "Limited",
  },
  {
    id: "kona",
    name: "Kona",
    origin: "Hawaii",
    price: "$29.99",
    roast: "Medium",
    notes: "Macadamia, brown sugar, cocoa",
    image: imgKona,
    badge: null,
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    origin: "Guatemala",
    price: "$17.99",
    roast: "Dark",
    notes: "Cherry, cocoa nib, caramel",
    image: imgGuatemalaAntigua,
    badge: "New",
  },
];

export default function ProductShowcase({ addToCart }) {
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

      <StaggerContainer className="product-grid" amount={0.2}>
        {products.map((product) => (
          <StaggerItem key={product.name} className="product-card-wrap">
            <motion.div className="product-card" whileHover={{ y: -8 }}>
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>

              <div className="product-card-info">
                <div className="product-card-header">
                  <div>
                    <h3>{product.name}</h3>
                    <p>
                      {product.origin} • {product.roast} Roast
                    </p>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>

                <p className="product-notes">{product.notes}</p>

                <Button variant="accent" className="w-full" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-12 text-center">
        <Button variant="ghost" className="inline-flex">View All Coffee</Button>
      </div>
    </div>
  );
}
