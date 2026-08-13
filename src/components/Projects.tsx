"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";
import MediaModal, { MediaModalData } from "@/components/MediaModal";

const projectCategories = ["ALL", "AI / ML", "FULL STACK", "MOBILE & HACKATHONS"];

const projects = [
  {
    id: "01",
    title: "Emotional Support Companion (AI Chatbot)",
    year: "2025",
    category: ["AI / ML", "FULL STACK"],
    badgeText: "85% User Satisfaction",
    summary:
      "Personalized emotional support chatbot engineered with NLP pipelines and OpenAI API, delivering 30% faster response times and context-aware empathetic conversations.",
    heading: "WHAT I BUILT",
    description:
      "Engineered an empathetic AI conversational companion built with React, TypeScript, and OpenAI GPT APIs. Designed robust prompt guardrails, live sentiment analysis pipelines, and lightweight state management that achieved a 30% reduction in response latency and an 85% positive user feedback score.",
    stack: ["ReactJS", "TypeScript", "OpenAI API", "NLP", "Vite"],
    metrics: "85% Satisfaction • +30% Speed",
    images: [
      {
        url: "/images/projects/emotional-companion-1.jpg",
        caption: "Primary Conversational Interface & Dynamic Sentiment Tracker",
      },
      {
        url: "/images/projects/emotional-companion-2.jpg",
        caption: "AI Prompt Pipeline & Real-Time Contextual Response Monitor",
      },
      {
        url: "/images/projects/emotional-companion-3.jpg",
        caption: "Responsive Mobile UI & Dark Theme Adaptability",
      },
    ],
  },
  {
    id: "02",
    title: "Stock Price Prediction Using News Sentiment",
    year: "2025",
    category: ["AI / ML"],
    badgeText: "78% Prediction Accuracy",
    summary:
      "Scraped 10,000+ financial news articles for sentiment analysis. Built deep learning predictive models connected to interactive Streamlit visualization dashboards.",
    heading: "WHAT I BUILT",
    description:
      "Constructed an end-to-end financial forecasting system combining NLP news sentiment scoring with LSTM/GRU deep learning models. Scraped over 10,000 articles, processed text embeddings using Transformer models, and visualized predictive trends on an interactive Streamlit dashboard.",
    stack: ["Python", "NLP", "Deep Learning", "Streamlit", "Transformers"],
    metrics: "78% Accuracy • 10,000+ Articles",
    images: [
      {
        url: "/images/projects/stock-prediction-1.jpg",
        caption: "Market Trend Forecast & NLP Sentiment Score Heatmap",
      },
      {
        url: "/images/projects/stock-prediction-2.jpg",
        caption: "LSTM Deep Learning Model Architecture & Loss Metrics",
      },
      {
        url: "/images/projects/stock-prediction-3.jpg",
        caption: "Interactive Streamlit Web Dashboard & Live News Feed Analysis",
      },
    ],
  },
  {
    id: "03",
    title: "AI-Powered Pothole Detection & Reporting",
    year: "2024",
    category: ["AI / ML", "MOBILE & HACKATHONS"],
    badgeText: "92% YOLOv8 Accuracy",
    summary:
      "Real-time road hazard detection system using YOLOv8 computer vision model. Integrated with Flutter mobile app and Maps API, reducing accident risks by 30%.",
    heading: "WHAT I BUILT",
    description:
      "Developed a computer vision infrastructure trained on annotated road dataset using YOLOv8 for automated hazard detection. Connected real-time camera inference feeds with a Flutter mobile frontend and Google Maps API for automated geotagging and municipal hazard reporting.",
    stack: ["Python", "TensorFlow", "YOLOv8", "Flutter", "Firebase"],
    metrics: "92% Accuracy • 30% Risk Reduction",
    images: [
      {
        url: "/images/projects/pothole-detection-1.jpg",
        caption: "YOLOv8 Real-Time Video Object Detection & Bounding Box Confidence",
      },
      {
        url: "/images/projects/pothole-detection-2.jpg",
        caption: "Flutter Mobile App Live Hazard Mapping & GPS Pin Location",
      },
      {
        url: "/images/projects/pothole-detection-3.jpg",
        caption: "Automated Municipal Portal & Risk Alert Notification System",
      },
    ],
  },
  {
    id: "04",
    title: "Elderly Care & Prescription Management System",
    year: "2022",
    category: ["FULL STACK", "MOBILE & HACKATHONS"],
    badgeText: "🏆 1st Place National Winner",
    summary:
      "1st Place National Hackathon Winner built in 24 hours. Automated prescription scanning using OCR, handwriting pattern recognition, and medicine scheduling.",
    heading: "WHAT I BUILT",
    description:
      "Built a 1st Place National Hackathon winning solution in 24 hours designed to assist elderly patients. Created an optical character recognition (OCR) and handwriting pattern recognition pipeline to instantly convert doctor prescriptions into automated medication schedule reminders.",
    stack: ["Python", "OCR", "Pattern Recognition", "Flutter", "Firebase"],
    metrics: "1st Place Winner • 24hr Build",
    images: [
      {
        url: "/images/projects/elderly-care-1.jpg",
        caption: "Prescription OCR Handwriting Scanner & Extraction Result",
      },
      {
        url: "/images/projects/elderly-care-2.jpg",
        caption: "Medication Dose Scheduler & Automated Push Notification Flow",
      },
      {
        url: "/images/projects/elderly-care-3.jpg",
        caption: "Caretaker Emergency SOS Dashboard & Patient Vitals Overview",
      },
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [modalData, setModalData] = useState<MediaModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  const handleOpenMedia = (project: (typeof projects)[0]) => {
    setModalData({
      title: project.title,
      badgeText: project.badgeText,
      heading: project.heading,
      description: project.description,
      subtitle: `Technologies: ${project.stack.join(" • ")} | Year: ${project.year}`,
      images: project.images,
    });
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
              03 // Featured Projects
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
              Selected <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">Works</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#222222] text-white shadow-sm"
                    : "bg-[#f8f8f8] text-[#7B7B7B] border border-[#e5e5e5] hover:text-[#222222]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Open Projects List */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group py-8 border-b border-[#e5e5e5] grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:border-[#222222] transition-colors"
              >
                {/* Index Number (2 cols) */}
                <div className="md:col-span-2">
                  <span className="font-heading text-4xl font-black text-[#e5e5e5] group-hover:text-[#222222] transition-colors">
                    {project.id}
                  </span>
                </div>

                {/* Details (7 cols) */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-[#222222] font-semibold">
                      {project.badgeText}
                    </span>
                    <span className="text-xs font-mono text-[#7B7B7B]">{project.year}</span>
                  </div>

                  <h3 className="font-heading text-2xl uppercase font-bold text-[#222222]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#7B7B7B] leading-relaxed font-light">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#f8f8f8] text-[#7B7B7B] border border-[#e5e5e5]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Button (3 cols) */}
                <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-between h-full space-y-4">
                  <span className="text-xs font-mono text-[#7B7B7B]">{project.metrics}</span>

                  <button
                    onClick={() => handleOpenMedia(project)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#222222] text-white hover:bg-[#444444] text-xs font-mono uppercase tracking-wider transition-all shadow-sm group/btn"
                  >
                    <Images className="w-3.5 h-3.5 text-white/80 group-hover/btn:scale-110 transition-transform" />
                    <span>IMAGES RELATED</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Media Modal Lightbox */}
      <MediaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />
    </section>
  );
}
