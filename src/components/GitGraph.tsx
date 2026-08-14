interface TimelineEntry {
  title: string;
  description: string;
}

export interface TimelinePeriod {
  year: string;
  institution?: TimelineEntry;
  activity?: TimelineEntry;
}

const ROW_HEIGHT = 132;
const MASTER_X = 24;
const BRANCH_X = 24 + 56;
const NODE_R = 7;

function EntryCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div>
      <h3 className="font-body text-base font-medium text-primaryInk mb-1">{entry.title}</h3>
      <p className="font-body text-sm text-primaryInk/80 leading-[1.5]">{entry.description}</p>
    </div>
  );
}

export function GitGraph({ periods }: { periods: TimelinePeriod[] }) {
  const height = periods.length * ROW_HEIGHT;
  const rowCenter = (idx: number) => idx * ROW_HEIGHT + ROW_HEIGHT / 2;

  return (
    <div>
      <div className="flex gap-4 mb-6 font-mono text-xs uppercase tracking-[0.5px]">
        <span className="flex items-center gap-2 text-metadata">
          <span className="w-2 h-2 rounded-full bg-primaryInk" /> Instituição / vínculo
        </span>
        <span className="flex items-center gap-2 text-metadata">
          <span className="w-2 h-2 rounded-full bg-accent" /> Atuação
        </span>
      </div>

      <div className="relative">
        <svg
          width={BRANCH_X + NODE_R + 8}
          height={height}
          className="absolute left-0 top-0 hidden sm:block"
          aria-hidden="true"
        >
          {/* master spine */}
          <line x1={MASTER_X} y1={0} x2={MASTER_X} y2={height} stroke="var(--color-hairline)" strokeWidth={2} />

          {periods.map((period, idx) => {
            const y = rowCenter(idx);
            const prevY = idx > 0 ? rowCenter(idx - 1) : null;
            const nextHasActivity = periods[idx + 1]?.activity;

            return (
              <g key={`${period.year}-${idx}`}>
                {period.activity && (
                  <>
                    {/* branch out from master */}
                    <path
                      d={`M ${MASTER_X} ${y - ROW_HEIGHT / 2} C ${MASTER_X} ${y - 10}, ${BRANCH_X} ${y - 20}, ${BRANCH_X} ${y}`}
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth={2}
                    />
                    {/* merge back to master, unless the next row continues the branch */}
                    {!nextHasActivity && (
                      <path
                        d={`M ${BRANCH_X} ${y} C ${BRANCH_X} ${y + 20}, ${MASTER_X} ${y + 10}, ${MASTER_X} ${y + ROW_HEIGHT / 2}`}
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                      />
                    )}
                    {nextHasActivity && (
                      <line
                        x1={BRANCH_X}
                        y1={y}
                        x2={BRANCH_X}
                        y2={y + ROW_HEIGHT}
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                      />
                    )}
                    <circle cx={BRANCH_X} cy={y} r={NODE_R} fill="var(--color-accent)" stroke="var(--color-canvas)" strokeWidth={2} />
                  </>
                )}

                {period.institution && (
                  <circle cx={MASTER_X} cy={y} r={NODE_R} fill="var(--color-primary-ink)" stroke="var(--color-canvas)" strokeWidth={2} />
                )}
              </g>
            );
          })}
        </svg>

        <ol
          className="relative sm:pl-[92px]"
          style={{ minHeight: height }}
        >
          {periods.map((period, idx) => (
            <li
              key={`row-${period.year}-${idx}`}
              className="flex flex-col justify-center py-6 sm:py-0"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <p className="font-mono text-xs uppercase tracking-[1px] text-metadata mb-2">{period.year}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                {period.institution ? (
                  <EntryCard entry={period.institution} />
                ) : (
                  <span className="hidden md:block" />
                )}
                {period.activity ? (
                  <EntryCard entry={period.activity} />
                ) : (
                  <span className="hidden md:block" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
