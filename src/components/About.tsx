"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Layers, Rocket, ShieldCheck, Zap } from "lucide-react";

const keyStats = [
  { label: "Major Production Projects", value: "4+", number: "01" },
  { label: "YOLOv8 Detection Accuracy", value: "92%", number: "02" },
  { label: "National Hackathon Champion", value: "1st", number: "03" },
  { label: "B.E. CSE (AI & ML) CGPA", value: "8.04", number: "04" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
            01 // About Me
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
            Architecting <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">intelligent</span> Systems
          </h2>
        </div>

        {/* Floating Open Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#222222] tracking-tight leading-tight">
              Passionate AI/ML Engineer and Full Stack Developer.
            </h3>

            <p className="text-[#7B7B7B] leading-relaxed text-base sm:text-lg font-light">
              Experience across <strong className="text-[#222222] font-semibold font-mono">Python</strong>, <strong className="text-[#222222] font-semibold font-mono">ReactJS</strong>, <strong className="text-[#222222] font-semibold font-mono">TensorFlow</strong>, and <strong className="text-[#222222] font-semibold font-mono">Cloud Platforms</strong>. Specialized in scalable AI system architectures, predictive deep learning, and end-to-end web/mobile solutions.
            </p>

            <p className="text-[#7B7B7B] leading-relaxed text-base font-light">
              Dedicated to designing resilient neural network pipelines, optimizing computer vision performance, and crafting clean, high-performance user interfaces.
            </p>

            {/* Core Pillars floating list */}
            <div className="pt-6 border-t border-[#e5e5e5] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">01 // AI Architecture</div>
                <div className="text-xs text-[#7B7B7B] font-light leading-snug">Scalable neural pipelines & API integrations.</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">02 // Deep Learning</div>
                <div className="text-xs text-[#7B7B7B] font-light leading-snug">YOLOv8 vision, sentiment NLP & RAG models.</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#222222] uppercase tracking-wider">03 // Full Stack</div>
                <div className="text-xs text-[#7B7B7B] font-light leading-snug">Next.js, React, Node & Cloud infrastructure.</div>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Stats (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-8 pt-4 lg:pt-0"
          >
            {keyStats.map((stat, idx) => (
              <div key={idx} className="space-y-2 border-b border-[#e5e5e5] pb-6">
                <div className="text-xs font-mono text-[#7B7B7B]">{stat.number}</div>
                <div className="font-heading text-4xl sm:text-5xl font-black text-[#222222] tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs text-[#7B7B7B] font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
