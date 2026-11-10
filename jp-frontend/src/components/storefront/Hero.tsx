"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "./types";

const depotImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA-MVIUHcyxST0bMXvQW47WQN2fgj7GJzl_nFgs6hnEPTfvhCM98uxkDMeyi6nbb6BXPc0n6mEe43v2Sg3ZchNyD1pam6TUW5mVi9bGfa2m5GIxYhpk2OShJdJifHGUU5p6dS1-ekdfxuQEBszIRhMfduhxLNihf_4fZPVCZdSTKjDWuADRg9_8vyzpK7PbghKm-fQ4elBgPzK5D8JfKQXHEMK-PD-MCrOIc-J1sCBi";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <section className="mx-auto w-full max-w-[1280px] px-3 py-3 sm:px-5 md:px-6 md:py-5 lg:px-8 lg:py-8">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#003673] via-[#0a4d9a] to-[#0879b8] px-4 py-5 text-white shadow-lg md:px-6 md:py-7 lg:grid lg:min-h-[360px] lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-8 lg:rounded-none lg:bg-none lg:px-0 lg:py-2 lg:text-[#111c2d] lg:shadow-none">
      {/* Mobile background carousel */}
      <div className="absolute inset-0 lg:hidden">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentImageIndex ? 0.5 : 0 }}
          >
            <img 
              src={product.image} 
              alt={product.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003673]/40 via-[#0a4d9a]/55 to-[#0879b8]/40" />
      </div>
      <div className="relative z-[1] max-w-[610px]">
        <span className="hidden items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white md:inline-flex lg:border-[#bfdbfe] lg:bg-[#eaf4ff] lg:text-[#0a4d9a]">● Sango Ota's Most Trusted Cold-Chain Hub · Direct From Blast Chillers</span>
        <h1 className="mb-3 mt-3 text-[26px] font-extrabold leading-[1.14] tracking-[-.03em] sm:text-3xl md:max-w-[580px] md:text-[36px] lg:text-[42px]">Fresh &amp; Solid Frozen Foods Delivered in <span className="text-[#93ccff] lg:text-[#0a4d9a]">Sango Ota</span> &amp; Environs</h1>
        <p className="max-w-[560px] text-xs leading-relaxed text-white md:text-sm lg:text-[#334155]">Direct from our blast-freezer cold rooms at honest market prices. 100% frozen solid guarantee zero thawed ice water, zero short weight.</p>
        <div className="mt-4 flex flex-row gap-2">
          <a href="https://wa.me/2348034567890?text=Hello%20jp-froze%2C%20I%20want%20to%20place%20an%20order" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#15803d] px-3 py-3 text-xs font-bold text-white shadow-[0_6px_18px_rgba(22,163,74,.25)] transition hover:bg-[#166534] sm:min-h-12 sm:px-4">
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp Order</span><span className="sm:hidden">WhatsApp</span>
          </a>
          <Link href="/products" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-xs font-bold text-[#003673] shadow-sm transition hover:bg-[#f0f7ff] sm:min-h-12 sm:px-4">
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Browse Products</span><span className="sm:hidden">Products</span>
          </Link>
        </div>
        <div className="mt-4 hidden grid-cols-3 gap-1.5 border-t border-white/30 pt-3 text-[10px] sm:gap-2 md:mt-5 md:grid lg:border-[#dbe3ef]">
          <div className="rounded bg-white/10 px-1.5 py-2 sm:px-2.5 lg:bg-[#f0f7ff]"><b className="block text-[11px] text-white sm:text-xs lg:text-[#003673]">❄ -18°C Solid Freeze</b><span className="text-white sm:text-[11px] lg:text-[#334155]">Industrial cold-room care</span></div>
          <div className="rounded bg-white/10 px-1.5 py-2 sm:px-2.5 lg:bg-[#f0f7ff]"><b className="block text-[11px] text-white sm:text-xs lg:text-[#003673]">◈ Insulated Delivery</b><span className="text-white sm:text-[11px] lg:text-[#334155]">No thaw, no drippings</span></div>
          <div className="rounded bg-white/10 px-1.5 py-2 sm:px-2.5 lg:bg-[#f0f7ff]"><b className="block text-[11px] text-white sm:text-xs lg:text-[#003673]">▣ Joju Walk-in Pickup</b><span className="text-white sm:text-[11px] lg:text-[#334155]">Instant weigh &amp; collect</span></div>
        </div>
      </div>
      <div className="relative mt-5 hidden h-[260px] overflow-hidden rounded-xl border-4 border-white/80 shadow-xl lg:mt-0 lg:block lg:h-[300px]">
        <img src={depotImage} alt="The jp-froze cold room and frozen food storage" className="h-full w-full object-cover"/>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-[#0f172a]/90 px-3 py-2.5 text-white backdrop-blur"><span><b className="block text-xs">−18°C DEPOT BLAST FREEZE</b><small className="text-[11px] text-white">Fresh from our cold room in Sango Ota</small></span><span className="rounded-full bg-[#15803d] px-2.5 py-1.5 text-[10px] font-bold text-white">LIVE COLD ROOM</span></div>
      </div>
    </div>
  </section>;
}
