import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { writedin } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - WritedIn",
  description:
    "WritedIn : plateforme web de création de contenu social assistée par IA. Génération de posts optimisés pour chaque réseau social.",
  keywords: ["WritedIn", "IA", "Contenu Social", "React", "Netlify", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.writedin },
}

const WritedInPage: React.FC = () => {
  return <ProjectDisplay projectData={writedin} />
}

export default WritedInPage
