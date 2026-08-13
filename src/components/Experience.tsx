"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Ramaai Labs Pvt Ltd",
    role: "AI/ML Engineer",
    period: "July 2025 – May 2026",
    location: "Hyderabad, Telangana",
    highlights: [
      "Led end-to-end software development across multiple AI projects, designing scalable system architectures and backend workflows.",
      "Authored comprehensive technical documentation, RESTful API specifications, and complex system integration guides.",
      "Engineered machine learning pipelines and optimized server-side inference workflows for production workloads.",
    ],
    tech: ["Python", "System Architecture", "API Design", "Backend Workflows", "Documentation"],
  },
  {
    company: "Shree Samrajyalakshmi Foundation",
    role: "Machine Learning Intern",
    period: "April 2025 – June 2025",
    location: "Hyderabad, Telangana",
    highlights: [
      "Built and optimized deep machine learning models using TensorFlow and NLP frameworks to enhance prediction accuracy and deployment performance.",
      "Streamlined model deployment pipelines, reducing inference latency and improving throughput.",
      "Collaborated in cross-functional agile teams to deliver data-driven intelligence features.",
    ],
    tech: ["TensorFlow", "NLP", "Python", "ML Pipelines", "Agile Workflow"],
  },
  {
    company: "IVIS Labs Pvt Ltd",
    role: "Full Stack Development Intern",
    period: "Feb 2025 – May 2025",
    location: "Mysore, Karnataka",
    highlights: [
      "Developed ReactJS + Firebase web applications, boosting overall app performance by 20%.",
      "Contributed to real-time full-stack features using NodeJS, SQL databases, and Google Cloud Platform (GCP).",
      "Architected clean UI components and optimized client-side state management.",
    ],
    tech: ["ReactJS", "Firebase", "NodeJS", "SQL", "GCP", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
            02 // Work Experience
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
            Professional <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">Track</span> Record
          </h2>
        </div>

        {/* Floating Vertical Timeline */}
        <div className="space-y-16 relative before:absolute before:left-0 sm:before:left-8 before:top-4 before:bottom-4 before:w-px before:bg-[#e5e5e5]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Timeline Indicator Circle */}
              <div className="absolute left-0 sm:left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#222222] ring-4 ring-white" />

              {/* Meta Left Column (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <div className="text-xs font-mono text-[#7B7B7B] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#222222]" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="font-heading text-xl uppercase font-extrabold text-[#222222]">
                  {exp.company}
                </h3>
                <div className="text-xs font-mono text-[#7B7B7B] flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Content Right Column (8 cols) */}
              <div className="md:col-span-8 space-y-4">
                <div className="text-lg font-bold text-[#222222] flex items-center gap-2">
                  <span>{exp.role}</span>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#7B7B7B] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#f8f8f8] text-[#222222] border border-[#e5e5e5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
