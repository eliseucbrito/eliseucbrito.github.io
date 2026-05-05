"use client";

import Link from "next/link";
import { useUIStore } from "../store/useUIStore";
import { uiTranslations } from "../locales/ui";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderActions({ lang }: { lang: "pt" | "en" }) {
  const { setLang } = useUIStore();
  const isPt = lang === "pt";
  const toggleLang = isPt ? "en" : "pt";

  const handleLangToggle = () => {
    setLang(toggleLang);
  };

  return (
    <div className="flex items-center space-x-4 h-full">
      <a
        href="https://github.com/eliseucbrito"
        target="_blank"
        rel="noreferrer"
        className="hover:text-accent transition-colors hidden sm:block"
      >
        {uiTranslations.actions.github.pt}
      </a>
      <Link
        href="/cv"
        target="_blank"
        rel="noreferrer"
        className="hover:text-accent transition-colors hidden sm:block"
      >
        {isPt ? uiTranslations.actions.cvPdf.pt : uiTranslations.actions.cvPdf.en}
      </Link>
      <div className="w-px h-full bg-[#333333]" />
      <button
        onClick={handleLangToggle}
        className="hover:text-accent transition-colors px-2 font-mono text-xs uppercase"
        aria-label={isPt ? uiTranslations.labels.language.en : uiTranslations.labels.language.pt}
      >
        {isPt ? "EN" : "PT"}
      </button>
      <ThemeToggle />
    </div>
  );
}