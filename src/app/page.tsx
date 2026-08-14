import Link from "next/link";
import { AcademicHeader } from "@/components/AcademicHeader";

const interests = [
  "Engenharia de Software",
  "Arquitetura de Sistemas",
  "Inteligência Artificial",
  "Engenharia de Dados",
  "Impacto Social",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-primaryInk selection:bg-accent selection:text-white pb-32">
      <AcademicHeader active="/" />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 md:pt-32">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-hairline">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-primaryInk block mb-6">
              PORTFÓLIO ACADÊMICO
            </span>

            <h1 className="font-display text-4xl sm:text-[42px] md:text-[64px] leading-[1.08] md:leading-[1.05] tracking-[-0.5px] text-primaryInk max-w-[800px] mb-8">
              Eliseu Cordeiro de Brito
            </h1>

            <div className="font-body text-[16px] leading-[1.5] text-primaryInk max-w-2xl mt-8 space-y-4">
              <p>
                Sou estudante de Sistemas de Informação no Centro de Informática da UFPE. Trabalho
                atualmente como servidor público federal no CInCoders, a divisão de desenvolvimento do
                CIn, onde atuo na construção e modernização de sistemas institucionais e na definição de
                padrões técnicos da equipe.
              </p>
              <p>
                Este site reúne as atividades desenvolvidas ao longo do curso, com foco nos projetos das
                disciplinas de Concepção e Análise de Sistemas (CAD) e Introdução à Programação (IP), além
                de outros trabalhos pessoais e acadêmicos.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs uppercase tracking-[0.5px] text-metadata border border-hairline px-2 py-1"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-hairline max-w-2xl">
              <a
                href="mailto:ecb2@cin.ufpe.br"
                className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/eliseucbrito"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/eliseucbrito"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm uppercase tracking-wide text-primaryInk hover:text-accent transition-colors underline underline-offset-4 decoration-hairline hover:decoration-accent"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-start justify-end lg:border-l lg:border-hairline lg:pl-12 pt-8 lg:pt-0">
            <div className="w-full aspect-square bg-hairline/20 border border-hairline flex items-center justify-center p-8 text-center text-metadata text-sm font-mono uppercase tracking-wide">
              <img
                src="https://github.com/eliseucbrito.png"
                alt="Foto de Eliseu Cordeiro de Brito"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs sm:text-[13px] tracking-[1px] uppercase text-metadata block mb-4">
                NAVEGAÇÃO
              </span>
              <h2 className="font-display text-3xl sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.5px] text-primaryInk">
                Explore o site
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/sobre"
                className="block p-6 border border-hairline hover:border-accent transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-[0.5px] text-accent">Sobre</span>
                <h3 className="font-body text-lg font-medium text-primaryInk mt-2 mb-2">
                  Trajetória e habilidades
                </h3>
                <p className="font-body text-sm text-primaryInk/80">
                  Formação, interesses em tecnologia e objetivos profissionais.
                </p>
                <span className="inline-block font-mono text-xs uppercase tracking-[1px] text-primaryInk mt-4 group-hover:text-accent transition-colors">
                  Ver mais →
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="block p-6 border border-hairline hover:border-accent transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-[0.5px] text-accent">Portfólio</span>
                <h3 className="font-body text-lg font-medium text-primaryInk mt-2 mb-2">
                  Projetos acadêmicos
                </h3>
                <p className="font-body text-sm text-primaryInk/80">
                  Trabalhos desenvolvidos nas disciplinas de CAD e IP, e outros projetos pessoais.
                </p>
                <span className="inline-block font-mono text-xs uppercase tracking-[1px] text-primaryInk mt-4 group-hover:text-accent transition-colors">
                  Ver mais →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
