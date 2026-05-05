interface Publication {
  title: string;
  event?: string;
  year: string;
  location?: string;
  authors: string;
  role?: string;
  abstract?: string;
  reference?: string;
}

interface PublicationsSectionProps {
  data: {
    title?: string;
    kicker?: string;
    publications?: Publication[];
  };
  content: string;
}

export function PublicationsSection({ data, content }: PublicationsSectionProps) {
  const publications = data.publications || [];
  
  return (
    <section id="pesquisa" className="py-16 border-b border-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
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
        
        <div className="lg:col-span-8 space-y-0">
          {publications.length > 0 ? (
            publications.map((pub, idx) => (
              <div key={idx} className="py-8 border-t border-hairline first:border-t-0">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-metadata pt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="space-y-3">
                    <h3 className="font-body text-[17px] leading-[1.4] text-primaryInk font-medium">
                      {pub.title}
                    </h3>
                    <div className="font-mono text-xs uppercase tracking-[0.5px] text-metadata space-y-1">
                      <p>{pub.event} · {pub.year}</p>
                      {pub.location && <p>{pub.location}</p>}
                    </div>
                    {pub.abstract && (
                      <p className="font-body text-[14px] leading-[1.5] text-primaryInk/80">
                        {pub.abstract}
                      </p>
                    )}
                    {pub.reference && (
                      <p className="font-mono text-xs text-metadata">
                        {pub.reference}
                      </p>
                    )}
                    <p className="font-mono text-xs text-metadata">
                      {pub.authors}
                    </p>
                    {pub.role && (
                      <span className="inline-block font-mono text-xs uppercase tracking-[0.5px] text-accent border border-accent px-2 py-1">
                        {pub.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div 
              className="font-body text-[16px] leading-[1.5] text-primaryInk"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    </section>
  );
}