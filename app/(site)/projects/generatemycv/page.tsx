import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { generatemycv } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - GenerateMyCV",
  description: "GenerateMyCV : générateur de CV professionnel en ligne avec export PDF. React, Vite, Netlify.",
  keywords: ["GenerateMyCV", "CV", "PDF", "React", "Vite", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.generatemycv },
}

export default function GenerateMyCVPage() {
  return <ProjectDisplay projectData={generatemycv} />
}
