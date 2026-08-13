import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { todolist } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Issa MIGAN - ToDoList",
  description: "ToDoList : app mobile React Native de gestion de tâches pour organiser son quotidien.",
  keywords: ["ToDoList", "Tâches", "React Native", "Mobile", "Productivité", "Issa MIGAN"],
  alternates: { canonical: SITE_SLUGS.projectLinks.todolist },
}

export default function ToDoListPage() {
  return <ProjectDisplay projectData={todolist} />
}
