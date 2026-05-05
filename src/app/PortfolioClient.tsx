"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "../store/useUIStore";
import { Header } from "../components/Header";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { PublicationsSection } from "../components/sections/PublicationsSection";

interface SectionData {
  data: Record<string, unknown>;
  content: string;
}

interface ContentSet {
  heroData: SectionData;
  leadershipData: SectionData;
  experienceData: SectionData;
  projectsData: SectionData;
  publicationsData: SectionData;
}

interface PortfolioClientProps {
  contentPt: ContentSet;
  contentEn: ContentSet;
}

export function PortfolioClient({ contentPt, contentEn }: PortfolioClientProps) {
  const { lang } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.lang = lang;
  }, [lang]);

  const activeLang = mounted && lang === "en" ? "en" : "pt";
  const activeContent = activeLang === "en" ? contentEn : contentPt;
  const { heroData, experienceData, projectsData, publicationsData } = activeContent;

  return (
    <div className="min-h-screen bg-canvas text-primaryInk selection:bg-accent selection:text-white pb-32">
      <Header lang={activeLang} />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 md:pt-32">
        <section
          id={activeLang === "pt" ? "sobre" : "about"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-hairline"
        >
          <div className="lg:col-span-8 space-y-4">
            {(heroData.data.kicker as string) && (
              <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-primaryInk block mb-6">
                {heroData.data.kicker as string}
              </span>
            )}

            {(heroData.data.title as string) && (
              <h1 className="font-display text-4xl sm:text-[42px] md:text-[64px] leading-[1.08] md:leading-[1.05] tracking-[-0.5px] text-primaryInk max-w-[800px] mb-8">
                {heroData.data.title as string}
              </h1>
            )}

            <div 
              className="font-body text-[16px] leading-[1.5] text-primaryInk max-w-2xl mt-8"
              dangerouslySetInnerHTML={{ __html: heroData.content }}
            />

            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-hairline max-w-2xl">
              <a href="mailto:ecb2@cin.ufpe.br" className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent">
                Email
              </a>
              <a href="https://linkedin.com/in/eliseucbrito" target="_blank" rel="noreferrer" className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent">
                LinkedIn
              </a>
              <a href="https://github.com/eliseucbrito" target="_blank" rel="noreferrer" className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent">
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-start justify-end lg:border-l lg:border-hairline lg:pl-12 pt-8 lg:pt-0">
            <div className="w-full aspect-square bg-hairline/20 border border-hairline flex items-center justify-center p-8 text-center text-metadata text-sm font-mono uppercase tracking-wide">
              <img
                src={"https://github.com/eliseucbrito.png"}
                alt={heroData.data.heroImageAlt as string || "Foto de Eliseu"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <ExperienceSection data={experienceData.data} content={experienceData.content} />

        <ProjectsSection data={projectsData.data} content={projectsData.content} />

        <PublicationsSection
          data={publicationsData.data}
          content={publicationsData.content}
        />
      </main>
    </div>
  );
}