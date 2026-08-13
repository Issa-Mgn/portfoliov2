import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { marketplace } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Marketplace",
  description: "Marketplace : app mobile e-commerce React Native avec catalogue, panier et processus de commande.",
  keywords: ["Marketplace", "E-commerce", "React Native", "Mobile", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.marketplace },
}

export default function MarketplacePage() {
  return <ProjectDisplay projectData={marketplace} />
}
