import { OrderConfirmation } from "@/components/storefront/OrderConfirmation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Receipt | jp-froze Foods",
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  return <OrderConfirmation/>;
}
