import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import IconSpritePreview from "@/app/images/zero-icon-sprite-preview.jpg"
import zeroPreview from "@/app/images/react-zero-ui-preview.jpg"
// TODO: replace placeholders below with real project screenshots
const mikePreview = bespokePreview
const writedInPreview = zeroPreview
const getCommandPreview = iaoPreview
const generateMyCVPreview = automedicsPreview
const educMePreview = entitledPreview
const shopNEatPreview = IconSpritePreview
const bodyBloomPreview = bespokePreview
const docFusionPreview = automedicsPreview
const igLivePreview = iaoPreview
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "react-zero-ui",
    src: zeroPreview,
    alt: "React-Zero-UI - Preview",
    color: "#3B06D1",
    type: "Zero Re-Render State Library",
    text: "View on GitHub",
    href: externalLinks.zeroCore,
    dataText: "View on GitHub",
    ariaLabel: "View React Zero UI on GitHub",
    isExternal: true,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "Lotus Business Preview",
    color: "#024EFC",
    type: "Mobile App · Stage",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See Case Study",
    ariaLabel: "See Lotus Business Case Study",
    isExternal: false,
  },
  {
    id: "automedics",
    src: automedicsPreview,
    alt: "YouAndMe Preview",
    color: "#000000",
    type: "Mobile App · Social",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.automedics,
    dataText: "See Case Study",
    ariaLabel: "See YouAndMe Case Study",
    isExternal: false,
  },
  {
    id: "iron-oak",
    src: iaoPreview,
    alt: "Le Focus Preview",
    color: "#13739C",
    type: "Media · Actualités",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.iao,
    dataText: "See Case Study",
    ariaLabel: "See Le Focus Case Study",
    isExternal: false,
  },
  // --- Projets supplémentaires ---
  {
    id: "mike",
    src: mikePreview, // TODO: replace with real screenshot
    alt: "Mike Preview",
    color: "#1a1a2e",
    type: "Analyse",
    text: "Disponible bientôt",
    href: "#",
    dataText: "Disponible bientôt",
    ariaLabel: "Mike - Analyseur de conversations WhatsApp",
    isExternal: false,
  },
  {
    id: "writedin",
    src: writedInPreview, // TODO: replace with real screenshot
    alt: "WritedIn Preview",
    color: "#0a4fa8",
    type: "Web App",
    text: "Ouvrir",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Ouvrir",
    ariaLabel: "WritedIn - Plateforme d'écriture et publication",
    isExternal: true,
  },
  {
    id: "getcommand",
    src: getCommandPreview, // TODO: replace with real screenshot
    alt: "GetCommand Preview",
    color: "#1a1a1a",
    type: "Tool",
    text: "Ouvrir",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Ouvrir",
    ariaLabel: "GetCommand - Outil web de commandes pour développeurs",
    isExternal: true,
  },
  {
    id: "generatemycv",
    src: generateMyCVPreview, // TODO: replace with real screenshot
    alt: "GenerateMyCV Preview",
    color: "#2b7cff",
    type: "Productivité",
    text: "Ouvrir",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Ouvrir",
    ariaLabel: "GenerateMyCV - Générateur de CV en ligne",
    isExternal: true,
  },
  {
    id: "educme",
    src: educMePreview, // TODO: replace with real screenshot
    alt: "EducMe Preview",
    color: "#0d7d4a",
    type: "Education",
    text: "Ouvrir",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Ouvrir",
    ariaLabel: "EducMe - Plateforme éducative",
    isExternal: true,
  },
  {
    id: "shopneat",
    src: shopNEatPreview, // TODO: replace with real screenshot
    alt: "Shop'n eat Preview",
    color: "#e85d04",
    type: "Food",
    text: "Ouvrir",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Ouvrir",
    ariaLabel: "Shop'n eat - Expérience web restauration et achat",
    isExternal: true,
  },
  {
    id: "bodybloom",
    src: bodyBloomPreview, // TODO: replace with real screenshot
    alt: "BodyBloom Preview",
    color: "#7b2d8b",
    type: "Mobile App",
    text: "Voir l'image",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Voir l'image",
    ariaLabel: "BodyBloom - Application mobile",
    isExternal: true,
  },
  {
    id: "docfusion",
    src: docFusionPreview, // TODO: replace with real screenshot
    alt: "DocFusion Preview",
    color: "#1a3a5c",
    type: "Mobile App",
    text: "Voir l'image",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Voir l'image",
    ariaLabel: "DocFusion - Assistant de gestion documentaire",
    isExternal: true,
  },
  {
    id: "iglive",
    src: igLivePreview, // TODO: replace with real screenshot
    alt: "IG-Live Preview",
    color: "#4a1a8c",
    type: "Mobile App",
    text: "Voir l'image",
    href: "https://github.com/Issa-Mgn", // TODO: replace with real link
    dataText: "Voir l'image",
    ariaLabel: "IG-Live - Application mobile",
    isExternal: true,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "Entitled Preview",
    color: "#DA961AA5",
    type: "Event Management Web App",
    text: "View Website",
    href: externalLinks.entitled,
    dataText: "View Website",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const Tag = project.isExternal ? "a" : Link
            const tagProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "nofollow noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <Tag key={project.id} {...tagProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
