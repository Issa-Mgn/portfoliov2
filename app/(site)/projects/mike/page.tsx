import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { mike } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Mike",
  description:
    "Mike : analyseur de conversations WhatsApp par IA (Groq/Mistral). Génère des portraits de personnalité humoristiques en français.",
  keywords: ["Mike", "WhatsApp", "IA", "Groq", "Mistral", "Analyse", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.mike },
}

const MikePage: React.FC = () => {
  return <ProjectDisplay projectData={mike} />
}

export default MikePage
