import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { connect } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Connect",
  description: "Connect : génération de requêtes SQL par langage naturel grâce à l'IA (Groq/Mistral). React.js, dark theme.",
  keywords: ["Connect", "SQL", "IA", "Groq", "Mistral", "React", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.connect },
}

export default function ConnectPage() {
  return <ProjectDisplay projectData={connect} />
}
