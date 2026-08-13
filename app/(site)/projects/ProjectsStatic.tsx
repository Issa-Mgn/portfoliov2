import Image, { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS, SITE_NAP } from "@/config/siteConfig"
import { Icon } from "@/app/components/Icon"

// Cover images
import lotusbusinessPreview from "@/app/images/lotusbusiness.webp"
import writedInPreview from "@/app/images/writedin.webp"
import mikePreview from "@/app/images/mike.webp"
import okazPreview from "@/app/images/okaz.webp"
import getcommandPreview from "@/app/images/getcommand.webp"
import lefocusPreview from "@/app/images/lefocus.webp"
import generatemycvPreview from "@/app/images/generatemycv.webp"
import educmePreview from "@/app/images/educme.webp"
import connectPreview from "@/app/images/connect.webp"
import shopeatPreview from "@/app/images/shop-eat.webp"
import vitiligocommunityPreview from "@/app/images/vitiligocommunity.webp"
import bodybloomPreview from "@/app/images/bodybloom.webp"
import docfusionPreview from "@/app/images/docfusion.webp"
import youandmePreview from "@/app/images/youandme.webp"
import todolistPreview from "@/app/images/todolist.webp"
import emilienPreview from "@/app/images/emilien.webp"
import marketplacePreview from "@/app/images/marketplace.webp"
import iglivePreview from "@/app/images/iglive.webp"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  isExternal: boolean
  ariaLabel: string
  dataText: string  // alias for carousel compatibility
}

const RECENT_PROJECTS: StaticProject[] = [
  {
    id: "lotusbusiness",
    src: lotusbusinessPreview,
    alt: "Lotus Business",
    color: "#024EFC",
    type: "Mobile App · Stage",
    text: "Voir le projet",
    dataText: "Voir le projet",
    href: SITE_SLUGS.projectLinks.lotusbusiness,
    isExternal: false,
    ariaLabel: "Voir Lotus Business",
  },
  {
    id: "writedin",
    src: writedInPreview,
    alt: "WritedIn",
    color: "#0a4fa8",
    type: "Web App · IA",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.writedin,
    isExternal: true,
    ariaLabel: "Ouvrir WritedIn",
  },
  {
    id: "mike",
    src: mikePreview,
    alt: "Mike",
    color: "#4a1a8c",
    type: "Web App · Analyse IA",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.mike,
    isExternal: true,
    ariaLabel: "Ouvrir Mike",
  },
  {
    id: "okaz",
    src: okazPreview,
    alt: "Okaz",
    color: "#1a7a4a",
    type: "Mobile App · Covoiturage",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.okaz,
    isExternal: true,
    ariaLabel: "Voir Okaz sur GitHub",
  },
]

const SITE_PROJECTS: StaticProject[] = [
  {
    id: "getcommand",
    src: getcommandPreview,
    alt: "GetCommand",
    color: "#1a1a1a",
    type: "Tool · Dev",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.getcommand,
    isExternal: true,
    ariaLabel: "Ouvrir GetCommand",
  },
  {
    id: "lefocus",
    src: lefocusPreview,
    alt: "Le Focus",
    color: "#13739C",
    type: "Média · Actualités",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.lefocus,
    isExternal: true,
    ariaLabel: "Ouvrir Le Focus",
  },
  {
    id: "generatemycv",
    src: generatemycvPreview,
    alt: "GenerateMyCV",
    color: "#2b7cff",
    type: "Productivité · Web App",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.generatemycv,
    isExternal: true,
    ariaLabel: "Ouvrir GenerateMyCV",
  },
  {
    id: "educme",
    src: educmePreview,
    alt: "EducMe",
    color: "#0d7d4a",
    type: "Éducation · Web App",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.educme,
    isExternal: true,
    ariaLabel: "Ouvrir EducMe",
  },
  {
    id: "connect",
    src: connectPreview,
    alt: "Connect",
    color: "#e85d04",
    type: "Tool · SQL & IA",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.connect,
    isExternal: true,
    ariaLabel: "Voir Connect sur GitHub",
  },
  {
    id: "shopeat",
    src: shopeatPreview,
    alt: "Shop-eat",
    color: "#e85d04",
    type: "Food · E-commerce",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.shopeat,
    isExternal: true,
    ariaLabel: "Ouvrir Shop-eat",
  },
  {
    id: "vitiligocommunity",
    src: vitiligocommunityPreview,
    alt: "VitiligoCommunity",
    color: "#7b2d8b",
    type: "Communauté · Web App",
    text: "Ouvrir",
    dataText: "Ouvrir",
    href: externalLinks.vitiligocommunity,
    isExternal: true,
    ariaLabel: "Ouvrir VitiligoCommunity",
  },
]

