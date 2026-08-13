import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { getcommand } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - GetCommand",
  description: "GetCommand : outil CLI et automatisation avec scripts Python et JavaScript pour fluidifier le flux de développement.",
  keywords: ["GetCommand", "CLI", "Python", "JavaScript", "Automatisation", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.getcommand },
}

export default function GetCommandPage() {
  return <ProjectDisplay projectData={getcommand} />
}
