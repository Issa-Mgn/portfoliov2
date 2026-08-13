import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { iglive } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - IG-Live",
  description: "IG-Live : mini réseau social universitaire React Native/Supabase pour les étudiants de l'ENEAM.",
  keywords: ["IG-Live", "ENEAM", "React Native", "Supabase", "Social", "Mobile", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.iglive },
}

export default function IgLivePage() {
  return <ProjectDisplay projectData={iglive} />
}
