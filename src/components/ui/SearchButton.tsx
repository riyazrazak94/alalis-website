"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    
    // Simulate a brief "searching" state for UX
    setTimeout(() => {
      const message = `Hello! I'm looking for: ${query}`;
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      setIsSearching(false);
      setIsOpen(false);
      setQuery("");
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-slate-600 hover:text-[#1e40af] hover:bg-slate-50 rounded-lg transition-all group"
        aria-label="Search products"
      >
        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-20 px-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl shadow-slate-900/20 overflow-hidden animate-in zoom-in-95 slide-in-from-top-10 duration-200">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center px-6 py-4 border-b border-slate-100">
                <Search className="w-6 h-6 text-slate-400 mr-4" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you looking for? (e.g. Makita Drill, LED Lights)"
                  className="flex-1 text-lg text-slate-900 placeholder:text-slate-400 outline-none bg-transparent h-12"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="p-1 text-slate-400 hover:text-slate-600 mr-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">Esc</span>
                </button>
              </div>

              {/* Quick Suggestions or Results */}
              <div className="bg-slate-50 px-6 py-4">
                {isSearching ? (
                  <div className="flex items-center justify-center py-8 text-slate-500">
                    <Loader2 className="w-6 h-6 animate-spin mr-3 text-[#1e40af]" />
                    <span>Connecting to WhatsApp...</span>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Electrical Cables", "Water Pumps", "Safety Shoes", "Power Tools", "LED Panels", "PPR Pipes"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setQuery(item);
                            // Optional: auto-submit
                          }}
                          className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
                      <p>
                        Can&apos;t find it? Type your query and press Enter to ask us directly.
                      </p>
                      <button
                        type="submit"
                        disabled={!query.trim()}
                        className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-white rounded-lg font-medium hover:bg-[#16a34a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Ask on WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
