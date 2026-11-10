import { Icon } from "./Icon";
import { money } from "./types";
import type { CartLine, PurchaseUnit } from "./types";

export function CartDrawer({ cart, onChangeQuantity, onClose, onCheckout }: {
  cart: CartLine[];
  onChangeQuantity: (productId: number, unit: PurchaseUnit, delta: number) => void;
  onClose: () => void;
  onCheckout: () => void;
}) {
  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.quantity * (line.unit === "kg" ? line.product.pricePerKg : line.product.cartonPrice), 0);

  return <div className="fixed inset-0 z-50 flex justify-end bg-[#0f172a]/55" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <aside className="flex h-full w-full flex-col bg-[#f0f7ff] shadow-[-12px_0_40px_#0002] sm:max-w-[500px]" aria-label="Your frozen basket">
      <div className="flex items-start justify-between border-b border-[#cbd5e1] bg-white px-5 py-5 sm:px-7"><div><p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#0a4d9a]">SANGO OTA COLD STORE</p><h2 className="mt-1 text-2xl font-bold text-[#111c2d]">Your Frozen Basket <span className="text-base text-[#475569]">({itemCount})</span></h2></div><button className="grid h-11 w-11 place-items-center rounded-full border border-[#cbd5e1] bg-white text-lg text-[#003673] hover:bg-[#e7eeff]" onClick={onClose} aria-label="Close basket"><Icon name="close"/></button></div>
      {cart.length === 0 ? <div className="m-auto max-w-[360px] px-8 text-center"><span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-[#d7e3ff] text-2xl text-[#003673]">▣</span><h3 className="text-xl font-bold text-[#111c2d]">Your basket is empty</h3><p className="my-3 text-sm leading-relaxed text-[#334155]">Choose frozen food by the kilo or by the carton. We’ll keep your order ready for pickup or cold-van delivery.</p><button className="mt-2 min-h-12 rounded-lg bg-[#003673] px-5 text-sm font-bold text-white hover:bg-[#0a4d9a]" onClick={onClose}>Browse frozen foods</button></div> : <>
        <div className="flex-1 overflow-auto px-4 py-2 sm:px-6">{cart.map((line) => <div key={`${line.product.id}-${line.unit}`} className="flex gap-3 border-b border-[#cbd5e1] py-4"><img src={line.product.image} alt="" className="h-[76px] w-[82px] rounded-lg object-cover"/><div className="min-w-0 flex-1"><b className="block truncate text-sm text-[#111c2d]">{line.product.name}</b><small className="mt-1 block text-xs text-[#475569]">{line.unit === "kg" ? "Retail · per KG" : `Full carton · ${line.product.cartonSize}kg`}</small><div className="mt-2 inline-flex h-10 items-center rounded-lg border border-[#cbd5e1] bg-white"><button className="grid h-full w-10 place-items-center text-lg text-[#003673]" onClick={() => onChangeQuantity(line.product.id, line.unit, -1)} aria-label="Decrease quantity">−</button><span className="min-w-8 text-center text-xs font-bold text-[#111c2d]">{line.quantity}</span><button className="grid h-full w-10 place-items-center text-lg text-[#003673]" onClick={() => onChangeQuantity(line.product.id, line.unit, 1)} aria-label="Increase quantity">+</button></div></div><strong className="whitespace-nowrap text-sm font-extrabold text-[#003673]">{money(line.quantity * (line.unit === "kg" ? line.product.pricePerKg : line.product.cartonPrice))}</strong></div>)}</div>
        <div className="border-t border-[#cbd5e1] bg-white px-5 pb-5 pt-5 sm:px-7"><p className="flex items-center gap-2 text-xs text-[#334155]"><span className="text-[#0a4d9a]">⌖</span> Delivery fee confirmed by your pickup / delivery area</p><div className="mt-4 flex justify-between text-sm text-[#334155]"><span>Subtotal</span><strong className="text-xl font-extrabold text-[#003673]">{money(subtotal)}</strong></div><small className="mt-1 block text-xs text-[#475569]">Cold-room pickup is available at Joju Junction.</small><button onClick={onCheckout} className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#003673] text-sm font-bold text-white transition hover:bg-[#0a4d9a]">Continue to secure checkout <Icon name="arrow" size={17}/></button><a href="https://wa.me/2348034567890" className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#15803d] text-sm font-bold text-white hover:bg-[#166534]">▣ Order on WhatsApp</a><p className="mt-3 text-center text-xs text-[#334155]">Paystack · bank transfer · cash at pickup</p></div>
      </>}
    </aside>
  </div>;
}
