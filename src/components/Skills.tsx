"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    number: "01",
    skills: ["Python", "FastAPI", "C", "C++", "Java", "Bash"],
  },
  {
    title: "WEB & BACKEND DEVELOPMENT",
    number: "02",
    skills: ["ReactJS", "Next.JS", "NodeJS", "VueJS", "Vite", "Flask"],
  },
  {
    title: "ML / AI & DATA SCIENCE",
    number: "03",
    skills: ["TensorFlow", "YOLOv8", "NLP", "OCR", "Pattern Recognition", "Streamlit", "GenAI + RAG"],
  },
  {
    title: "CLOUD & DEVELOPER TOOLS",
    number: "04",
    skills: ["Git", "GitHub", "VS Code", "Firebase", "Postman", "Google Cloud (GCP)", "Jupyter Notebook"],
  },
  {
    title: "OPERATING SYSTEMS",
    number: "05",
    skills: ["Linux", "Windows"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
            04 // Skills Matrix
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
            Technical <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">Capabilities</span>
          </h2>
        </div>

        {/* Floating Open Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="space-y-4 border-b border-[#e5e5e5] pb-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-extrabold tracking-wider text-[#222222]">
                  {cat.title}
                </h3>
                <span className="font-mono text-xs text-[#7B7B7B]">{cat.number}</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#f8f8f8] text-[#222222] border border-[#e5e5e5] hover:border-[#222222] hover:bg-[#222222] hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
