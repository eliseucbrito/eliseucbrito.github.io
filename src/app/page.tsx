import { getFileContent } from "@/lib/mdx";
import { Providers } from "@/app/providers";
import { PortfolioClient } from "@/app/PortfolioClient";

export default async function Home() {
  const getLanguageContent = (lang: string) => {
    return {
      heroData: getFileContent(lang, "hero"),
      leadershipData: getFileContent(lang, "leadership"),
      experienceData: getFileContent(lang, "experience"),
      projectsData: getFileContent(lang, "projects"),
      publicationsData: getFileContent(lang, "publications"),
    };
  };

  const contentPt = getLanguageContent("pt");
  const contentEn = getLanguageContent("en");

  return (
    <PortfolioClient contentPt={contentPt as any} contentEn={contentEn as any} />
  );
}
