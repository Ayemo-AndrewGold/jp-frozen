"use client";

import { useState } from "react";
import { CartDrawer } from "@/components/storefront/CartDrawer";
import { BuyingMode } from "@/components/storefront/BuyingMode";
import type { BuyingModeValue } from "@/components/storefront/BuyingMode";
import { Hero } from "@/components/storefront/Hero";
import { HowItWorks } from "@/components/storefront/HowItWorks";
import { MobileDock } from "@/components/storefront/MobileDock";
import { ProductSection } from "@/components/storefront/ProductSection";
import { ServiceArea } from "@/components/storefront/ServiceArea";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Toast } from "@/components/storefront/Toast";
import { WholesaleCallout } from "@/components/storefront/WholesaleCallout";
import type { CartLine, Product, PurchaseUnit } from "@/components/storefront/types";

export default function Home() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mode, setMode] = useState<BuyingModeValue>("retail");
  const [notice, setNotice] = useState("");
  const unit: PurchaseUnit = mode === "retail" ? "kg" : "carton";
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const cartTotal = cart.reduce((sum, line) => sum + line.quantity * (line.unit === "kg" ? line.product.pricePerKg : line.product.cartonPrice), 0);

  function addToCart(product: Product, itemUnit: PurchaseUnit = unit, quantity = 1) {
    setCart((current) => {
      const existing = current.find((line) => line.product.id === product.id && line.unit === itemUnit);
      if (existing) return current.map((line) => line === existing ? { ...line, quantity: line.quantity + quantity } : line);
      return [...current, { product, unit: itemUnit, quantity }];
    });
    setNotice(`${quantity} × ${product.name} added to basket`);
    window.setTimeout(() => setNotice(""), 2400);
  }

  function changeQuantity(productId: number, itemUnit: PurchaseUnit, delta: number) {
    setCart((current) => current.map((line) => line.product.id === productId && line.unit === itemUnit ? { ...line, quantity: Math.max(0, line.quantity + delta) } : line).filter((line) => line.quantity > 0));
  }

  function openConfirmation() {
    setCartOpen(false);
    window.location.href = "/orders/confirmation";
  }

  return <>
    <SiteHeader cartCount={cartCount} cartTotal={cartTotal} onOpenCart={() => setCartOpen(true)}/>
    <main className="bg-[#f9f9ff] pb-5 text-[#111c2d] md:pb-0">
      <Hero/>
      <BuyingMode value={mode} onChange={setMode}/>
      <ProductSection onAdd={addToCart} unit={unit}/>
      <WholesaleCallout/>
      <HowItWorks/>
      <ServiceArea/>
    </main>
    <SiteFooter/>
    <MobileDock count={cartCount} total={cartTotal} onOpenCart={() => setCartOpen(true)}/>
    <Toast message={notice}/>
    {cartOpen && <CartDrawer cart={cart} onChangeQuantity={changeQuantity} onClose={() => setCartOpen(false)} onCheckout={openConfirmation}/>}
  </>;
}
