"use client";

import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-[#e5e5e5] bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2 font-mono text-xs text-[#7B7B7B]">
          <Code2 className="w-4 h-4 text-[#222222]" />
          <span>Designed & Built by <strong className="text-[#222222]">SUJITH L B</strong> © 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-[#7B7B7B]">
            Mysuru, KA, India
          </span>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] hover:border-[#222222] text-[#222222] flex items-center justify-center transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
