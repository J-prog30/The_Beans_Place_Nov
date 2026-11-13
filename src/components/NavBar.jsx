// ============================================================
// NAVBAR.JSX — Sticky Navigation Bar (Day 4)
// ============================================================
// The NavBar stays at the top of the page as the user scrolls.
// It includes a logo, navigation links, a CTA button, and a
// mobile hamburger menu with animation.
//
// WHAT YOU WILL LEARN:
// - useState for toggling the mobile menu (true/false)
// - useState for tracking scroll position
// - useEffect for adding/removing event listeners
// - Conditional CSS classes based on state
// - Framer Motion's AnimatePresence for enter/exit animations
// - Accessibility: aria-label and aria-expanded attributes
//
// CONCEPTS COVERED:
// - React Hooks: useState, useEffect
// - Side effects and cleanup (return () => ...)
// - Ternary operator for conditional rendering
// - Template literals for dynamic className strings
// - Helper functions (closeMenu)
//
// ============================================================

// STEP 1: Imports
// From "react": import { useState, useEffect }
// From "framer-motion": import { motion, AnimatePresence }
// Import the logo: import logo from "../assets/Beans_logo.png";
// Import the Button UI component from "./ui/Button"

/* --- YOUR IMPORTS GO HERE --- */
import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Beans_logo.png";
import Button from "./ui/Button";

function ShoppingBagIcon({ size = 18 }) {
    return (
        <svg
            aria-hidden="true"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 8h14l1 13H4L5 8Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
        </svg>
    );
}
// STEP 2: Create and export the NavBar component
// export default function NavBar() { ... }
//
// STEP 3: State variables (inside the component, before return)
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//
//   DISCUSSION: What does useState(false) mean?
//   - false is the initial value
//   - menuOpen is the current value (true or false)
//   - setMenuOpen is the function to change it
//
// STEP 4: Helper function
//   const closeMenu = () => setMenuOpen(false);
//
// STEP 5: useEffect for scroll detection
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   DISCUSSION: Why do we return a cleanup function?
//   Answer: To remove the event listener when the component unmounts,
//   preventing memory leaks.
//
// STEP 6: Build the JSX (inside return)
//
// Use <motion.header> as the root element:
//   - className: "navbar" + conditionally add "navbar-scrolled" when scrolled is true
//   - Add initial/animate/transition props for entrance animation
//
// Inside the header, create a flex container div:
//   A) BRAND: <a href="#home"> with the logo <img>
//
//   B) DESKTOP NAV: <nav> with className="nav-links hidden items-center gap-10 md:flex"
//      Links: Home (#home), Shop Coffee (#shop), Our Story (#about), Contact (#contact)
//
//   C) DESKTOP CTA: <Button> with "Order Now" text (hidden on mobile: hidden md:inline-flex)
//
//   D) MOBILE HAMBURGER: A <button> visible only on mobile (md:hidden)
//      - Three <span> elements that form the hamburger icon
//      - When menuOpen is true, they transform into an X using CSS transforms
//      - onClick toggles menuOpen
//
// After the flex container, add the MOBILE MENU:
//   Wrap in <AnimatePresence> for smooth enter/exit
//   Conditionally render (menuOpen &&) a <motion.div>
//   Inside: nav links + Button, each calling closeMenu onClick

/* --- YOUR COMPONENT CODE GOES HERE --- */

export default function NavBar({ toggleCart, cartCount = 0, theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false); 
    // container = menuOpen, Function to udate the container = setMenuOpen, current value = false
    const [scrolled, setScrolled] = useState(false); 
    // container = scrolled, Function to udate the container = setMenuOpen, current value = false
    const claseMenu = () => setMenuOpen(false); 
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20); 
        window.addEventListener("scroll", handleScroll, { passive: true }); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // [] means this effect runs only once when the component mounts, and the cleanup function removes the event listener when the component unmounts.
    
    return (
        // motion.header is a root element which is a third-party component from framer-motion.
        <Motion.header 
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
                {/* Brand */}
                <a href="#home" className="brand">
                    <img
                        src={logo}
                        alt="The Beans Place Logo"
                        className="h-12 w-auto md:h-14"
                    />
                </a>

                {/* Desktop Nav */} 
                <nav className="nav-links hidden items-center gap-10 md:flex">
                    <a href="#home">Home</a>
                    <a href="#shop">Shop Coffee</a>
                    <a href="#about">Our Story</a>
                    <a href="#contact">Contact</a>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        type="button"
                        aria-label={
                            theme === "dark" ? "Switch to light mode" : "Switch to dark mode" 
                        }
                        onClick={onToggleTheme}
                        className="theme-toggle-btn"
                    
                    >
                        {theme === "dark" ? "☀️" : "🌙" }
                    </button>
                    <Button variant="accent" size="sm" onClick={toggleCart}>
                        <ShoppingBagIcon size={16} />
                        <span>Cart{cartCount > 0 ? ` (${cartCount})` : ""}</span>
                    </Button>
                </div>
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                
                >
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                    />
                     <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <Motion.div
                        className="overflow-hidden bg-white md:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <nav className="flex flex-col gap-6 px-6 pb-6 pt-2">
                            <a
                                href="#home"
                                onClick={claseMenu}
                                className="text-base font-semibold"
                            >
                                Home
                            </a>
                            <a
                                href="#shop"
                                onClick={claseMenu}
                                className="text-base font-semibold"
                            >
                                Shop Coffee
                            </a>
                            <a
                                href="#about"
                                onClick={claseMenu}
                                className="text-base font-semibold"
                            >
                                Our Story
                            </a>
                            <a
                                href="#contact"
                                onClick={claseMenu}
                                className="text-base font-semibold"
                            >
                                Contact
                            </a>

                            <button
                                type="button"
                                aria-label={
                                    theme === "dark"
                                        ? "Switch to light mode"
                                        : "Switch to dark mode"
                                }
                                onClick={onToggleTheme}
                                className="theme-toggle-btn w-full justify-center"
                            >
                                {theme === "dark" ? "switch to light mode" : "switch to dark mode"}
                            </button>

                            <button
                                type="button"
                                className="mt-2 flex w-full items-center justify-center gap-2"
                                onClick={() => {
                                    toggleCart();
                                    claseMenu();
                                }}
                            >
                                <ShoppingBagIcon size={18} />
                                <span>Cart{cartCount > 0 ? ` (${cartCount})` : ""}</span>
                            </button>
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </Motion.header>
    );
}
