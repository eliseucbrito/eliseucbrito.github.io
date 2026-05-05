"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "@/store/useUIStore";

interface CVClientProps {
  contentPt: any;
  contentEn: any;
}

export function CVClient({ contentPt, contentEn }: CVClientProps) {
  const { lang } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const activeLang = mounted && lang === "en" ? "en" : "pt";
  const activeContent = activeLang === "en" ? contentEn : contentPt;
  const { heroData, experienceData, projectsData, publicationsData } = activeContent;

  if (!mounted) return null;

  return (
    <div className="bg-white min-h-screen text-black font-body p-4 md:p-8 print:py-[10mm] print:px-[15mm] cv-container print:bg-white print:text-black">
      <div className="max-w-[210mm] mx-auto bg-white print:shadow-none print:w-full print:max-w-full">
        <header className="mb-4 border-b-2 border-black pb-2 flex justify-between items-end">
          <div>
            <h1 className="text-2xl print:text-3xl font-display font-bold uppercase tracking-tight">{heroData.data.title}</h1>
            <p className="text-xs print:text-[11px] font-mono mt-1 text-gray-600">
              {activeLang === "pt" ? "Engenheiro de Software" : "Software Engineer"} • ecb2@cin.ufpe.br • linkedin.com/in/eliseucbrito • eliseucbrito.github.io
            </p>
          </div>
          <button 
            onClick={() => window.print()}
            className="print:hidden border border-black px-4 py-1 text-xs font-mono uppercase hover:bg-black hover:text-white transition-colors"
          >
            {activeLang === "pt" ? "Imprimir PDF" : "Print PDF"}
          </button>
        </header>

        <section className="mb-4">
          <div 
            className="text-xs print:text-[10.5px] leading-snug"
            dangerouslySetInnerHTML={{ __html: heroData.content }}
          />
        </section>

        <section className="mb-4">
          <h2 className="text-base print:text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">{experienceData.data.title}</h2>
          <div className="space-y-3">
            {experienceData.data.experiences?.map((exp: any, idx: number) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-sm print:text-[11px]">{exp.title}</h3>
                  <span className="text-[10px] print:text-[9px] font-mono text-gray-600 shrink-0">{exp.period}</span>
                </div>
                <div className="text-[11px] print:text-[10px] font-medium text-gray-800 mb-1">
                  {exp.company}
                </div>
                {exp.description && (
                  <div 
                    className="text-xs print:text-[10px] leading-snug text-gray-700 mb-1"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
                )}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-outside text-[11px] print:text-[9.5px] text-gray-700 space-y-0.5 ml-3">
                    {exp.highlights.map((h: string, i: number) => (
                      <li key={i} className="pl-1 leading-snug">{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4 break-inside-avoid">
          <h2 className="text-base print:text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">{projectsData.data.title}</h2>
          <div className="space-y-3">
            {projectsData.data.projects?.map((proj: any, idx: number) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-bold text-sm print:text-[11px]">{proj.title} <span className="text-gray-500 font-normal">| {proj.subtitle}</span></h3>
                  <span className="text-[10px] print:text-[9px] font-mono text-gray-600 shrink-0">{proj.period}</span>
                </div>
                <div 
                  className="text-xs print:text-[10px] leading-snug text-gray-700 mb-1"
                  dangerouslySetInnerHTML={{ __html: proj.description }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid pb-4">
          <h2 className="text-base print:text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">{publicationsData.data.title}</h2>
          <div className="space-y-2">
            {publicationsData.data.publications?.map((pub: any, idx: number) => (
              <div key={idx} className="break-inside-avoid leading-snug">
                <h3 className="font-bold text-xs print:text-[10.5px] inline">{pub.title}</h3>
                <span className="text-xs print:text-[10px] text-gray-700 italic ml-1">({pub.event}, {pub.year})</span>
                <p className="text-[10px] print:text-[9px] text-gray-600 mt-0.5">{pub.authors}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
