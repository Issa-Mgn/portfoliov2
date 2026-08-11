import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Projet Le Focus",
  description: "Le Focus : site d'actualités béninois développé avec React/Vite, Express et Supabase.",
  keywords: ["Issa MIGAN", "Le Focus", "Actualités Bénin", "React", "Vite", "Express", "Supabase"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.bespoke,
  },
}

const BespokePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={bespoke} />
    </>
  )
}

export default BespokePage
