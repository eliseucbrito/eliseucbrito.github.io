
import Link from "next/link";

interface Project {
  title: string;
  subtitle?: string;
  kicker?: string;
  url?: string;
  period?: string;
  status?: string;
  description?: string;
  role?: string;
  highlights?: string[];
  tags?: string[];
  images?: string[];
}

interface ProjectsSectionProps {
  data: {
    title?: string;
    kicker?: string;
    projects?: Project[];
  };
  content: string;
}

export function ProjectsSection({ data, content }: ProjectsSectionProps) {
  const { kicker, projects } = data;
  const isPt = kicker?.includes("ARQUITETURA") || kicker?.includes("EVENT");
  const items = projects || [];

  return (
    <section id="projetos" className="py-16 border-b border-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        <div className="lg:col-span-4">
          {kicker && (
            <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
              {kicker}
            </span>
          )}
          {data.title && (
            <h2 className="font-display text-3xl sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.5px] text-primaryInk">
              {data.title}
            </h2>
          )}
        </div>
        
        <div className="lg:col-span-8">
          <div 
            className="font-body text-[16px] leading-[1.5] text-primaryInk"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {items.length > 0 && (
        <div className="space-y-0">
          {items.map((project, idx) => (
            <div key={idx} className="py-8 border-t border-hairline first:border-t-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  {project.period && (
                    <p className="font-mono text-xs uppercase tracking-[0.5px] text-metadata mb-2">
                      {project.period}
                    </p>
                  )}
                  <h3 className="font-body text-lg font-medium text-primaryInk mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="font-body text-[15px] text-primaryInk/80 mb-2">
                      {project.subtitle}
                    </p>
                  )}
                  {project.role && (
                    <p className="font-mono text-xs uppercase tracking-[0.5px] text-accent mb-2">
                      {project.role}
                    </p>
                  )}
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block font-mono text-xs uppercase tracking-[1px] text-primaryInk border-b border-accent hover:text-accent transition-colors pb-0.5 mt-2"
                    >
                      {isPt ? "ACESSAR PLATAFORMA" : "VIEW PLATFORM"} →
                    </a>
                  )}
                </div>
                
                <div className="lg:col-span-8">
                  {project.description && (
                    <div 
                      className="font-body text-[15px] leading-[1.5] text-primaryInk mb-4"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  )}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="font-body text-sm text-primaryInk flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-xs uppercase tracking-[0.5px] text-metadata border border-hairline px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {project.images && project.images.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-8">
                    {project.images.map((img, iIdx) => (
                      <div key={iIdx} className="bg-hairline/10 border border-hairline overflow-hidden group rounded">
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${iIdx + 1}`} 
                          className="h-[250px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}