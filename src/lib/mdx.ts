import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

export function getFileContent(lang: string, fileName: string) {
  const fullPath = path.join(contentDirectory, lang, `${fileName}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return { data: {}, content: "" };
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = marked.parse(content, { async: false }) as string;
  
  return { data, content: htmlContent };
}

export function getAllContent(lang: string) {
  const dirPath = path.join(contentDirectory, lang);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(dirPath);
  return fileNames
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fileName = file.replace(/\.md$/, "");
      const { data, content } = getFileContent(lang, fileName);
      return { id: fileName, data, content };
    });
}
