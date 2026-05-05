

interface LeadershipSectionProps {
  data: {
    title?: string;
    kicker?: string;
    images?: string[];
  };
  content: string;
}

export function LeadershipSection({ data, content }: LeadershipSectionProps) {
  return (
    <section id="lideranca" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 border-b border-hairline">
      <div className="lg:col-span-4">
        {data.kicker && (
          <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
            {data.kicker}
          </span>
        )}
        {data.title && (
          <h2 className="font-display text-3xl sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.5px] text-primaryInk mb-6">
            {data.title}
          </h2>
        )}
      </div>
      
      <div className="lg:col-span-8 space-y-6">
        <div 
          className="font-body text-[16px] leading-[1.5] text-primaryInk"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {data.images && data.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-4">
            {data.images.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] bg-hairline/30 border border-hairline flex items-center justify-center">
                <span className="font-mono text-[10px] uppercase text-metadata">{idx + 1}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}