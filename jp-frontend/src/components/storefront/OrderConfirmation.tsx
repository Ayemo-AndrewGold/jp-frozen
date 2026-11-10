"use client";

import Link from "next/link";
import { money, products } from "./types";

const waybill = [
  { product: products[0], quantity: "2 KG", lineTotal: 9_700, note: "❄ Blast frozen at −18°C" },
  { product: products[1], quantity: "1 sealed carton (10 KG)", lineTotal: 60_000, note: "▣ Factory strapped" },
  { product: products[2], quantity: "3 KG", lineTotal: 15_300, note: "❄ Ocean direct catch" },
];

const stages = [
  { icon: "✓", title: "Payment verified via Paystack", label: "Success", body: "Your payment was received and the order receipt was created.", done: true },
  { icon: "▣", title: "Packing in insulated ice boxes", label: "In progress", body: "The Idiroko Depot team is packing your order with reusable dry-gel ice blocks.", done: false },
  { icon: "♧", title: "Insulated reefer van dispatch", label: "Estimated travel: 25–40 min", body: "The driver is travelling along Idiroko Road towards Joju Junction.", done: false },
  { icon: "⌖", title: "Arrive and inspect the frozen goods", label: "", body: "Check the cartons before accepting delivery. Your order is covered by our frozen-arrival guarantee.", done: false },
];

const card = "mb-4 rounded-xl border border-[#dbe3ef] bg-white p-4 shadow-[0_4px_12px_-2px_rgba(10,77,154,.08)] sm:p-5";
const sectionTitle = "text-base font-bold text-[#111c2d] sm:text-lg";

