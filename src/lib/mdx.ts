import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

function processProjectImages(projects: any[]) {
  if (!projects || !Array.isArray(projects)) return;

  projects.forEach((project) => {
    if (project.label) {
      const sourceDir = path.join(process.cwd(), "src", "assets", "cincoders", project.label);
      const publicDir = path.join(process.cwd(), "public", "images", "cincoders", project.label);
      
      if (fs.existsSync(sourceDir)) {
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        
        const files = fs.readdirSync(sourceDir).filter(file => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file));
        
        files.forEach(file => {
          fs.copyFileSync(path.join(sourceDir, file), path.join(publicDir, file));
        });
        
        project.images = files.sort().map(file => `/images/cincoders/${project.label}/${file}`);
      }
    }
  });
}

export function getFileContent(lang: string, fileName: string) {
  const fullPath = path.join(contentDirectory, lang, `${fileName}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return { data: {}, content: "" };
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = marked.parse(content, { async: false }) as string;
  
  if (fileName === "projects" && data.projects) {
    processProjectImages(data.projects);
  }
  
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
