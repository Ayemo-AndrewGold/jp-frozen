import Link from "next/link";
import { money } from "./types";

export function SiteHeader({ cartCount = 0, cartTotal = 0, onOpenCart }: { cartCount?: number; cartTotal?: number; onOpenCart?: () => void }) {
  const links = [
    ["Home / Shop", "/"], ["Chicken & Poultry", "/products?category=Poultry%20%26%20Chicken"],
    ["Turkey Wings", "/products?category=Poultry%20%26%20Chicken"], ["Fish (Titus & Croaker)", "/products?category=Fish%20%26%20Seafood"],
    ["Carton / Wholesale Deals", "/products?category=Carton%20Deals"], ["How Delivery Works", "/#delivery"],
  ];

  return <header className="sticky top-0 z-40 bg-white shadow-[0_1px_8px_rgba(15,23,42,.08)]">
    <div className="flex min-h-9 items-center justify-between bg-[#003673] px-3 py-1.5 text-xs font-semibold text-white sm:px-5 lg:px-8">
      <span className="flex items-center gap-1.5"><span className="text-[#5cd978]">●</span> COLD-CHAIN DEPOT · SANGO OTA · -18°C MONITORED FACILITY</span>
      <span className="hidden items-center gap-3 sm:flex"><a href="tel:+2348034567890">☎ Hotline: 0803 456 7890</a><span className="text-[#5cd978]">FROZEN AT -18°C</span></span>
    </div>
    <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-3 py-2 sm:px-5 lg:gap-4 lg:px-8 lg:py-3">
      <Link className="flex shrink-0 items-center gap-2 text-[#003673]" href="/" aria-label="jp-froze foods home"><span className="grid h-10 w-10 place-items-center rounded-lg bg-[#003673] text-lg text-white">❄</span><span className="text-base font-extrabold leading-tight tracking-tight sm:text-lg">jp-froze foods <small className="block text-xs font-medium tracking-normal text-[#334155] sm:text-sm">Cold Chain Depot · Sango Ota</small></span></Link>
      <div className="hidden shrink-0 items-center gap-1 rounded-full bg-[#f0f7ff] px-3 py-2 text-sm text-[#334155] lg:flex"><span className="text-[#003673]">⌖</span> Sango Ota Cold Store (Ogun State)</div>
      <form action="/products" className="relative ml-auto hidden min-w-40 max-w-[450px] flex-1 md:block"><input name="query" className="h-11 w-full rounded-lg border border-[#cbd5e1] bg-[#f7faff] pl-9 pr-3 text-sm outline-none placeholder:text-[#64748b] focus:border-[#0284c7] lg:h-12 lg:text-base" placeholder="Search Titus Fish, Chicken Laps, Turkey Wings…"/><span className="absolute left-3 top-2.5 text-base text-[#475569]">⌕</span></form>
      <div className="ml-auto flex shrink-0 items-center gap-1.5 md:ml-0 lg:gap-3">
        <a className="hidden h-11 items-center gap-2 rounded-lg bg-[#15803d] px-3 text-sm font-bold text-white shadow-sm hover:bg-[#166534] lg:flex lg:h-12 lg:px-5 lg:text-base" href="https://wa.me/2348034567890" target="_blank" rel="noreferrer"><span className="text-base">▣</span> Order on WhatsApp</a>
        {onOpenCart ? <button onClick={onOpenCart} className="relative flex h-11 items-center gap-1.5 rounded-lg bg-[#003673] px-2.5 text-white transition hover:bg-[#0a4d9a] sm:gap-2 sm:px-3 lg:h-12 lg:gap-3 lg:px-4"><span className="text-lg lg:text-xl">▣</span><span className="text-left"><small className="block text-xs font-semibold text-white lg:text-sm">My Basket</small><strong className="block text-sm leading-none sm:text-sm lg:text-base">{money(cartTotal)}</strong></span>{cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#0284c7] px-1 text-xs font-bold text-white">{cartCount}</span>}</button> : <Link href="/products" className="rounded-lg bg-[#003673] px-3 py-2.5 text-sm font-bold text-white">All Products</Link>}
        <button className="hidden h-10 w-10 place-items-center rounded-full bg-[#e7eeff] text-[#003673] sm:grid lg:h-12 lg:w-12" aria-label="Your account">●</button>
      </div>
    </div>
    <form action="/products" className="relative mx-3 mb-2 md:hidden"><input name="query" className="h-10 w-full rounded-lg border border-[#dbe3ef] bg-[#f7faff] pl-9 pr-3 text-base outline-none placeholder:text-sm placeholder:text-[#94a3b8] focus:border-[#0284c7]" placeholder="Search chicken, Titus fish, turkey…"/><span className="absolute left-3 top-2.5 text-lg text-[#64748b]">⌕</span></form>
    <nav className="hidden h-12 items-center justify-between border-t border-[#e5eaf3] bg-[#f0f3ff] px-3 sm:px-5 md:flex lg:px-8" aria-label="Product navigation"><div className="mx-auto flex w-full max-w-[1280px] items-center gap-4 overflow-hidden lg:gap-6">{links.map(([label, href], index) => <Link key={label} href={href} className={`shrink-0 text-sm font-semibold ${index === 0 ? "rounded bg-[#0a4d9a] px-3 py-2.5 text-white" : "text-[#334155] hover:text-[#003673]"}`}>{label}</Link>)}<span className="ml-auto shrink-0 text-xs font-bold text-[#166534]">✓ Commercial Weight Guaranteed</span></div></nav>
  </header>;
}
