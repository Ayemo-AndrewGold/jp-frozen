"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AddToCart, Category, PurchaseUnit } from "./types";
import { categories, products } from "./types";
import { ProductCard } from "./ProductCard";

export function ProductSection({ onAdd, unit = "kg", full = false, initialQuery = "", initialCategory = "All Items" }: { onAdd: AddToCart; unit?: PurchaseUnit; full?: boolean; initialQuery?: string; initialCategory?: Category }) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState("best");
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All Items" || category === "Carton Deals" || product.category === category;
    const matchesQuery = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }).sort((a, b) => sort === "price-low" ? a.pricePerKg - b.pricePerKg : sort === "price-high" ? b.pricePerKg - a.pricePerKg : a.id - b.id), [category, query, sort]);
  const shownProducts = full ? visibleProducts : visibleProducts.slice(0, 6);

  return <section className={`mx-auto w-full max-w-[1280px] px-3 sm:px-5 lg:px-8 ${full ? "py-4 md:py-6" : "py-7 md:py-10 lg:py-12"}`} id="store-catalog">
    <div className="mb-3 flex items-end justify-between gap-3 md:mb-4"><div><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0a4d9a]">{full ? "❄ Direct Sango Ota Inventory" : "❄ Cold Chamber Essentials"}</p><h2 className="mt-1 text-xl font-bold tracking-tight text-[#111c2d] md:text-2xl">{full ? "Available Today • Frozen Solid" : "Everyday Popular Frozen Foods"}</h2></div>{!full && <Link className="shrink-0 text-xs font-bold text-[#003673] underline decoration-[#93c5fd] underline-offset-4" href="/products">See all products <span aria-hidden>→</span></Link>}</div>
    {full && <div className="mb-3 grid grid-cols-2 gap-2 rounded-xl border border-[#dbe3ef] bg-white p-2.5 sm:grid-cols-4 md:flex md:items-center md:justify-between md:px-4"><span className="col-span-2 text-xs font-bold text-[#003673] sm:col-span-1">❄ Sango Ota Dispatch Corridors &amp; Hubs</span><span className="rounded-full bg-[#f0f7ff] px-2.5 py-1.5 text-[11px] text-[#1e293b]">• Joju Hub: Free Pickup</span><span className="rounded-full bg-[#f0f7ff] px-2.5 py-1.5 text-[11px] text-[#1e293b]">Sango Bridge</span><span className="rounded-full bg-[#f0f7ff] px-2.5 py-1.5 text-[11px] text-[#1e293b]">Old Tollgate</span><span className="hidden rounded-full bg-[#f0f7ff] px-2.5 py-1.5 text-[11px] text-[#1e293b] lg:inline">Iyana Iyesi</span></div>}
    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div className="-mr-3 flex items-center gap-1.5 overflow-x-auto pb-1 sm:mr-0 md:flex-wrap">
        {categories.map((item, index) => <button key={item} type="button" onClick={() => setCategory(item)} className={`min-h-10 shrink-0 rounded-full px-3 py-2 text-[11px] font-semibold transition sm:text-xs ${category === item ? "bg-[#003673] text-white shadow-sm" : "bg-white text-[#1e293b] shadow-sm hover:bg-[#eaf4ff]"}`}>{item}{item === "All Items" && <span className="ml-1 text-[10px]">{full ? "(9)" : "(6)"}</span>}{full && index > 0 && <span className="ml-1 opacity-80">{item === "Poultry & Chicken" ? "5" : item === "Fish & Seafood" ? "4" : "3"}</span>}</button>)}
      </div>
      {full && <div className="flex items-center gap-2"><label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#cbd5e1] bg-white px-3 md:w-[290px] md:flex-none"><span className="text-lg text-[#475569]">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-base text-[#111c2d] outline-none placeholder:text-xs placeholder:text-[#64748b]" placeholder="Search Titus Fish, Chicken Laps…" aria-label="Search products"/></label><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)} className="hidden h-11 rounded-lg border border-[#cbd5e1] bg-white px-3 text-xs text-[#1e293b] sm:block"><option value="best">Sort: Best Sellers First</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select></div>}
    </div>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {shownProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} unit={unit}/>) }
    </div>
    {shownProducts.length === 0 && <div className="rounded-xl border border-[#dbe3ef] bg-white p-8 text-center text-sm text-[#64748b]">No products match that search. Try another name or category.</div>}
    {!full && <div className="mt-4 text-center md:hidden"><Link href="/products" className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#003673] bg-white text-xs font-bold text-[#003673]">Browse all frozen foods →</Link></div>}
  </section>;
}
