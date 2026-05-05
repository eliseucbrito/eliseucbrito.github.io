

interface Experience {
  title: string;
  company: string;
  type?: string;
  period: string;
  url?: string;
  description?: string;
  highlights?: string[];
}

interface ExperienceSectionProps {
  data: {
    title?: string;
    kicker?: string;
    experiences?: Experience[];
  };
  content: string;
}

export function ExperienceSection({ data, content }: ExperienceSectionProps) {
  const experiences = data.experiences || [];
  
  return (
    <section id="experiencia" className="py-16 border-b border-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        <div className="lg:col-span-4">
          {data.kicker && (
            <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
              {data.kicker}
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

      {experiences.length > 0 && (
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div key={idx} className="py-8 border-t border-hairline first:border-t-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.5px] text-metadata mb-2">
                    {exp.period}
                  </p>
                  <h3 className="font-body text-lg font-medium text-primaryInk mb-1">
                    {exp.title}
                  </h3>
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-primaryInk/80 mb-2 hover:text-accent transition-colors block underline underline-offset-4 decoration-hairline hover:decoration-accent">
                      {exp.company} ↗
                    </a>
                  ) : (
                    <p className="font-body text-[15px] text-primaryInk/80 mb-2">
                      {exp.company}
                    </p>
                  )}
                  {exp.type && (
                    <p className="font-mono text-xs uppercase tracking-[0.5px] text-accent">
                      {exp.type}
                    </p>
                  )}
                </div>
                
                <div className="lg:col-span-8">
                  {exp.description && (
                    <div 
                      className="font-body text-[15px] leading-[1.5] text-primaryInk mb-4"
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
                  )}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="font-body text-sm text-primaryInk flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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