export const DOMAIN_URL = "https://issa-migan.dev"

export const SITE_CONFIG = {
  title: "Issa MIGAN - Développeur FullStack Web & Mobile",
  description: "Portfolio d'Issa MIGAN, développeur FullStack Web & Mobile basé à Cotonou, Bénin. Spécialisé en React, React Native, Node.js, Express et PostgreSQL.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Issa MIGAN",
  keywords: ["Issa MIGAN", "Développeur FullStack", "React", "React Native", "Node.js", "Cotonou", "Bénin", "Web Developer", "Mobile Developer"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Issa MIGAN",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Issa MIGAN",
  contactTitle: "Développeur FullStack",
  email: "miganissa334@gmail.com",
  phone: "+2290156103458",
  formattedPhone: "+229 01 56 10 34 58",
  addressLink: "https://www.google.com/maps/search/?api=1&query=Cotonou+Benin",
  street: "Cotonou",
  city: "Cotonou",
  state: "Littoral",
  zipCode: "229",
  openingHours: [{ days: "Lun - Sam", hours: "8h - 20h" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/Issa-Mgn",
    x: "",
    whatsapp: "https://wa.me/2290156103458",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: [],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-issa-migan",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