export function OrderConfirmation() {
  return <main className="min-h-screen bg-[#f0f7ff] pb-8 text-[#111c2d]">
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-[#dbe3ef] bg-white px-4 sm:px-6">
      <Link href="/" aria-label="Back to jp-froze home" className="text-2xl font-semibold text-[#003673]">←</Link>
      <div className="mr-auto ml-3"><h1 className="text-base font-bold text-[#111c2d] sm:text-lg">Digital receipt</h1><p className="text-xs font-semibold text-[#166534]">✓ Verified cold-chain order</p></div>
      <a className="grid h-10 w-10 place-items-center rounded-full bg-[#e7eeff] text-lg text-[#003673]" href="tel:+2348034567890" aria-label="Call jp-froze">☎</a>
      <span className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-[#003673] text-sm text-white" aria-label="Customer account">●</span>
    </header>

    <section className="mx-auto max-w-[740px] px-3 sm:px-5">
      <div className="py-7 text-center sm:py-9">
        <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#005c25] text-3xl text-white shadow-lg">✓<span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#d7e3ff] text-base text-[#003673]">❄</span></div>
        <p className="mx-auto mt-4 w-fit rounded-full bg-[#dcfce7] px-4 py-2 text-xs font-bold text-[#166534] sm:text-sm">✓ Payment confirmed with Paystack</p>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#111c2d] sm:text-4xl">₦86,500</p>
        <p className="mt-2 text-xs text-[#003673] sm:text-sm">Order <b>#JPF-78429</b><span className="mx-2 text-[#64748b]">•</span>Today, 2:45 PM</p>
        <div className="mx-auto mt-4 flex max-w-[590px] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl bg-[#dbeafe] px-4 py-3 text-xs sm:flex-nowrap sm:text-sm"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#16a34a]"/><b className="text-[#003673]">Cold-room status:</b><span className="text-[#1e293b]">Packed frozen solid at Idiroko Depot</span></div>
      </div>

      <section className={card}>
        <div className="mb-4 flex items-center justify-between gap-2"><h2 className={sectionTitle}>♧ What happens next</h2><span className="rounded-full bg-[#dbeafe] px-3 py-1.5 text-xs font-bold text-[#003673]">Live timeline</span></div>
        <div className="space-y-0">{stages.map((stage, index) => <div key={stage.title} className="relative flex gap-3 pb-5 last:pb-0 sm:gap-4"><div className="relative flex w-6 shrink-0 justify-center"><span className={`z-[1] grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${stage.done ? "bg-[#15803d] text-white" : index === 1 ? "bg-[#003673] text-white" : "border border-[#cbd5e1] bg-[#eff6ff] text-[#475569]"}`}>{stage.icon}</span>{index < stages.length - 1 && <span className="absolute bottom-[-4px] top-6 w-px bg-[#cbd5e1]"/>}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-1.5"><b className="text-sm font-semibold leading-snug text-[#1e293b]">{stage.title}</b>{stage.label && <span className={`rounded px-2.5 py-1 text-[11px] font-bold ${stage.done ? "bg-[#dcfce7] text-[#166534]" : index === 1 ? "bg-[#dbeafe] text-[#003673]" : "bg-[#eff6ff] text-[#0a4d9a]"}`}>{stage.label}</span>}</div><p className="mt-1 text-xs leading-relaxed text-[#334155] sm:text-sm">{stage.body}</p></div></div>)}</div>
      </section>

      <section className={card}>
        <div className="mb-4 flex items-center justify-between"><h2 className={sectionTitle}>▤ Itemized waybill</h2><span className="rounded bg-[#dbeafe] px-3 py-1.5 text-xs font-semibold text-[#003673]">3 items</span></div>
        <div className="space-y-3">{waybill.map(({ product, quantity, lineTotal, note }) => <div className="flex items-center gap-3 rounded-lg bg-[#eff6ff] p-2.5 sm:p-3" key={product.id}><img src={product.image} alt="" className="h-14 w-16 rounded-md object-cover sm:h-16 sm:w-[72px]"/><div className="min-w-0 flex-1"><h3 className="truncate text-xs font-semibold text-[#111c2d] sm:text-sm">{product.name}</h3><p className="mt-1 text-[11px] text-[#334155] sm:text-xs">{quantity} · {money(product.pricePerKg)} / KG</p><p className="mt-1 text-[11px] font-semibold text-[#0a4d9a]">{note}</p></div><strong className="text-xs font-bold text-[#111c2d] sm:text-sm">{money(lineTotal)}</strong></div>)}</div>
        <div className="mt-4 space-y-3 border-t border-[#cbd5e1] pt-4 text-xs text-[#334155] sm:text-sm"><div className="flex justify-between gap-3"><span>Subtotal</span><span>{money(85_000)}</span></div><div className="flex justify-between gap-3"><span>♧ Reefer delivery · Joju Junction</span><span>{money(1_500)}</span></div><div className="flex justify-between gap-3"><span>❄ Cold pack and thermal seal</span><b className="text-[#166534]">FREE</b></div><div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-[#dbeafe] px-3 py-3 sm:px-4"><span><b className="block text-xs font-bold uppercase tracking-wide text-[#1e293b]">Total paid · Paystack</b><small className="mt-1 block text-[11px] text-[#334155]">Ref: PSTK_98246102X</small></span><strong className="text-2xl font-extrabold text-[#003673] sm:text-3xl">{money(86_500)}</strong></div></div>
      </section>

      <section className={card}>
        <div className="mb-4 flex items-center justify-between gap-2"><h2 className={sectionTitle}>⌖ Drop-off &amp; recipient</h2><span className="rounded-full bg-[#dbeafe] px-3 py-1.5 text-xs font-bold text-[#003673]">Direct doorstep</span></div>
        <div className="space-y-3 rounded-lg bg-[#eff6ff] p-3 text-xs sm:p-4 sm:text-sm"><div className="flex justify-between gap-3"><span className="text-[#475569]">Customer</span><b className="text-right text-[#111c2d]">Mrs. Funke Adeyemi</b></div><div className="flex justify-between gap-3"><span className="text-[#475569]">Phone &amp; WhatsApp</span><a className="font-bold text-[#003673] underline underline-offset-2" href="tel:+2348031234567">☎ 0803 123 4567</a></div><div><span className="text-[#475569]">Landmark address</span><p className="mt-1.5 rounded bg-white p-3 leading-relaxed text-[#1e293b]">Suite 4, Block B, beside GTBank Joju Branch, Idiroko Road, Sango Ota, Ogun State.</p></div></div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#dbe3ef] pt-3 text-xs sm:text-sm"><span className="text-[#334155]">△ Driver route: Idiroko Depot → Joju</span><span className="font-bold text-[#166534]">● Live GPS</span></div>
      </section>

      <section className="mb-4 rounded-xl border border-[#bbd7c5] bg-[#e7f5eb] p-4 sm:p-5"><h2 className="text-base font-bold text-[#111c2d] sm:text-lg">◉ 100% solid-frozen arrival warranty</h2><p className="mt-2 text-sm leading-relaxed text-[#1e293b]">Touch every carton at delivery. If anything is soft or defrosted, we replace it instantly or refund your full payment. No questions asked.</p><a className="mt-3 inline-block text-sm font-bold text-[#003673] underline underline-offset-2" href="tel:+2348034567890">☎ Depot hotline: 0803 456 7890</a></section>

      <div className="grid gap-2.5 sm:grid-cols-2"><a href={`https://wa.me/2348034567890?text=${encodeURIComponent("Please send the waybill for order JPF-78429")}`} className="flex min-h-12 items-center justify-center rounded-lg bg-[#15803d] px-3 text-center text-sm font-bold text-white hover:bg-[#166534]">▤ Send waybill to WhatsApp · 0803 456 7890</a><div className="grid grid-cols-2 gap-2.5"><button onClick={() => window.print()} className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg bg-[#003673] px-2 text-xs font-bold text-white hover:bg-[#0a4d9a]">↓ Save PDF bill</button><a href="https://maps.google.com/?q=Joju+Junction+Sango+Ota" target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg bg-[#dbeafe] px-2 text-xs font-bold text-[#003673] hover:bg-[#bfdbfe]">⌖ Track van GPS</a></div></div>
      <p className="py-6 text-center text-xs text-[#334155]">jp-froze Foods Ltd. · Central Cold-Storage, Idiroko Road, Sango Ota, Ogun State</p>
      <div className="pb-8 text-center"><Link href="/" className="text-sm font-bold text-[#003673] underline underline-offset-2">← Continue shopping</Link></div>
    </section>
  </main>;
}
