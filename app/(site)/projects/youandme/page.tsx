import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { youandme } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - YouAndMe",
  description: "YouAndMe : app sociale React Native/Expo avec Firebase Auth, Supabase Realtime et cache média WhatsApp-like.",
  keywords: ["YouAndMe", "React Native", "Expo", "Firebase", "Supabase", "Social", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.youandme },
}

export default function YouAndMePage() {
  return <ProjectDisplay projectData={youandme} />
}
