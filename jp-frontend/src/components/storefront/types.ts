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
    id: 1, name: "Hard Chicken (Orobu Cuts)", description: "Rich, dense, flavorful meat that holds firmly in party stews.", category: "Poultry & Chicken", pricePerKg: 4_850, cartonPrice: 45_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgPUYYU1dV0w0Fxmr9umoXRaHeXqq5MI0zW-QB0D4UtKy-52Gu0GMSdQ-4eSxbmWaq8PNdgRPFzg1TMBzZ7JlxbndAv38_rSjLHsDdddudG4_oewnrIiwksn009gmH24pdz_axQhxcVq1ALtSTQdi_lhzezeoH9uumIpHnLoxPqNNanxfk1Tq-UqERQ1f5OUaiyIAdFhCXBQ9ZlCp0CslkBCFf5ElICp9WQFx_wVO",
    imageAlt: "Hard chicken cuts arranged in a clean frozen food cold room", badge: "Popular favourites", batchLabel: "In Cold Room · Solid Frozen",
  },
  {
    id: 2, name: "Original Foreign Turkey Wings", description: "Imported, jumbo thick cuts. No excess fat, blast frozen clean.", category: "Poultry & Chicken", pricePerKg: 6_200, cartonPrice: 60_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCQ6y3dlab6GMCOiup62W6DyzXJcdqVDQL1iyDM59K2gWmaRjBt-Pc-8D7jrr6t9Y-IL-Q28TRVlt5dnwevME6bEewW59sCnNneQxRo4mA4oHAH3_KQqjkcTZgW4y3PYJEo2ZHrhl9EL7eIHwVcEjbADJvvj7GePPseZOqtRk6pg81cYAkVorJJOCJV9sj-5vmcyIGe9uPMIPCpuhi4u0PlL0GBAM15iuNRjvXqF3",
    imageAlt: "Imported turkey wings, frozen and packed in a commercial cold room", badge: "Grade 1 quality", batchLabel: "In Cold Room · Grade 1",
  },
  {
    id: 3, name: "Atlantic Titus Fish (Mackerel)", description: "Original imported mackerel, rich in omega oils and flavour.", category: "Fish & Seafood", pricePerKg: 5_100, cartonPrice: 98_000, cartonSize: 20,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmx4dl_39Vw1M8_-VAwPaF-3YIxHNLCynkGiQg5iBmj0wRtpFgoQ_DYnf8hhfoM1QXduVh58qY8aBIt4Tl9T7Vw6ZAuddkDPNX0DkhZAXekbH2-4QcMfkLOn8Wfs99FrqWzkd8kLb-sfaTnYik1uZlvJ_rFhvSqyyKsKZu6MIyZpD5MFXkrHjCsp-aigzLLXNauQ4AT-hMvk3Qs8CowGhFZooHzMlbgG3BpFkxicC",
    imageAlt: "Atlantic Titus mackerel fish with silver and blue scales on ice", badge: "Solid blast frozen", batchLabel: "In Cold Room · Imported",
  },
  {
    id: 4, name: "Jumbo Croaker Fish (Clean Gills)", description: "Sweet white flesh, perfect for grilling, frying and Sunday jollof fish.", category: "Fish & Seafood", pricePerKg: 5_600, cartonPrice: 92_000, cartonSize: 20,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_j3YOPwuHseuf40X2aWyT585z7V8quaRDLmxAMhZElu8gnsbiFz7nlwS-_oLie5-YE7zEgYpD56RfIuSjI4HAkd0H3PFsmj3QQwBusBJivPfRwJh_g4JVGNqF62Hce9P1P56iu9vDCqL-kwkc5uVo7wgJGbmwR894X93IHmhiQ90kIIGj3iZsg3nOLO1NyR6UzRsFwPu-AhR1xFX79mStI3n8rGQ8VBY5avAqQyGk",
    imageAlt: "Freshly cleaned jumbo croaker fish on a cold display tray", badge: "Fresh sea catch", batchLabel: "In Cold Room · Clean Gills",
  },
  {
    id: 5, name: "Chicken Gizzard (Cleaned)", description: "Thoroughly peeled, zero yellow skin. Ready for your favourite pepper soup.", category: "Poultry & Chicken", pricePerKg: 4_400, cartonPrice: 41_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIf9zbaRr6lnpikWawa6QUCUc07w9nIMzIqHk3fgDKbepnOmo-Kv2M9J-mS4VnwGundA3gLFxBepnpQP5WO-aoT_CfBc8GPCTYNlF-aXlVbUddhHgxOuTFQ1AGbR0csSGwDkP1tHI6C_5OVxNEzz6AKvp_Q0Nt3YWb1mdJaJmNfljhFo0oS1eEKGOlGdgY-ouHix821iNjAbd3WPj3pM9pNOLS0PpbjhnANparkC2V",
    imageAlt: "Cleaned chicken gizzards kept frozen in hygienic packaging", badge: "Cleaned & ready", batchLabel: "In Cold Room · Washed",
  },
  {
    id: 6, name: "Chicken Laps (Quarter Legs)", description: "Soft, meaty quarters for quick family meals and party cooking.", category: "Poultry & Chicken", pricePerKg: 4_200, cartonPrice: 40_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCOGAnlh1sY7Fq02IoiGR9uWI12eHfwHK5emadzufAIqsTRlr6st6zXCmIc9adYhf0l5QORxE7eeGg5En0SoUwdOrOfG_F3RbSxlj0sAZOVNNgXu_c6cm_skPLoGUUOdp88ny4Ql7nhQpCNTwgJSqY8e4oG6CzamRU-GUUlnPiiwtVTHGyz9Ef3VTASyvi5evlIsa2ZX90oQqQx_lR1w7DFSHY5vSJ_q9o0aB7yZu",
    imageAlt: "Frozen chicken quarter legs stacked for cold room delivery", badge: "Tender & fresh", batchLabel: "In Cold Room · Quarter Legs",
  },
  {
    id: 7, name: "Fresh Kote Fish", description: "Dense, firm-textured sea catch. A favourite for soups and stews.", category: "Fish & Seafood", pricePerKg: 3_800, cartonPrice: 72_000, cartonSize: 20,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxTZWiTf-t_8cm4ldbNzoI8yUqFtPtEETfU2QMeceuhgTncxkJBH8IkgXqelQz-Fmlf_QR5wwk3hLvxbNsGynpAuiwwxQFzJB-mRflg0kIkPm70feLirFOS4BuREMRf2yy5OBJfK4qJEMT05MeTjf5zxR850u7CCfDThnAsdpqxyI1NXOUZon6TdNvFInC5YP28Dp72X8knNQddZVe6cHHQz8II62pU7cqcXkh-pei",
    imageAlt: "Frozen Kote fish packed in an industrial cold room", badge: "Ocean direct catch", batchLabel: "In Cold Room · Frozen Solid",
  },
  {
    id: 8, name: "Foreign Turkey Gizzard", description: "Extra-large, meaty cuts. Holds its shape beautifully in soups.", category: "Poultry & Chicken", pricePerKg: 5_800, cartonPrice: 55_000, cartonSize: 10,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfiNjgIm9YPVPzm0v0SC_iQfYYN6fKb_hxBJOk5W1oqaf0hSKk6liKCvueMnP9FtRJlbYTm5WOaa6vGQUSo-Z_Zvs9t-17y0vEUJbiPqwkWudBslYi1Q6sd3LMaXeu1tOuAqamNKMDLe9NFZu5bxK0j84bm0y7FP2_8DyLeIIw17aPCkq70gTBjnKFOQHGm46eQhPSFFw8iIjI5NPcDz-x71gdglVZeKPpaaaVVtPo",
    imageAlt: "Foreign turkey gizzard pieces frozen for wholesale", badge: "Ready to cook", batchLabel: "In Cold Room · Sealed",
  },
  {
    id: 9, name: "Blast-Frozen Catfish", description: "Fresh farm-raised catfish locked in a solid freeze for freshness.", category: "Fish & Seafood", pricePerKg: 4_900, cartonPrice: 23_500, cartonSize: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1cApxt790CdPgQnVs63cyxv30ZLIZGpw4vCcMQFxmgzYMlcxhTnDA4SXtb650p2bIaZA6Ri_3WNapTqKTweAXqfXld27B7xa4oLzqKl3nYo0GLAd7ZzL68-1jM1w_v7hIf8EXol2NTcZZoyRCjWdkZfUsERHjgvVOidTvxbcq-wG2KvIpWJLlcwrLd1qP5j4ThgpDZILUSfyzxsZqvj03gHtgNhnbeMx16KfqgsK4",
    imageAlt: "Fresh Nigerian farm-raised catfish blast frozen", badge: "5kg carton pack", batchLabel: "In Cold Room · 100% Frozen",
  },
];
