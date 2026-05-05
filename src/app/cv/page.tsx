import { getFileContent } from "@/lib/mdx";
import { CVClient } from "./CVClient";

export default function CVPage() {
  const getLanguageContent = (lang: string) => {
    return {
      heroData: getFileContent(lang, "hero"),
      experienceData: getFileContent(lang, "experience"),
      projectsData: getFileContent(lang, "projects"),
      publicationsData: getFileContent(lang, "publications"),
    };
  };

  const contentPt = getLanguageContent("pt");
  const contentEn = getLanguageContent("en");

  return <CVClient contentPt={contentPt as any} contentEn={contentEn as any} />;
}
