"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, FileText, BadgeCheck, Images, ExternalLink, ArrowUpRight } from "lucide-react";
import MediaModal, { MediaModalData } from "@/components/MediaModal";

const achievementsList = [
  {
    id: "research-paper-2025",
    title: "PUBLISHED RESEARCH PAPER",
    subtitle: "International Conference on Data Science, ML & Blockchain (2025)",
    description:
      "Authored and presented novel AI research on deep learning model optimization, latency reduction algorithms, and high-throughput vector processing.",
    heading: "RESEARCH PAPER & PRESENTATION",
    badge: "PUBLICATION",
    icon: FileText,
    paperUrl: "https://ieeexplore.ieee.org/document/11277907",
    images: [
      {
        url: "/images/achievements/research-paper-certificate.jpg",
        caption: "Official Research Paper Publication Certificate & Acceptance Letter",
      },
      {
        url: "/images/achievements/research-presentation-stage.jpg",
        caption: "Conference Keynote Presentation & AI Architecture Slides",
      },
    ],
  },
  {
    id: "ieee-code-battle-2025",
    title: "FINALIST — IEEE CODE BATTLE",
    subtitle: "National Level Hackathon (2025)",
    description:
      "Selected among top nationwide teams competing in rapid algorithm execution, complex data structures, and optimized systems engineering.",
    heading: "HACKATHON HIGHLIGHTS",
    badge: "HACKATHON",
    icon: Trophy,
    images: [
      {
        url: "/images/achievements/ieee-codebattle-1.jpg",
        caption: "IEEE Code Battle Finalist Ceremony & Team Presentation",
      },
      {
        url: "/images/achievements/ieee-codebattle-2.jpg",
        caption: "Live Coding Arena & Real-time Leaderboard Rankings",
      },
    ],
  },
  {
    id: "code-igniter-2023",
    title: "1ST PLACE — CODE-IGNITER",
    subtitle: "7th National Coding Competition (2023)",
    description:
      "Achieved rank 1 out of hundreds of engineering participants in algorithmic problem solving, dynamic programming, and time-complexity optimization.",
    heading: "1ST PLACE WINNER HIGHLIGHTS",
    badge: "1ST PLACE",
    icon: Award,
    images: [
      {
        url: "/images/achievements/code-igniter-1.jpg",
        caption: "1st Place Trophy Award Ceremony & Certificate Presentation",
      },
      {
        url: "/images/achievements/code-igniter-2.jpg",
        caption: "Code-Igniter Final Scoreboard & Algorithmic Benchmarks",
      },
    ],
  },
  {
    id: "ieee-tech-avishkar-2022",
    title: "WINNER — IEEE TECH-AVISHKAR",
    subtitle: "24-Hour National Hackathon (2022)",
    description:
      "Built winning elderly care AI prescription scanning solution in 24 hours, integrating OCR and handwriting recognition pipelines.",
    heading: "HACKATHON WINNER HIGHLIGHTS",
    badge: "WINNER",
    icon: Trophy,
    images: [
      {
        url: "/images/achievements/tech-avishkar-1.jpg",
        caption: "24-Hour Hackathon Winner Trophy & Team Celebration",
      },
      {
        url: "/images/achievements/tech-avishkar-2.jpg",
        caption: "Live Prototype Demo to Jury Panel & AI OCR Benchmark",
      },
    ],
  },
];

const certificationsList = [
  {
    id: "cert-genai",
    name: "Generative AI & Natural Language Processing",
    issuer: "Google & Infosys Springboard",
    year: "2025",
    badgeText: "VERIFIED CERTIFICATE",
    heading: "CERTIFICATE DETAILS",
    description:
      "Verified accreditation covering Large Language Model (LLM) architectures, Transformer self-attention mechanisms, prompt engineering methodologies, and fine-tuning pipelines.",
    images: [
      {
        url: "/images/certificates/google-infosys-genai.jpg",
        caption: "Official Verified Certificate — Generative AI & NLP (Google & Infosys)",
      },
    ],
  },
  {
    id: "cert-isro",
    name: "AI/ML & Geospatial Data Analysis",
    issuer: "Indian Space Research Organisation (ISRO)",
    year: "2024",
    badgeText: "ISRO CERTIFIED",
    heading: "CERTIFICATE DETAILS",
    description:
      "Specialized ISRO accreditation in satellite image processing, computer vision for earth observation data, spatial feature extraction, and machine learning models for remote sensing.",
    images: [
      {
        url: "/images/certificates/isro-geospatial.jpg",
        caption: "Official Verified Certificate — AI/ML & Geospatial Analysis (ISRO)",
      },
    ],
  },
];

