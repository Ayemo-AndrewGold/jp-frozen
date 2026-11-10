export type BuyingModeValue = "retail" | "wholesale";

export function BuyingMode({ value, onChange }: { value: BuyingModeValue; onChange: (mode: BuyingModeValue) => void }) {
  return <section className="mx-auto max-w-[1170px] px-3 pb-5 sm:px-5 lg:px-8" aria-label="Choose how you want to buy">
    <h2 className="sr-only">Choose how you want to buy</h2>
    
    <div className="flex gap-2 sm:gap-3">
      {/* Retail Button */}
      <button 
        onClick={() => onChange("retail")} 
        className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 transition-all duration-200 sm:gap-3 sm:px-6 ${
          value === "retail" 
            ? "border-[#003673] bg-[#003673] shadow-lg shadow-[#003673]/20" 
            : "border-[#e2e8f0] bg-white hover:border-[#003673] hover:shadow-md"
        }`}
      >
        <svg className={`h-6 w-6 ${value === "retail" ? "text-white" : "text-[#003673]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <div className="text-left">
          <h3 className={`text-sm font-bold sm:text-base ${value === "retail" ? "text-white" : "text-[#111c2d]"}`}>
            Retail (KG)
          </h3>
          <p className={`mt-0.5 text-[10px] sm:text-xs ${value === "retail" ? "text-white/80" : "text-[#64748b]"}`}>
            For homes
          </p>
        </div>
        {value === "retail" && (
          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </button>

      {/* Wholesale Button */}
      <button 
        onClick={() => onChange("wholesale")} 
        className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 transition-all duration-200 sm:gap-3 sm:px-6 ${
          value === "wholesale" 
            ? "border-[#003673] bg-[#003673] shadow-lg shadow-[#003673]/20" 
            : "border-[#e2e8f0] bg-white hover:border-[#003673] hover:shadow-md"
        }`}
      >
        <svg className={`h-6 w-6 ${value === "wholesale" ? "text-white" : "text-[#003673]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <div className="text-left">
          <h3 className={`text-sm font-bold sm:text-base ${value === "wholesale" ? "text-white" : "text-[#111c2d]"}`}>
            Wholesale
          </h3>
          <p className={`mt-0.5 text-[10px] sm:text-xs ${value === "wholesale" ? "text-white/80" : "text-[#64748b]"}`}>
            Bulk cartons
          </p>
        </div>
        {value === "wholesale" && (
          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </button>
    </div>

    {/* Savings Info */}
    <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5] px-4 py-2.5 text-center">
      <svg className="h-5 w-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-xs font-semibold text-[#059669]">
        Save more with carton deals
      </p>
    </div>
  </section>;
}
