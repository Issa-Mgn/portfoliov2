import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { automedicsKirkland } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Projet Lotus Business",
  description: "Comment j'ai construit Lotus Business : solution mobile offline-first de gestion commerciale pour petits commerçants (mobile money, freemium, notifications push).",
  keywords: ["Issa MIGAN", "Lotus Business", "React Native", "Expo", "Node.js", "KKiaPay", "Mobile Money", "Bénin", "Afrique de l'Ouest"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.automedics,
  },
}

const AutomedicsKirklandPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={automedicsKirkland} />
    </>
  )
}

export default AutomedicsKirklandPage
