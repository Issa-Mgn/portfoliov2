import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { shopeat } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Shop-eat",
  description: "Shop-eat : site de commande de repas en ligne en HTML/CSS/JS. Interface simple, menu et panier.",
  keywords: ["Shop-eat", "Restauration", "E-commerce", "HTML", "CSS", "JavaScript", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.shopeat },
}

export default function ShopEatPage() {
  return <ProjectDisplay projectData={shopeat} />
}
