import { AcademicHeader } from "@/components/AcademicHeader";

const timeline = [
  {
    year: "2022",
    title: "Início da Iniciação Científica",
    institution: "Instituto Federal do Sertão Pernambucano",
    description:
      "Início da trajetória em pesquisa aplicada, com estudos de aprendizado de máquina para predição de qualidade do ar e óbitos por COVID-19.",
  },
  {
    year: "2023",
    title: "Publicações em congresso",
    institution: "XVI Brazilian Congress on Computational Intelligence",
    description:
      "Dois artigos aceitos e apresentados, um deles como autor principal, consolidando a pesquisa iniciada no IF Sertão-PE.",
  },
  {
    year: "2024",
    title: "Ingresso em Sistemas de Informação",
    institution: "Centro de Informática — UFPE",
    description:
      "Início do curso de Sistemas de Informação, com continuidade da pesquisa científica através de bolsa CNPq no INES.",
  },
  {
    year: "2024",
    title: "Servidor público federal",
    institution: "CInCoders — Centro de Informática, UFPE",
    description:
      "Aprovação em concurso público e ingresso como Técnico em Desenvolvimento de Sistemas, atuando em sistemas institucionais de grande escala.",
  },
  {
    year: "2026",
    title: "Coordenação da Fábrica",
    institution: "CInCoders (Projeto de Extensão) — UFPE",
    description:
      "Assunção do cargo de Coordenador Adjunto do projeto de extensão, supervisionando desenvolvimento, produto, design e comunicação de uma fábrica de software universitária.",
  },
  {
    year: "2026",
    title: "Pesquisa em IA para compras públicas",
    institution: "UFPE · SAD-PE · SETD-PE",
    description:
      "Bolsista de graduação no projeto de Inteligência Artificial para Transformação Digital das Compras Públicas de Pernambuco.",
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

          <ol className="relative border-l border-hairline ml-2 md:ml-4 space-y-12">
            {timeline.map((item) => (
              <li key={`${item.year}-${item.title}`} className="ml-6 md:ml-10 relative">
                <span className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-canvas" />
                <p className="font-mono text-xs uppercase tracking-[0.5px] text-accent mb-1">
                  {item.year}
                </p>
                <h3 className="font-body text-lg font-medium text-primaryInk mb-1">{item.title}</h3>
                <p className="font-body text-[15px] text-primaryInk/80 mb-2">{item.institution}</p>
                <p className="font-body text-sm text-primaryInk leading-[1.5]">{item.description}</p>
              </li>
            ))}
          </ol>
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
