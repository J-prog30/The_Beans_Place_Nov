import { motion as Motion } from "framer-motion";

import { products } from "../lib/productCatalog";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Separator from "./ui/Separator";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

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
            <Motion.div className="product-card" whileHover={{ y: -8 }}>
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

      <div className="mt-12 text-center">
        <Button variant="ghost" className="inline-flex">View All Coffee</Button>
      </div>
    </div>
  );
}
