"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#222222", "#7B7B7B", "#3b82f6", "#6366f1"],
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 6000);
    }, 800);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
            06 // Get in Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
            Let&apos;s Build <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="font-heading text-xl uppercase font-bold text-[#222222]">
                Direct Contacts
              </h3>
              <p className="text-xs text-[#7B7B7B] font-light leading-relaxed">
                Open for full-time AI/ML Engineering roles, full-stack architecture consulting, and high-impact technical collaborations.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Email */}
              <div className="py-3 border-b border-[#e5e5e5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#222222]" />
                  <div>
                    <div className="text-[10px] font-mono text-[#7B7B7B] uppercase">Email</div>
                    <div className="text-xs font-mono text-[#222222]">lbsujith45@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("lbsujith45@gmail.com", "email")}
                  className="p-1.5 rounded-lg hover:bg-[#f8f8f8] text-[#7B7B7B] hover:text-[#222222] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="py-3 border-b border-[#e5e5e5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#222222]" />
                  <div>
                    <div className="text-[10px] font-mono text-[#7B7B7B] uppercase">Phone</div>
                    <div className="text-xs font-mono text-[#222222]">+91-8970534381</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("+91-8970534381", "phone")}
                  className="p-1.5 rounded-lg hover:bg-[#f8f8f8] text-[#7B7B7B] hover:text-[#222222] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="py-3 border-b border-[#e5e5e5] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#222222]" />
                <div>
                  <div className="text-[10px] font-mono text-[#7B7B7B] uppercase">Location</div>
                  <div className="text-xs font-medium text-[#222222]">Mysuru, Karnataka, India</div>
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/sujithlb06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] hover:border-[#222222] text-xs font-mono text-[#222222] flex items-center justify-center gap-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#222222]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/sujithlb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] hover:border-[#222222] text-xs font-mono text-[#222222] flex items-center justify-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#222222]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Underlined Floating Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4 border border-[#e5e5e5] rounded-3xl p-8 bg-[#f8f8f8]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#222222] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl uppercase font-bold text-[#222222]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#7B7B7B] max-w-md mx-auto font-light">
                    Thank you for reaching out. Sujith will review your message and reply back shortly.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#222222] bg-white px-4 py-1.5 rounded-full border border-[#e5e5e5]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Confetti Triggered</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading text-xl uppercase font-bold text-[#222222]">
                    Send a Direct Inquiry
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#7B7B7B] uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full py-3 bg-transparent border-b border-[#e5e5e5] text-sm text-[#222222] focus:outline-none focus:border-[#222222] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#7B7B7B] uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full py-3 bg-transparent border-b border-[#e5e5e5] text-sm text-[#222222] focus:outline-none focus:border-[#222222] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#7B7B7B] uppercase">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your project or inquiry..."
                        className="w-full py-3 bg-transparent border-b border-[#e5e5e5] text-sm text-[#222222] focus:outline-none focus:border-[#222222] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 px-6 rounded-full bg-[#222222] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-md"
                  >
                    {status === "submitting" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
