import { motion } from "framer-motion";

const words = [
  "Direct Trade",
  "Small Batch Roast",
  "Single Origin",
  "Ethically Sourced",
  "Freshly Roasted",
  "Free Shipping Over $40",
];

export default function RibbonTicker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[rgba(20,18,16,0.8)] py-3 text-[var(--cream)]">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap px-4 text-sm font-semibold uppercase tracking-[0.28em]"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="inline-flex items-center gap-4">
            <span>{word}</span>
            <span className="text-[var(--amber)]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
