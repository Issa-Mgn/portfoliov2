import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { iao } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Projet YouAndMe",
  description: "YouAndMe : app sociale React Native/Expo avec Firebase Auth et backend Supabase.",
  keywords: ["Issa MIGAN", "YouAndMe", "React Native", "Expo", "Firebase", "Supabase", "Social App"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.iao,
  },
}

const IaoPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={iao} />
    </>
  )
}

export default IaoPage
