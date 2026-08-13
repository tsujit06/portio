"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden min-h-[95vh] flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-mono text-[#7B7B7B] mb-6 shadow-sm mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#222222] animate-pulse" />
          <span>Available for AI/ML & Full-Stack Engineering Roles</span>
          <span className="text-[#e5e5e5]">|</span>
          <span className="flex items-center gap-1 text-[#222222]">
            <MapPin className="w-3 h-3 text-[#222222]" /> Mysuru, KA, India
          </span>
        </motion.div>

        {/* Main Name Header - Centered & Contained Within Margins */}
        <div className="relative z-20 w-full text-center -mb-6 sm:-mb-14 md:-mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinematic-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#222222] leading-none uppercase select-none text-center max-w-full drop-shadow-sm"
          >
            SUJITH L B
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif-cinematic text-xl sm:text-2xl md:text-3xl italic text-[#7B7B7B] font-light pt-2 sm:pt-4 text-center"
          >
            AI & ML Engineer <span className="font-sans font-normal text-[#222222] not-italic">/</span> Full Stack Developer
          </motion.div>
        </div>

        {/* Borderless Monochrome Portrait Asset - Dead Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-md mx-auto h-[340px] sm:h-[420px] md:h-[460px] z-10 my-4 flex items-center justify-center pointer-events-none"
        >
          <Image
            src="/sujith-monochrome.png"
            alt="Sujith L B - Monochrome Portrait"
            fill
            className="object-cover object-center grayscale contrast-125 transition-transform duration-700"
            priority
          />

          {/* Soft White Bottom Gradient Fade to canvas edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#7B7B7B] max-w-2xl font-light leading-relaxed pt-2 text-center mx-auto"
        >
          Building <span className="text-[#222222] font-semibold">scalable, AI-driven applications</span> and <span className="font-serif-cinematic italic text-[#222222] text-xl">high-performance full-stack architectures</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 mx-auto"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#222222] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#f8f8f8] text-[#222222] border border-[#e5e5e5] font-mono text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1Z_3-Xkgq5qMGgPocsRUsbkKXRX1EpO7P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#f8f8f8] hover:bg-[#eaeaea] text-[#7B7B7B] hover:text-[#222222] border border-[#e5e5e5] font-mono text-xs transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-[#222222]" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Social & Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-[#e5e5e5] flex flex-wrap items-center justify-between gap-6 w-full"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap w-full sm:w-auto mx-auto sm:mx-0">
            <a
              href="mailto:lbsujith45@gmail.com"
              className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#222222]" />
              <span>lbsujith45@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/sujithlb06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#222222]" />
              <span>linkedin.com/in/sujithlb06</span>
            </a>

            <a
              href="https://github.com/sujithlb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#222222]" />
              <span>github.com/sujithlb</span>
            </a>

            <a
              href="tel:+918970534381"
              className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] hover:text-[#222222] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#222222]" />
              <span>+91-8970534381</span>
            </a>
          </div>

          <div className="text-xs font-mono text-[#7B7B7B] flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-[#222222]" />
            <span>Python • React • TensorFlow • Next.js</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
