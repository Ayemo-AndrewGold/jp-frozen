"use client";

import { useEffect, useState } from "react";
import { products } from "./types";

export function WholesaleCallout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <section className="mx-auto my-5 overflow-hidden rounded-xl shadow-lg sm:mx-5 lg:mx-auto">
    <div className="relative max-w-[1280px] bg-gradient-to-r from-[#003673] to-[#0879b8]">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentImageIndex ? 0.4 : 0 }}
          >
            <img 
              src={product.image} 
              alt={product.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003673]/85 to-[#0879b8]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-5 text-white sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold text-white">
          FOR CATERERS, HOTELS, RESELLERS &amp; EVENT PLANNERS
        </span>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight md:text-[28px]">
          Planning a party, wedding or<br className="hidden md:block"/> running a food business in Sango Ota?
        </h2>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white md:text-sm">
          Buy 5 cartons or more and get exclusive wholesale depot discounts. Free cold-van delivery across Sango Ota on wholesale orders.
        </p>
        
        {/* Buttons side by side */}
        <div className="mt-4 flex flex-row gap-2 sm:gap-3">
          <a 
            href="tel:+2348034567890" 
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-xs font-bold text-[#003673] shadow-sm transition hover:bg-[#f0f7ff] sm:px-4"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call Wholesale Desk</span>
            <span className="sm:hidden">Call Now</span>
          </a>
          <a 
            href="https://wa.me/2348034567890?text=Hello%20jp-froze%2C%20I%20am%20interested%20in%20wholesale%20carton%20prices" 
            target="_blank" 
            rel="noreferrer" 
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#15803d] px-3 py-3 text-xs font-bold text-white shadow-[0_6px_18px_rgba(22,163,74,.25)] transition hover:bg-[#166534] sm:px-4"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>;
}
