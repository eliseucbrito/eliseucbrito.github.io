import { AcademicHeader } from "@/components/AcademicHeader";
import { GitGraph, type TimelinePeriod } from "@/components/GitGraph";

const timeline: TimelinePeriod[] = [
  {
    year: "2022",
    institution: {
      title: "Instituto Federal do Sertão Pernambucano",
      description: "Ensino Médio Técnico.",
    },
    activity: {
      title: "Pesquisa — Modelos de aprendizagem profunda para predição da qualidade do ar",
      description:
        "Início da trajetória em pesquisa aplicada, com estudos de aprendizado de máquina para predição de qualidade do ar e óbitos por COVID-19.",
    },
  },
  {
    year: "2023",
    activity: {
      title: "Publicações — XVI Brazilian Congress on Computational Intelligence",
      description:
        "Dois artigos aceitos e apresentados, um deles como autor principal, consolidando a pesquisa iniciada no IF Sertão-PE.",
    },
  },
  {
    year: "2024",
    institution: {
      title: "Centro de Informática — UFPE",
      description: "Ingresso no curso de Sistemas de Informação.",
    },
    activity: {
      title: "Pesquisa — INES / bolsa CNPq",
      description:
        "Continuidade da pesquisa científica, com bolsa CNPq financiando estudos de predição de séries temporais no INES.",
    },
  },
  {
    year: "2024",
    institution: {
      title: "CInCoders — Centro de Informática, UFPE",
      description: "Servidor público federal, Técnico em Desenvolvimento de Sistemas.",
    },
    activity: {
      title: "Sistemas institucionais de grande escala",
      description:
        "Aprovação em concurso público e atuação no desenvolvimento e modernização de sistemas usados por toda a comunidade acadêmica.",
    },
  },
  {
    year: "2026",
    institution: {
      title: "CInCoders (Projeto de Extensão) — UFPE",
      description: "Coordenador Adjunto.",
    },
    activity: {
      title: "Coordenação da Fábrica",
      description:
        "Supervisão de desenvolvimento, produto, design e comunicação de uma fábrica de software universitária.",
    },
  },
  {
    year: "2026",
    institution: {
      title: "UFPE · SAD-PE · SETD-PE",
      description: "Bolsista de graduação.",
    },
    activity: {
      title: "Pesquisa em IA para compras públicas",
      description:
        "Inteligência Artificial para Transformação Digital das Compras Públicas de Pernambuco.",
    },
  },
];

const skills = [
  "React / Next.js",
  "Node.js / NestJS",
  "Java / Spring Boot",
  "TypeScript",
  "Python",
  "SQL / Modelagem de Dados",
  "Machine Learning",
  "Arquitetura de Sistemas",
  "Git / CI-CD",
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-canvas text-primaryInk selection:bg-accent selection:text-white pb-32">
      <AcademicHeader active="/sobre" />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 md:pt-32">
        <section className="pb-16 border-b border-hairline">
          <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-primaryInk block mb-6">
            SOBRE MIM
          </span>
          <h1 className="font-display text-4xl sm:text-[42px] md:text-[56px] leading-[1.08] tracking-[-0.5px] text-primaryInk max-w-[800px]">
            Trajetória, habilidades e objetivos
          </h1>
        </section>

        <section className="py-16 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
                TRAJETÓRIA
              </span>
              <h2 className="font-display text-3xl sm:text-[36px] leading-[1.1] tracking-[-0.5px] text-primaryInk">
                Linha do tempo
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-[16px] leading-[1.5] text-primaryInk">
                Da iniciação científica ao curso de Sistemas de Informação, cada etapa somou uma camada
                diferente de experiência técnica e acadêmica.
              </p>
            </div>
          </div>

          <GitGraph periods={timeline} />
        </section>

        <section className="py-16 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
                TECNOLOGIA
              </span>
              <h2 className="font-display text-3xl sm:text-[36px] leading-[1.1] tracking-[-0.5px] text-primaryInk">
                Habilidades técnicas
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-[16px] leading-[1.5] text-primaryInk mb-6">
                Interesse por engenharia de software bem feita, sem atalhos: desde a arquitetura de
                sistemas até a experimentação com modelos de linguagem e aprendizado de máquina aplicados
                a problemas reais.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs uppercase tracking-[0.5px] text-metadata border border-hairline px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
                FUTURO
              </span>
              <h2 className="font-display text-3xl sm:text-[36px] leading-[1.1] tracking-[-0.5px] text-primaryInk">
                Objetivos profissionais
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-[16px] leading-[1.5] text-primaryInk">
                Pretendo seguir aprofundando conhecimento em arquitetura de sistemas de grande escala e
                inteligência artificial aplicada, conciliando a atuação técnica com a formação de outros
                desenvolvedores — seja na universidade, seja em projetos de impacto social como a Fábrica
                do CInCoders.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
