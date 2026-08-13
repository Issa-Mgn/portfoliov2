import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { okaz } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Okaz",
  description:
    "Okaz : app mobile de covoiturage avec React Native, Expo et Mapbox. Géolocalisation temps réel, design glassmorphisme.",
  keywords: ["Okaz", "Covoiturage", "React Native", "Mapbox", "Géolocalisation", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.okaz },
}

const OkazPage: React.FC = () => {
  return <ProjectDisplay projectData={okaz} />
}

export default OkazPage
