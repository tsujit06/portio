"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon, Sparkles } from "lucide-react";

export interface MediaItem {
  url: string;
  caption: string;
  alt?: string;
}

export interface MediaModalData {
  title: string;
  badgeText?: string;
  subtitle?: string;
  heading?: string; // e.g. "WHAT I BUILT" or "KEY HIGHLIGHTS"
  description: string;
  paperUrl?: string;
  githubUrl?: string;
  images: MediaItem[];
}

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MediaModalData | null;
}

export default function MediaModal({ isOpen, onClose, data }: MediaModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Reset index and error state when modal opens or data changes
  useEffect(() => {
    if (isOpen) {
      setActiveImageIdx(0);
      setImageErrors({});
    }
  }, [isOpen, data]);

  // Handle ESC key listener & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !data) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && data.images.length > 1) {
        setActiveImageIdx((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight" && data.images.length > 1) {
        setActiveImageIdx((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, data, onClose]);

  if (!isOpen || !data) return null;

  const currentImage = data.images[activeImageIdx] || data.images[0];
  const hasMultipleImages = data.images.length > 1;

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#222222]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#fafafa]">
            <div className="flex items-center gap-3 pr-4">
              {data.badgeText && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#222222] text-white font-semibold">
                  {data.badgeText}
                </span>
              )}
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#222222] line-clamp-1">
                {data.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#7B7B7B] hover:text-[#222222] hover:bg-[#eaeaea] transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            
            {/* Image Preview Container */}
            {data.images.length > 0 && (
              <div className="relative group bg-[#f4f4f5] border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="relative aspect-video w-full flex items-center justify-center bg-[#18181b]/5 min-h-[260px] sm:min-h-[380px]">
                  
                  {!imageErrors[activeImageIdx] && currentImage?.url ? (
                    <img
                      src={currentImage.url}
                      alt={currentImage.alt || currentImage.caption || data.title}
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [activeImageIdx]: true }))
                      }
                      className="w-full h-full object-contain select-none"
                    />
                  ) : (
                    /* Stylized Image Slot Fallback Visual when actual file isn't uploaded yet */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#fafafa] to-[#ededed]">
                      <div className="w-16 h-16 rounded-2xl bg-[#222222]/5 border border-[#222222]/10 flex items-center justify-center mb-3">
                        <ImageIcon className="w-8 h-8 text-[#222222]" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#7B7B7B] mb-1">
                        Media View Slot {activeImageIdx + 1} of {data.images.length}
                      </span>
                      <p className="text-sm font-semibold text-[#222222] max-w-md">
                        {currentImage?.caption || `${data.title} - Image Preview`}
                      </p>
                    </div>
                  )}

                  {/* Navigation Arrows for Multiple Images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#222222] shadow-md hover:bg-white transition-all hover:scale-105 border border-[#e5e5e5]"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#222222] shadow-md hover:bg-white transition-all hover:scale-105 border border-[#e5e5e5]"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Navigation Dots / Thumbnails & Caption */}
                <div className="p-4 bg-white border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-[#555555] font-medium text-center sm:text-left flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#222222] flex-shrink-0" />
                    <span>{currentImage?.caption}</span>
                  </p>

                  {hasMultipleImages && (
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {data.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                            activeImageIdx === idx
                              ? "bg-[#222222] text-white font-bold"
                              : "bg-[#f4f4f5] text-[#7B7B7B] border border-[#e5e5e5] hover:text-[#222222]"
                          }`}
                        >
                          IMG {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description & "WHAT I BUILT" Section */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading text-xs font-mono uppercase tracking-widest text-[#7B7B7B]">
                {data.heading || "WHAT I BUILT // OVERVIEW"}
              </h4>
              
              <div className="bg-[#f8f8f8] border border-[#e5e5e5] p-5 rounded-xl space-y-3">
                <p className="text-sm text-[#222222] leading-relaxed font-normal whitespace-pre-line">
                  {data.description}
                </p>

                {data.subtitle && (
                  <p className="text-xs font-mono text-[#7B7B7B] border-t border-[#e5e5e5] pt-3">
                    {data.subtitle}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Modal Action Footer */}
          {(data.paperUrl || data.githubUrl) && (
            <div className="px-6 py-4 border-t border-[#e5e5e5] bg-[#fafafa] flex items-center justify-end gap-3">
              {data.paperUrl && (
                <a
                  href={data.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors"
                >
                  <span>Open Paper Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f8f8] text-[#222222] border border-[#e5e5e5] text-xs font-mono uppercase tracking-wider hover:bg-[#eaeaea] transition-colors"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
