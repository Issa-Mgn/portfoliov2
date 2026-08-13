import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { educme } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - EducMe",
  description: "EducMe : plateforme de recherche et téléchargement d'épreuves d'examens pour étudiants. React.js, Netlify.",
  keywords: ["EducMe", "Épreuves", "Examens", "Étudiants", "React", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.educme },
}

export default function EducMePage() {
  return <ProjectDisplay projectData={educme} />
}
