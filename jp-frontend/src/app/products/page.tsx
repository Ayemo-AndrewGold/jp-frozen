import { Suspense } from "react";
import { ProductsClient } from "@/components/storefront/ProductsClient";
import type { Metadata } from "next";
import type { Category } from "@/components/storefront/types";
import { categories } from "@/components/storefront/types";

export const metadata: Metadata = {
  title: "All Frozen Foods | jp-froze Foods Sango Ota",
  description: "Browse current frozen food stock by kilogram or carton from the jp-froze Sango Ota cold room.",
};

type ProductsSearchParams = Promise<{
  query?: string | string[];
  category?: string | string[];
}>;

export default function ProductsPage({ searchParams }: { searchParams: ProductsSearchParams }) {
  return (
    <Suspense fallback={<ProductsPageFallback />}>
      <ProductsPageContent searchParams={searchParams} />
    </Suspense>
  );
}

async function ProductsPageContent({ searchParams }: { searchParams: ProductsSearchParams }) {
  const params = await searchParams;
  const query = Array.isArray(params.query) ? params.query[0] ?? "" : params.query ?? "";
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const initialCategory = categories.includes(category as Category) ? category as Category : "All Items";

  return <ProductsClient initialQuery={query} initialCategory={initialCategory} />;
}

function ProductsPageFallback() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] px-4 py-10 text-[#111c2d] sm:px-8">
      <div className="mx-auto max-w-[1280px] animate-pulse">
        <div className="h-8 w-56 rounded-lg bg-[#dbe3ef]" />
        <div className="mt-5 h-24 rounded-xl bg-white shadow-sm" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="h-72 rounded-xl bg-white shadow-sm" />
          ))}
        </div>
      </div>
    </main>
  );
}
