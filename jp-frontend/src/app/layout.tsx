import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jp-froze Foods | Frozen Food Cold Store in Sango Ota",
  description:
    "Shop quality frozen chicken, seafood and more, delivered cold across Sango Ota and Ogun State, Nigeria.",
  applicationName: "JP-Froze Foods",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JP-Froze",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9f9ff] font-sans text-[#111c2d]">{children}</body>
    </html>
  );
}
