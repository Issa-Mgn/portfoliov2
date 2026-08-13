import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { emilien } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Emilien",
  description: "Emilien : app mobile React Native de prise de notes rapide avec organisation et recherche full-text.",
  keywords: ["Emilien", "Notes", "React Native", "Mobile", "Productivité", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.emilien },
}

export default function EmilienPage() {
  return <ProjectDisplay projectData={emilien} />
}
