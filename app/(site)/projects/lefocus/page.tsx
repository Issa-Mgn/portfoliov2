import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { lefocus } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Le Focus",
  description: "Le Focus : site d'actualités béninois React/Vite + Express/Supabase avec SEO complet et sitemap dynamique.",
  keywords: ["Le Focus", "Actualités", "Bénin", "React", "Vite", "Supabase", "SEO", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.lefocus },
}

export default function LeFocusPage() {
  return <ProjectDisplay projectData={lefocus} />
}
