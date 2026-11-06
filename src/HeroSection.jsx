import { motion, useScroll, useTransform } from "framer-motion";

import heroBeans from "../assets/hero-beans.png";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 600], [1.35, 0.9]);
  const imgOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);
  const imgY = useTransform(scrollY, [0, 600], [0, 100]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero bg-hero" id="home">
      <div className="hero-grid">
        <div className="hero-text-column">
          <Badge variant="outline" className="mb-5">
            Premium Coffee Beans • Roasted Fresh Daily
          </Badge>

          <motion.h1
            className="h1-stack"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            YOUR PLACE
            <span className="muted"> FOR COFFEE</span>
            <br />
            BREWING
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            Small-batch coffees sourced from the world’s most exciting farms — roasted to bring out
            vibrant sweetness, balanced body, and unforgettable character in every cup.
          </motion.p>

          <div className="hero-actions">
            <Button variant="accent" onClick={() => scrollToSection("shop")}>
              SHOP COFFEE
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("about")}>
              OUR STORY
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--brown-700)]">
            <span>★★★★★ 4.9/5</span>
            <span className="h-1 w-1 rounded-full bg-[var(--brown-500)]" />
            <span>Free shipping over $40</span>
          </div>
        </div>

        <div className="hero-art-container">
          <motion.img
            src={heroBeans}
            alt="Fresh roasted coffee beans"
            className="hero-art"
            style={{ scale: imgScale, opacity: imgOpacity, y: imgY }}
          />
          <div className="absolute right-8 top-10 rounded-full border border-white/30 bg-[rgba(30,23,20,0.75)] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--cream)] shadow-xl backdrop-blur-sm">
            <div>From</div>
            <div className="mt-1 text-xl text-[var(--amber-light)]">$14.99</div>
            <div className="text-[9px] tracking-[0.15em] text-white/70">per bag</div>
          </div>
        </div>
      </div>
    </section>
  );
}