export default function Achievements() {
  const [modalData, setModalData] = useState<MediaModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAchievementMedia = (item: (typeof achievementsList)[0]) => {
    setModalData({
      title: item.title,
      badgeText: item.badge,
      subtitle: item.subtitle,
      heading: item.heading,
      description: item.description,
      paperUrl: item.paperUrl,
      images: item.images,
    });
    setIsModalOpen(true);
  };

  const handleOpenCertMedia = (cert: (typeof certificationsList)[0]) => {
    setModalData({
      title: cert.name,
      badgeText: cert.badgeText,
      subtitle: `Issued by: ${cert.issuer} • Year: ${cert.year}`,
      heading: cert.heading,
      description: cert.description,
      images: cert.images,
    });
    setIsModalOpen(true);
  };

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-[#e5e5e5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase tracking-widest bg-[#f8f8f8] px-3 py-1 rounded-full border border-[#e5e5e5]">
            05 // Credentials & Honors
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase font-extrabold tracking-tight text-[#222222]">
            Education & <span className="font-serif-cinematic lowercase italic font-normal text-[#7B7B7B]">Accolades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-12">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4 border-b border-[#e5e5e5] pb-8"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase">
                <GraduationCap className="w-4 h-4 text-[#222222]" />
                <span>Education // Dec 2021 – July 2025</span>
              </div>

              <h3 className="font-heading text-xl uppercase font-black text-[#222222]">
                ATME College of Engineering
              </h3>

              <p className="text-sm font-medium text-[#222222]">
                B.E. in Computer Science & Engineering (AI & ML)
              </p>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <span className="text-[#7B7B7B]">Mysuru, Karnataka, India</span>
                <span className="px-3 py-1 rounded-full bg-[#222222] text-white font-bold">
                  CGPA: 8.04
                </span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#7B7B7B] uppercase">
                <BadgeCheck className="w-4 h-4 text-[#222222]" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-4 pt-2">
                {certificationsList.map((cert) => (
                  <div key={cert.id} className="border-b border-[#e5e5e5] pb-4 space-y-2">
                    <div className="text-sm font-bold text-[#222222] flex items-center justify-between gap-2">
                      <span>{cert.name}</span>
                      <span className="font-mono text-xs text-[#7B7B7B] flex-shrink-0">{cert.year}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#7B7B7B]">
                        Issuer: {cert.issuer}
                      </span>

                      <button
                        onClick={() => handleOpenCertMedia(cert)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#222222] text-white text-[11px] font-mono uppercase hover:bg-[#444444] transition-colors"
                      >
                        <Images className="w-3 h-3 text-white/80" />
                        <span>IMAGES RELATED</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Achievements & Research Paper Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {achievementsList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="border-b border-[#e5e5e5] pb-6 space-y-3 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-[#222222] font-semibold">
                        {item.badge}
                      </span>
                      <Icon className="w-4 h-4 text-[#7B7B7B] group-hover:text-[#222222] transition-colors" />
                    </div>

                    <h4 className="font-heading text-lg uppercase font-black text-[#222222]">
                      {item.title}
                    </h4>

                    <div className="text-xs font-mono text-[#7B7B7B]">
                      {item.subtitle}
                    </div>

                    <p className="text-xs text-[#7B7B7B] font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      {item.paperUrl && (
                        <a
                          href={item.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#222222] underline underline-offset-4 hover:text-[#7B7B7B] transition-colors"
                        >
                          <span>PAPER LINK</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => handleOpenAchievementMedia(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#222222] text-white hover:bg-[#444444] text-xs font-mono uppercase transition-colors"
                      >
                        <Images className="w-3.5 h-3.5 text-white/80" />
                        <span>IMAGES RELATED</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

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
