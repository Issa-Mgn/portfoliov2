import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { docfusion } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - DocFusion",
  description: "DocFusion : app mobile React Native pour fusionner des PDF et documents directement depuis le smartphone.",
  keywords: ["DocFusion", "PDF", "Fusion", "React Native", "Mobile", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.docfusion },
}

export default function DocFusionPage() {
  return <ProjectDisplay projectData={docfusion} />
}
