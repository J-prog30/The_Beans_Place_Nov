import { useEffect, useMemo, useState } from "react";

import NavBar from "./components/NavBar";
import RibbonTicker from "./components/RibbonTicker";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductShowcase from "./components/ProductShowcase";
import CtaSection from "./components/CtaSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ShoppingCart from "./components/ShoppingCart";

const getPrice = (price) => Number(String(price).replace(/[$,]/g, ""));

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const addToCart = (product) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id);
      if (existingItem) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...current, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const addBundleToCart = (bundleProducts) => {
    const prices = bundleProducts.map((product) => getPrice(product.price));
    const lowestPrice = Math.min(...prices);
    const freeProduct = bundleProducts[prices.indexOf(lowestPrice)];
    const bundlePrice = prices.reduce((total, price) => total + price, 0) - lowestPrice;

    setCartItems((current) => [
      ...current,
      {
        id: `bundle-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        type: "bundle",
        name: "Build Your Box (4 coffees)",
        products: bundleProducts,
        freeProduct,
        unitPrice: bundlePrice,
        qty: 1,
      },
    ]);
    setCartOpen(true);
  };

  const updateCartQty = (id, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.qty * (item.type === "bundle" ? item.products.length : 1),
        0,
      ),
    [cartItems],
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const price = item.type === "bundle" ? item.unitPrice : getPrice(item.price);
        return total + price * item.qty;
      }, 0),
    [cartItems],
  );

  return (
    <div className="app">
      <ShoppingCart
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        cartCount={cartCount}
        subtotal={subtotal}
        theme={theme}
      />

      <NavBar
        toggleCart={() => setCartOpen((open) => !open)}
        cartCount={cartCount}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />

      <main>
        <HeroSection />
        <RibbonTicker />

        <section className="features bg-features" id="shop">
          <FeaturesSection addToCart={addToCart} />
        </section>

        <section className="bg-cta" id="coffee-products">
          <ProductShowcase addToCart={addToCart} />
        </section>

        <RibbonTicker />

        <CtaSection onAddBundle={addBundleToCart} />
        <AboutSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
