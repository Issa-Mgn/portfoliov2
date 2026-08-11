import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsGraph } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Issa MIGAN - Projets & Réalisations",
  description: "Projets de Issa MIGAN : apps web, mobile React Native, backends Node.js/Express, intégrations IA. Développeur FullStack basé à Cotonou, Bénin.",
  keywords: ["Issa MIGAN", "Projets", "React", "React Native", "Node.js", "Cotonou", "Bénin", "FullStack", "Mobile", "Portfolio"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        id="id-projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsGraph),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
