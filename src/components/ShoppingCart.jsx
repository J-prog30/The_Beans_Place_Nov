export default function ShoppingCart({
  isOpen,
  items,
  onClose,
  onUpdateQty,
  onRemove,
  cartCount,
  subtotal,
  theme,
}) {
  return (
    <div
      aria-hidden={!isOpen}
      data-theme={theme}
      className={`fixed inset-0 z-[1100] transition-all duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-black/35"
      />

      <aside
        className={`cart-drawer-panel absolute right-0 top-0 h-full w-full max-w-md transform p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--cart-muted)]">
              Your cart
            </p>
            <h2 className="mt-1 text-2xl font-bold">{cartCount} item{cartCount === 1 ? "" : "s"}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="text-xl font-semibold text-[var(--cart-text)]">
            ✕
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto pb-24">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[var(--cart-border)] bg-[var(--cart-card-bg)] p-6 text-center">
              <p className="text-lg font-semibold">Your cart is empty.</p>
              <p className="mt-2 text-sm text-[var(--cart-muted)]">
                Add a few bags of our favorites to get started.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-[var(--cart-border)] bg-[var(--cart-card-bg)] p-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-[var(--cart-muted)]">{item.origin}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id)} className="text-sm text-[var(--cart-muted)]">
                      Remove
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-[var(--cart-border)] bg-[var(--cart-control-bg)] px-2 py-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="h-7 w-7 rounded-full bg-[var(--brown-700)] text-sm text-white"
                      >
                        −
                      </button>
                      <span className="min-w-5 text-center text-sm font-bold">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="h-7 w-7 rounded-full bg-[var(--brown-700)] text-sm text-white"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="shopping-cart-footer absolute inset-x-0 bottom-0 border-t p-6">
          <div className="mb-4 flex items-center justify-between text-sm text-[var(--cart-muted)]">
            <span>Subtotal</span>
            <span className="text-lg font-bold text-[var(--cart-text)]">${subtotal.toFixed(2)}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-[var(--brown-700)] px-5 py-3 font-bold text-white shadow-lg shadow-[var(--brown-700)]/20 transition hover:bg-[var(--brown-600)]">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
