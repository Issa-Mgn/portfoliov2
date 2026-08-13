import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { lotusbusiness } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - Lotus Business",
  description:
    "Lotus Business : app mobile offline-first de gestion commerciale pour petits commerçants béninois. React Native, KKiaPay, SQLite, Freemium.",
  keywords: ["Lotus Business", "React Native", "Expo", "KKiaPay", "Offline-First", "Bénin", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.lotusbusiness },
}

const LotusBusinessPage: React.FC = () => {
  return <ProjectDisplay projectData={lotusbusiness} />
}

export default LotusBusinessPage
