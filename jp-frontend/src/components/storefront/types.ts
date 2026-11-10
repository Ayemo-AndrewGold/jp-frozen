export type Category = "All Items" | "Poultry & Chicken" | "Fish & Seafood" | "Carton Deals";
export type ProductCategory = Exclude<Category, "All Items" | "Carton Deals">;
export type Product = {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  pricePerKg: number;
  cartonPrice: number;
  cartonSize: number;
  image: string;
  imageAlt: string;
  badge: string;
  batchLabel: string;
};
export type PurchaseUnit = "kg" | "carton";
export type CartLine = { product: Product; unit: PurchaseUnit; quantity: number };
export type AddToCart = (product: Product, unit?: PurchaseUnit, quantity?: number) => void;

export const categories: Category[] = ["All Items", "Poultry & Chicken", "Fish & Seafood", "Carton Deals"];
export const money = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

export const products: Product[] = [
  {
    id: 1, name: "Orobo Turkey", description: "Premium hard turkey with rich, dense meat. Perfect for party stews and special occasions.", category: "Poultry & Chicken", pricePerKg: 8_500, cartonPrice: 85_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCQ6y3dlab6GMCOiup62W6DyzXJcdqVDQL1iyDM59K2gWmaRjBt-Pc-8D7jrr6t9Y-IL-Q28TRVlt5dnwevME6bEewW59sCnNneQxRo4mA4oHAH3_KQqjkcTZgW4y3PYJEo2ZHrhl9EL7eIHwVcEjbADJvvj7GePPseZOqtRk6pg81cYAkVorJJOCJV9sj-5vmcyIGe9uPMIPCpuhi4u0PlL0GBAM15iuNRjvXqF3",
    imageAlt: "Premium Orobo turkey cuts, frozen and packed", badge: "Premium Quality", batchLabel: "In Cold Room · Solid Frozen",
  },
  {
    id: 2, name: "Normal Turkey", description: "Quality turkey cuts ideal for everyday cooking and family meals.", category: "Poultry & Chicken", pricePerKg: 8_000, cartonPrice: 80_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCQ6y3dlab6GMCOiup62W6DyzXJcdqVDQL1iyDM59K2gWmaRjBt-Pc-8D7jrr6t9Y-IL-Q28TRVlt5dnwevME6bEewW59sCnNneQxRo4mA4oHAH3_KQqjkcTZgW4y3PYJEo2ZHrhl9EL7eIHwVcEjbADJvvj7GePPseZOqtRk6pg81cYAkVorJJOCJV9sj-5vmcyIGe9uPMIPCpuhi4u0PlL0GBAM15iuNRjvXqF3",
    imageAlt: "Normal turkey cuts, frozen and ready", badge: "Grade A", batchLabel: "In Cold Room · Fresh",
  },
  {
    id: 3, name: "Blanket", description: "Tender blanket cuts perfect for grilling and special dishes.", category: "Poultry & Chicken", pricePerKg: 7_000, cartonPrice: 70_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgPUYYU1dV0w0Fxmr9umoXRaHeXqq5MI0zW-QB0D4UtKy-52Gu0GMSdQ-4eSxbmWaq8PNdgRPFzg1TMBzZ7JlxbndAv38_rSjLHsDdddudG4_oewnrIiwksn009gmH24pdz_axQhxcVq1ALtSTQdi_lhzezeoH9uumIpHnLoxPqNNanxfk1Tq-UqERQ1f5OUaiyIAdFhCXBQ9ZlCp0CslkBCFf5ElICp9WQFx_wVO",
    imageAlt: "Blanket meat cuts arranged frozen", badge: "Tender Cuts", batchLabel: "In Cold Room · Solid Frozen",
  },
  {
    id: 4, name: "Wings Normal", description: "Juicy turkey wings great for frying, grilling or stewing.", category: "Poultry & Chicken", pricePerKg: 6_000, cartonPrice: 60_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCQ6y3dlab6GMCOiup62W6DyzXJcdqVDQL1iyDM59K2gWmaRjBt-Pc-8D7jrr6t9Y-IL-Q28TRVlt5dnwevME6bEewW59sCnNneQxRo4mA4oHAH3_KQqjkcTZgW4y3PYJEo2ZHrhl9EL7eIHwVcEjbADJvvj7GePPseZOqtRk6pg81cYAkVorJJOCJV9sj-5vmcyIGe9uPMIPCpuhi4u0PlL0GBAM15iuNRjvXqF3",
    imageAlt: "Normal turkey wings, frozen solid", badge: "Popular Choice", batchLabel: "In Cold Room · Grade 1",
  },
  {
    id: 5, name: "Wings Orobo", description: "Premium hard wings with extra meat. Perfect for special events.", category: "Poultry & Chicken", pricePerKg: 6_300, cartonPrice: 63_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCQ6y3dlab6GMCOiup62W6DyzXJcdqVDQL1iyDM59K2gWmaRjBt-Pc-8D7jrr6t9Y-IL-Q28TRVlt5dnwevME6bEewW59sCnNneQxRo4mA4oHAH3_KQqjkcTZgW4y3PYJEo2ZHrhl9EL7eIHwVcEjbADJvvj7GePPseZOqtRk6pg81cYAkVorJJOCJV9sj-5vmcyIGe9uPMIPCpuhi4u0PlL0GBAM15iuNRjvXqF3",
    imageAlt: "Orobo turkey wings, premium quality", badge: "Premium Wings", batchLabel: "In Cold Room · Extra Meat",
  },
  {
    id: 6, name: "Drum Stick", description: "Meaty drumsticks perfect for soups and party jollof.", category: "Poultry & Chicken", pricePerKg: 4_400, cartonPrice: 44_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCOGAnlh1sY7Fq02IoiGR9uWI12eHfwHK5emadzufAIqsTRlr6st6zXCmIc9adYhf0l5QORxE7eeGg5En0SoUwdOrOfG_F3RbSxlj0sAZOVNNgXu_c6cm_skPLoGUUOdp88ny4Ql7nhQpCNTwgJSqY8e4oG6CzamRU-GUUlnPiiwtVTHGyz9Ef3VTASyvi5evlIsa2ZX90oQqQx_lR1w7DFSHY5vSJ_q9o0aB7yZu",
    imageAlt: "Frozen drumsticks for cooking", badge: "Family Favorite", batchLabel: "In Cold Room · Meaty",
  },
  {
    id: 7, name: "Chicken Normal", description: "Quality whole chicken cuts for all cooking needs.", category: "Poultry & Chicken", pricePerKg: 5_500, cartonPrice: 55_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgPUYYU1dV0w0Fxmr9umoXRaHeXqq5MI0zW-QB0D4UtKy-52Gu0GMSdQ-4eSxbmWaq8PNdgRPFzg1TMBzZ7JlxbndAv38_rSjLHsDdddudG4_oewnrIiwksn009gmH24pdz_axQhxcVq1ALtSTQdi_lhzezeoH9uumIpHnLoxPqNNanxfk1Tq-UqERQ1f5OUaiyIAdFhCXBQ9ZlCp0CslkBCFf5ElICp9WQFx_wVO",
    imageAlt: "Normal chicken cuts, frozen fresh", badge: "Everyday Value", batchLabel: "In Cold Room · Fresh",
  },
  {
    id: 8, name: "Full Chicken", description: "Complete whole chicken, cleaned and ready for your kitchen.", category: "Poultry & Chicken", pricePerKg: 5_000, cartonPrice: 50_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCOGAnlh1sY7Fq02IoiGR9uWI12eHfwHK5emadzufAIqsTRlr6st6zXCmIc9adYhf0l5QORxE7eeGg5En0SoUwdOrOfG_F3RbSxlj0sAZOVNNgXu_c6cm_skPLoGUUOdp88ny4Ql7nhQpCNTwgJSqY8e4oG6CzamRU-GUUlnPiiwtVTHGyz9Ef3VTASyvi5evlIsa2ZX90oQqQx_lR1w7DFSHY5vSJ_q9o0aB7yZu",
    imageAlt: "Whole chicken, frozen and cleaned", badge: "Whole Bird", batchLabel: "In Cold Room · Complete",
  },
  {
    id: 9, name: "Finger", description: "Tender finger cuts perfect for quick meals and snacks.", category: "Poultry & Chicken", pricePerKg: 6_000, cartonPrice: 60_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgPUYYU1dV0w0Fxmr9umoXRaHeXqq5MI0zW-QB0D4UtKy-52Gu0GMSdQ-4eSxbmWaq8PNdgRPFzg1TMBzZ7JlxbndAv38_rSjLHsDdddudG4_oewnrIiwksn009gmH24pdz_axQhxcVq1ALtSTQdi_lhzezeoH9uumIpHnLoxPqNNanxfk1Tq-UqERQ1f5OUaiyIAdFhCXBQ9ZlCp0CslkBCFf5ElICp9WQFx_wVO",
    imageAlt: "Finger cuts, frozen and ready", badge: "Quick Cook", batchLabel: "In Cold Room · Tender",
  },
  {
    id: 10, name: "Fryer Soft", description: "Soft fryer chicken perfect for deep frying and grilling.", category: "Poultry & Chicken", pricePerKg: 4_000, cartonPrice: 40_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCOGAnlh1sY7Fq02IoiGR9uWI12eHfwHK5emadzufAIqsTRlr6st6zXCmIc9adYhf0l5QORxE7eeGg5En0SoUwdOrOfG_F3RbSxlj0sAZOVNNgXu_c6cm_skPLoGUUOdp88ny4Ql7nhQpCNTwgJSqY8e4oG6CzamRU-GUUlnPiiwtVTHGyz9Ef3VTASyvi5evlIsa2ZX90oQqQx_lR1w7DFSHY5vSJ_q9o0aB7yZu",
    imageAlt: "Soft fryer chicken, frozen", badge: "Budget Friendly", batchLabel: "In Cold Room · Soft & Fresh",
  },
];
