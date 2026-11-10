const steps = [
  { number: "01", title: "Pick Your Items", detail: "Choose how many KG or cartons you need. We show the exact price before you order.", note: "Tap a product to add it" },
  { number: "02", title: "Fast Dispatch in Ice Tubs", detail: "We pack directly from our Sango Ota cold room in reusable, food-safe insulated tubs.", note: "Same-day dispatch available" },
  { number: "03", title: "Receive, Inspect & Smile", detail: "Open your delivery at the door and inspect every item before payment is complete.", note: "100% freshness guarantee" },
];

export function HowItWorks() {
  return <section className="mx-auto max-w-[1280px] bg-[#f0f3ff] px-3 py-7 sm:px-5 md:rounded-xl md:px-6 md:py-8 lg:px-8"><div className="mb-4 text-center"><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0a4d9a]">EFFORTLESS · TRANSPARENT · SAFE</p><h2 className="mt-1 text-xl font-bold text-[#111c2d] md:text-2xl">How Getting Your Frozen Food Works</h2><p className="mx-auto mt-1 max-w-lg text-xs text-[#334155] sm:text-sm">From our Sango Ota blast cold room directly to your doorstep in three easy steps.</p></div><div className="grid gap-2.5 md:grid-cols-3 md:gap-3">{steps.map((step) => <article key={step.number} className="rounded-xl border border-[#cbd5e1] bg-white p-4 md:p-5"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#d7e3ff] text-xs font-extrabold text-[#003673]">{step.number}</span><h3 className="mt-3 text-sm font-bold text-[#111c2d]">{step.title}</h3><p className="mt-2 text-xs leading-relaxed text-[#334155] sm:text-sm">{step.detail}</p><p className="mt-3 text-[11px] font-bold text-[#0a4d9a]">↗ {step.note}</p></article>)}</div></section>;
}
