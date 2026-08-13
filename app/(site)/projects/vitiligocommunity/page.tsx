import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { vitiligocommunity } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - VitiligoCommunity",
  description: "VitiligoCommunity : plateforme communautaire React.js pour les personnes atteintes de vitiligo.",
  keywords: ["VitiligoCommunity", "Communauté", "Vitiligo", "React", "Inclusion", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.vitiligocommunity },
}

export default function VitiligoCommunityPage() {
  return <ProjectDisplay projectData={vitiligocommunity} />
}
