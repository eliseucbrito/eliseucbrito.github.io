import { AcademicHeader } from "@/components/AcademicHeader";

interface Project {
  title: string;
  discipline: string;
  description: string;
  objective: string;
  technologies?: string[];
  repoUrl?: string;
  prototypeUrl?: string;
  learnings?: string;
  placeholder?: boolean;
}

const projects: Project[] = [
  {
    title: "[PREENCHER] Projeto da disciplina de CAD",
    discipline: "Concepção e Análise de Sistemas (CAD)",
    description:
      "[PREENCHER: breve descrição do sistema desenvolvido na disciplina — o problema que ele resolve e para quem.]",
    objective:
      "[PREENCHER: objetivo do sistema ou da solução proposta, conforme definido no escopo do projeto de CAD.]",
    technologies: ["[PREENCHER]"],
    learnings: "[PREENCHER: principais aprendizados obtidos ao longo do projeto.]",
    placeholder: true,
  },
  {
    title: "[PREENCHER] Projeto da disciplina de IP",
    discipline: "Introdução à Programação (IP)",
    description:
      "[PREENCHER: breve descrição do programa/sistema desenvolvido na disciplina.]",
    objective:
      "[PREENCHER: objetivo do sistema ou da solução proposta, conforme definido no escopo do projeto de IP.]",
    technologies: ["[PREENCHER]"],
    learnings: "[PREENCHER: principais aprendizados obtidos ao longo do projeto.]",
    placeholder: true,
  },
  {
    title: "PoliTrends — Inteligência Sociopolítica em Tempo Real",
    discipline: "Projeto pessoal",
    description:
      "Plataforma que coleta e processa dados de redes sociais em tempo real para gerar análises políticas sobre candidatos brasileiros.",
    objective:
      "Fornecer inteligência sociopolítica a jornalistas e pesquisadores a partir de uma arquitetura event-driven de ingestão e processamento contínuo de grandes volumes de dados, conectada a modelos preditivos.",
    technologies: ["React", "Event-driven architecture", "Modelos preditivos"],
    prototypeUrl: "https://politrends-web.vercel.app/",
    learnings:
      "Em 2024, as projeções eleitorais da plataforma superaram a acurácia de institutos como Datafolha e Quaest — resultado direto de escolhas técnicas bem fundamentadas na arquitetura e nos modelos.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-canvas text-primaryInk selection:bg-accent selection:text-white pb-32">
      <AcademicHeader active="/portfolio" />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 md:pt-32">
        <section className="pb-16 border-b border-hairline">
          <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-primaryInk block mb-6">
            PORTFÓLIO
          </span>
          <h1 className="font-display text-4xl sm:text-[42px] md:text-[56px] leading-[1.08] tracking-[-0.5px] text-primaryInk max-w-[800px] mb-6">
            Projetos acadêmicos e pessoais
          </h1>
          <p className="font-body text-[16px] leading-[1.5] text-primaryInk max-w-2xl">
            Projetos desenvolvidos nas disciplinas de Concepção e Análise de Sistemas (CAD) e Introdução à
            Programação (IP), além de trabalhos pessoais construídos fora do curso.
          </p>
        </section>

        <section className="py-16">
          <div className="space-y-0">
            {projects.map((project) => (
              <div
                key={project.title}
                className="py-8 border-t border-hairline first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-[0.5px] text-accent mb-2">
                      {project.discipline}
                    </p>
                    <h3 className="font-body text-lg font-medium text-primaryInk mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs uppercase tracking-[1px] text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent"
                        >
                          Repositório →
                        </a>
                      )}
                      {project.prototypeUrl && (
                        <a
                          href={project.prototypeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs uppercase tracking-[1px] text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent"
                        >
                          Protótipo →
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="font-body text-[15px] leading-[1.5] text-primaryInk mb-3">
                      {project.description}
                    </p>
                    <p className="font-body text-[15px] leading-[1.5] text-primaryInk mb-3">
                      <span className="font-mono text-xs uppercase tracking-[0.5px] text-metadata block mb-1">
                        Objetivo
                      </span>
                      {project.objective}
                    </p>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs uppercase tracking-[0.5px] text-metadata border border-hairline px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.learnings && (
                      <p className="font-body text-sm text-primaryInk leading-[1.5] mb-4">
                        <span className="font-mono text-xs uppercase tracking-[0.5px] text-metadata block mb-1">
                          Aprendizados
                        </span>
                        {project.learnings}
                      </p>
                    )}

                    <div
                      className={`w-full aspect-video border border-dashed flex items-center justify-center p-8 text-center font-mono text-xs uppercase tracking-wide ${
                        project.placeholder
                          ? "border-accent/50 text-accent bg-accent/5"
                          : "border-hairline text-metadata bg-hairline/10"
                      }`}
                    >
                      {project.placeholder
                        ? "[PREENCHER] Imagem do protótipo / interface do sistema"
                        : "Imagem do protótipo / interface do sistema"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
