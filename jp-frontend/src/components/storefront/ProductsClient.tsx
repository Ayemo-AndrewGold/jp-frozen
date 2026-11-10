"use client";

import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { MobileDock } from "./MobileDock";
import { ProductSection } from "./ProductSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Toast } from "./Toast";
import { WholesaleCallout } from "./WholesaleCallout";
import type { CartLine, Category, Product, PurchaseUnit } from "./types";
import { money } from "./types";

export function ProductsClient({ initialQuery = "", initialCategory = "All Items" }: { initialQuery?: string; initialCategory?: Category }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [unit, setUnit] = useState<PurchaseUnit>("kg");
  const [notice, setNotice] = useState("");
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => sum + line.quantity * (line.unit === "kg" ? line.product.pricePerKg : line.product.cartonPrice), 0);

  function add(product: Product, selectedUnit: PurchaseUnit = unit, quantity = 1) {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id && line.unit === selectedUnit);
      if (existing) return current.map((line) => line === existing ? { ...line, quantity: line.quantity + quantity } : line);
      return [...current, { product, unit: selectedUnit, quantity }];
    });
    setNotice(`${quantity} × ${product.name} added to basket`);
    window.setTimeout(() => setNotice(""), 2400);
  }

  function changeQuantity(productId: number, itemUnit: PurchaseUnit, delta: number) {
    setCart((current) => current.map((line) => line.product.id === productId && line.unit === itemUnit ? { ...line, quantity: Math.max(0, line.quantity + delta) } : line).filter((line) => line.quantity > 0));
  }

  return <>
    <SiteHeader cartCount={count} cartTotal={total} onOpenCart={() => setCartOpen(true)}/>
    <main className="min-h-screen bg-[#f9f9ff] pb-5 text-[#111c2d] md:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#d7e3ff] px-3 py-2 text-[8px] font-semibold text-[#003673] sm:px-5 md:px-8"><span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-extrabold text-[#005c25]">● −18.4°C BLAST FREEZERS ACTIVE</span><span>⌖ Joju Junction Hub · Idiroko Road · Walk-ins &amp; dispatch</span><a href="tel:+2348034567890" className="hidden sm:inline">☎ Direct Cold Room: 0803 456 7890</a></div>
      <section className="mx-auto mt-3 max-w-[1280px] px-3 sm:px-5 lg:px-8"><div className="rounded-xl border border-[#dbe3ef] bg-white p-2.5 shadow-sm md:p-4"><div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between"><div className="flex rounded-lg bg-[#f0f3ff] p-1"><button onClick={() => setUnit("kg")} className={`rounded-md px-3 py-2 text-[9px] font-bold ${unit === "kg" ? "bg-[#003673] text-white shadow" : "text-[#475569]"}`}>♙ Buy by KG (Retail &amp; POS)</button><button onClick={() => setUnit("carton")} className={`rounded-md px-3 py-2 text-[9px] font-bold ${unit === "carton" ? "bg-[#003673] text-white shadow" : "text-[#475569]"}`}>▣ Master Cartons</button></div><span className="text-[8px] font-semibold text-[#15803d]">✓ Save more on carton orders</span></div><p className="mt-2 text-[9px] leading-relaxed text-[#64748b]">Choose your pickup hub, browse current stock, and add products by weight or full carton.</p></div></section>
      <ProductSection onAdd={add} unit={unit} full initialQuery={initialQuery} initialCategory={initialCategory}/>
      <WholesaleCallout/>
    </main>
    <SiteFooter/>
    <MobileDock count={count} total={total} onOpenCart={() => setCartOpen(true)}/>
    {count > 0 && <div className="fixed bottom-5 left-1/2 z-30 hidden w-[min(760px,calc(100%-32px))] -translate-x-1/2 items-center gap-3 rounded-xl border border-[#bfdbfe] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,.2)] md:flex"><span className="grid h-11 w-11 place-items-center rounded-lg bg-[#d7e3ff] text-xl text-[#003673]">▣</span><div className="min-w-0 flex-1"><b className="block text-xs text-[#111c2d]">{count} items in basket · Free Joju Hub pickup</b><strong className="text-xl font-extrabold text-[#003673]">{money(total)}</strong></div><button onClick={() => setCartOpen(true)} className="min-h-11 rounded-lg bg-[#e7eeff] px-4 text-xs font-bold text-[#003673]">View Cart</button><a href="https://wa.me/2348034567890" className="min-h-11 rounded-lg bg-[#15803d] px-4 text-xs font-bold leading-[44px] text-white">▣ WhatsApp Quick Send</a><button onClick={() => { setCartOpen(false); window.location.href = "/orders/confirmation"; }} className="min-h-11 rounded-lg bg-[#003673] px-4 text-xs font-bold text-white">Proceed to Checkout →</button></div>}
    <Toast message={notice}/>
    {cartOpen && <CartDrawer cart={cart} onChangeQuantity={changeQuantity} onClose={() => setCartOpen(false)} onCheckout={() => { setCartOpen(false); window.location.href = "/orders/confirmation"; }}/>}
  </>;
}
