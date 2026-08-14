import Link from "next/link";

const navLinks = [
  { label: "INÍCIO", href: "/" },
  { label: "SOBRE", href: "/sobre" },
  { label: "PORTFÓLIO", href: "/portfolio" },
];

export function AcademicHeader({ active }: { active: string }) {
  return (
    <header className="w-full">
      <div className="bg-black text-white h-10 w-full flex items-center justify-between px-4 md:px-16 text-xs font-mono uppercase tracking-[1px] border-b border-black">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-bold text-sm tracking-wider hover:text-accent transition-colors">
            ELISEU C. BRITO
          </Link>
          <div className="hidden md:flex h-10 items-center">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center h-full">
                <Link
                  href={link.href}
                  className={`hover:text-accent transition-colors px-4 h-full flex items-center border-l border-[#333333] ${
                    active === link.href ? "text-accent" : ""
                  }`}
                >
                  {link.label}
                </Link>
                {idx === navLinks.length - 1 && (
                  <div className="w-px h-full bg-[#333333]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 h-full">
          <span className="hidden sm:block text-metadata">
            SISTEMAS DE INFORMAÇÃO · CIn/UFPE
          </span>
          <div className="w-px h-full bg-[#333333]" />
          <Link href="/profissional" className="hover:text-accent transition-colors">
            CV PROFISSIONAL ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