const APP_PROJECTS: StaticProject[] = [
  {
    id: "bodybloom",
    src: bodybloomPreview,
    alt: "BodyBloom",
    color: "#7b2d8b",
    type: "Mobile App · Fitness",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.bodybloom,
    isExternal: true,
    ariaLabel: "Voir BodyBloom sur GitHub",
  },
  {
    id: "docfusion",
    src: docfusionPreview,
    alt: "DocFusion",
    color: "#1a3a5c",
    type: "Mobile App · Documents",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.docfusion,
    isExternal: true,
    ariaLabel: "Voir DocFusion sur GitHub",
  },
  {
    id: "youandme",
    src: youandmePreview,
    alt: "YouAndMe",
    color: "#3B06D1",
    type: "Mobile App · Social",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.youandme,
    isExternal: true,
    ariaLabel: "Voir YouAndMe sur GitHub",
  },
  {
    id: "todolist",
    src: todolistPreview,
    alt: "ToDoList",
    color: "#024EFC",
    type: "Mobile App · Productivité",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.todolist,
    isExternal: true,
    ariaLabel: "Voir ToDoList sur GitHub",
  },
  {
    id: "emilien",
    src: emilienPreview,
    alt: "Emilien",
    color: "#13739C",
    type: "Mobile App · Notes",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.emilien,
    isExternal: true,
    ariaLabel: "Voir Emilien sur GitHub",
  },
  {
    id: "marketplace",
    src: marketplacePreview,
    alt: "Marketplace",
    color: "#DA961A",
    type: "Mobile App · E-commerce",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.marketplace,
    isExternal: true,
    ariaLabel: "Voir Marketplace sur GitHub",
  },
  {
    id: "iglive",
    src: iglivePreview,
    alt: "IG-Live",
    color: "#4a1a8c",
    type: "Mobile App · Réseau social",
    text: "Voir sur GitHub",
    dataText: "Voir sur GitHub",
    href: externalLinks.iglive,
    isExternal: true,
    ariaLabel: "Voir IG-Live sur GitHub",
  },
]

// Flat list used by MoreProjectsSection carousel
export const STATIC_PROJECTS: StaticProject[] = [...RECENT_PROJECTS, ...SITE_PROJECTS, ...APP_PROJECTS]

function ProjectGrid({ projects }: { projects: StaticProject[] }) {
  return (
    <div className="relative z-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        if (project.isExternal) {
          return (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={project.ariaLabel}
            >
              <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
            </a>
          )
        }
        return (
          <Link key={project.id} href={project.href} aria-label={project.ariaLabel}>
            <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
          </Link>
        )
      })}
    </div>
  )
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-1 pb-6">
      <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">{label}</span>
      <h2 className="text-2xl font-medium tracking-tight text-slate-900 md:text-3xl">{title}</h2>
    </div>
  )
}

export const ProjectsStatic: React.FC = () => {
  return (
    <div className="border-t border-slate-200">
      <div className="inside-container-small flex flex-col gap-20">

        {/* Récents */}
        <section>
          <SectionTitle label="/ récents" title="Projets récents" />
          <ProjectGrid projects={RECENT_PROJECTS} />
        </section>

        {/* Sites */}
        <section>
          <SectionTitle label="/ sites" title="Sites & Web Apps" />
          <ProjectGrid projects={SITE_PROJECTS} />
        </section>

        {/* Apps */}
        <section>
          <SectionTitle label="/ apps" title="Applications mobiles" />
          <ProjectGrid projects={APP_PROJECTS} />
        </section>

        {/* GitHub CTA */}
        <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-12 pb-4 text-center">
          <p className="text-sm text-slate-500">Et beaucoup d&apos;autres projets disponibles sur GitHub</p>
          <a
            href={SITE_NAP.profiles.github}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-all hover:shadow-md"
          >
            <Icon name="github" height={16} width={16} />
            Voir tous les projets sur GitHub
          </a>
        </div>

      </div>
    </div>
  )
}
