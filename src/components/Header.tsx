"use client";

import Link from "next/link";
import { useUIStore } from "../store/useUIStore";
import { uiTranslations } from "../locales/ui";
import { HeaderActions } from "./HeaderActions";

export function Header({ lang }: { lang: "pt" | "en" }) {
  const isPt = lang === "pt";
  
  const navLinks = [
    { label: uiTranslations.nav.about[isPt ? "pt" : "en"], href: isPt ? "#sobre" : "#about" },
    { label: uiTranslations.nav.projects[isPt ? "pt" : "en"], href: isPt ? "#projetos" : "#projects" },
    { label: uiTranslations.nav.research[isPt ? "pt" : "en"], href: isPt ? "#pesquisa" : "#research" },
  ];

  return (
    <header className="w-full">
      <div className="bg-black text-white h-10 w-full flex items-center justify-between px-4 md:px-16 text-xs font-mono uppercase tracking-[1px] border-b border-black">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-bold text-sm tracking-wider hover:text-accent transition-colors">
            ELISEU C. BRITO
          </Link>
          <div className="hidden md:flex h-10 items-center">
            {navLinks.map((link, idx) => (
              <div key={`${link.href}-${idx}`} className="flex items-center h-full">
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors px-4 h-full flex items-center border-l border-[#333333]"
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

        <HeaderActions lang={lang} />
      </div>
    </header>
  );
}