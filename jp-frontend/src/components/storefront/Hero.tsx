import Link from "next/link";

const depotImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuA-MVIUHcyxST0bMXvQW47WQN2fgj7GJzl_nFgs6hnEPTfvhCM98uxkDMeyi6nbb6BXPc0n6mEe43v2Sg3ZchNyD1pam6TUW5mVi9bGfa2m5GIxYhpk2OShJdJifHGUU5p6dS1-ekdfxuQEBszIRhMfduhxLNihf_4fZPVCZdSTKjDWuADRg9_8vyzpK7PbghKm-fQ4elBgPzK5D8JfKQXHEMK-PD-MCrOIc-J1sCBi";

export function Hero() {
  return <section className="mx-auto w-full max-w-[1280px] px-3 py-3 sm:px-5 md:px-6 md:py-5 lg:px-8 lg:py-8">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#003673] via-[#0a4d9a] to-[#0879b8] px-4 py-5 text-white shadow-lg md:px-6 md:py-7 lg:grid lg:min-h-[360px] lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-8 lg:rounded-none lg:bg-none lg:px-0 lg:py-2 lg:text-[#111c2d] lg:shadow-none">
      <div className="relative z-[1] max-w-[610px]">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white lg:border-[#bfdbfe] lg:bg-[#eaf4ff] lg:text-[#0a4d9a]">● Sango Ota’s Most Trusted Cold-Chain Hub · Direct From Blast Chillers</span>
        <h1 className="mb-3 mt-3 text-[26px] font-extrabold leading-[1.14] tracking-[-.03em] sm:text-3xl md:max-w-[580px] md:text-[36px] lg:text-[42px]">Fresh &amp; Solid Frozen Foods Delivered in <span className="text-[#93ccff] lg:text-[#0a4d9a]">Sango Ota</span> &amp; Environs</h1>
        <p className="max-w-[560px] text-xs leading-relaxed text-white md:text-sm lg:text-[#334155]">Direct from our blast-freezer cold rooms at honest market prices. 100% frozen solid guarantee — zero thawed ice water, zero short weight.</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a href="https://wa.me/2348034567890?text=Hello%20jp-froze%2C%20I%20want%20to%20place%20an%20order" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#15803d] px-4 text-xs font-bold text-white shadow-[0_6px_18px_rgba(22,163,74,.25)] transition hover:bg-[#166534]">▣ Order on WhatsApp (0803 456 7890)</a>
          <Link href="/products" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-4 text-xs font-bold text-[#003673] shadow-sm transition hover:bg-[#f0f7ff]">⌕ Browse Products &amp; Prices</Link>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-1.5 border-t border-white/30 pt-3 text-[10px] sm:gap-2 md:mt-5 lg:border-[#dbe3ef]">
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
