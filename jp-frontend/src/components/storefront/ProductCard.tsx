"use client";

import { useState } from "react";
import type { AddToCart, Product, PurchaseUnit } from "./types";
import { money } from "./types";

export function ProductCard({ product, unit = "kg", onAdd }: { product: Product; unit?: PurchaseUnit; onAdd: AddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const price = unit === "kg" ? product.pricePerKg : product.cartonPrice;
  const unitLabel = unit === "kg" ? "/ KG" : `/${product.cartonSize}kg CARTON`;

  return <article className="flex min-w-0 overflow-hidden rounded-xl border border-[#dbe3ef] bg-white shadow-[0_4px_12px_-2px_rgba(10,77,154,.08)] transition hover:border-[#0284c7] hover:shadow-[0_12px_24px_-4px_rgba(10,77,154,.14)] sm:flex-col">
    <div className="relative h-auto w-[104px] shrink-0 bg-[#f8fafc] sm:h-[175px] sm:w-full lg:h-[190px]">
      <img src={product.image} alt={product.imageAlt} loading={product.id > 3 ? "lazy" : "eager"} className="h-full w-full object-cover"/>
      <span className="absolute left-1.5 top-1.5 max-w-[90%] rounded bg-[#003673] px-2 py-1.5 text-[11px] font-bold leading-tight text-white sm:left-2.5 sm:top-2.5">{product.badge}</span>
      <span className="absolute bottom-1.5 left-1.5 hidden rounded bg-[#15803d] px-2 py-1.5 text-[11px] font-bold text-white sm:bottom-2.5 sm:left-2.5 sm:block">In Cold Room · Solid</span>
    </div>
    <div className="flex min-w-0 flex-1 flex-col p-2.5 sm:p-3.5">
      <div className="mb-1 flex items-center gap-1 text-[11px] font-bold text-[#166534]">● <span className="truncate">{product.batchLabel}</span></div>
      <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#111c2d] sm:min-h-10">{product.name}</h3>
      <p className="mt-1 hidden min-h-10 text-xs leading-relaxed text-[#334155] sm:block">{product.description}</p>
      <div className="mt-auto pt-2">
        <div className="flex items-end justify-between gap-1.5 rounded-md bg-[#eaf2ff] px-2.5 py-2 sm:px-3 sm:py-2.5"><div><strong className="block text-lg font-extrabold leading-none text-[#003673] sm:text-2xl">{money(price)}</strong><span className="mt-1 block text-[11px] font-medium text-[#334155]">{unitLabel}</span></div><span className="hidden text-right text-[11px] leading-relaxed text-[#334155] sm:block">Carton ({product.cartonSize}kg):<b className="block text-xs font-bold text-[#003673]">{money(product.cartonPrice)}</b></span></div>
        <div className="mt-2 flex items-center gap-1.5 sm:mt-2.5"><div className="flex h-11 items-center rounded-lg border border-[#cbd5e1] bg-white sm:h-12"><button type="button" onClick={() => setQuantity((qty) => Math.max(1, qty - 1))} className="grid h-full w-9 place-items-center text-lg text-[#003673] hover:bg-[#f0f7ff]" aria-label={`Decrease ${product.name} quantity`}>−</button><span className="min-w-7 text-center text-xs font-bold text-[#111c2d]">{quantity}</span><button type="button" onClick={() => setQuantity((qty) => qty + 1)} className="grid h-full w-9 place-items-center text-lg text-[#003673] hover:bg-[#f0f7ff]" aria-label={`Increase ${product.name} quantity`}>+</button></div><button type="button" onClick={() => { onAdd(product, unit, quantity); setQuantity(1); }} className="flex h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#003673] px-2 text-xs font-bold text-white transition hover:bg-[#0a4d9a] sm:h-12">🛒 <span className="truncate">Add to Basket</span></button></div>
      </div>
    </div>
  </article>;
}
