import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bodybloom } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - BodyBloom",
  description: "BodyBloom : app mobile fitness React Native pour suivre ses objectifs sportifs et de bien-être.",
  keywords: ["BodyBloom", "Fitness", "React Native", "Mobile", "Bien-être", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.bodybloom },
}

export default function BodyBloomPage() {
  return <ProjectDisplay projectData={bodybloom} />
}
