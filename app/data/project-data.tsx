import { StaticImageData } from "next/image"
import { TintSimulator } from "../components/BespokeTint/TintSimulator"
import { Phase } from "../components/ProjectSection/ApproachSection"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import heroBeforeAutomedics from "@/public/assets/automedics-before.png"
import heroBeforeMobileAutomedics from "@/public/assets/automedics-mobile.png"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import heroBeforeIao from "@/public/assets/iron-and-oak-before-website-design.jpg"
import heroBeforeMobileIao from "@/public/assets/iron-and-oak-before-website-design-mobile.jpg"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"

//   interface ProjectData {
//   hero: {
//     title: string
//     client: string
//     year: string
//     description: string | React.ReactNode
//     categories: string[]
//     link: string
//   }
//   beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
//   results: {
//     title: string
//     description: string
//     percentageIncrease: number
//     chart: React.ReactNode
//     dataSource: string[]
//     phases: { id: number; title: string; subtitle: string; description: string; details: string[]; icon: string; feature: React.ReactNode }[]
//     review: {
//       quote: React.ReactNode
//       name: string
//       title: string
//       img: StaticImageData
//     }
//   }
// }

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
  slug: string
}

export const bespoke: ProjectData = {
  hero: {
    title: "Lotus Business — Gestion commerciale offline-first pour l'Afrique de l'Ouest",
    client: "HoveYii (Stage)",
    year: "2024",
    description: (
      <>
        Développé pendant un stage de 8 semaines chez HoveYii, <strong>Lotus Business</strong> est une app mobile React Native/Expo pour les petits commerçants
        ouest-africains. Fonctionne <span className="font-semibold">sans connexion internet</span>, avec paiement{" "}
        <span className="font-semibold">mobile money KKiaPay</span>, système freemium, notifications push et emailing transactionnel via Brevo.
      </>
    ),
    categories: ["React Native", "Expo", "Node.js", "Offline-First", "Mobile Money"],
    link: "https://github.com/Issa-Mgn",
  },
  slug: "bespoke",
  beforeAfter: {
    heroBefore: heroBefore,
    beforeAltText: "Lotus Business - Vue liste produits",
    beforeMobileAltText: "Lotus Business - Vue mobile",
    heroBeforeMobile: heroBeforeMobile,
    iframe: undefined,
    afterAltText: "Lotus Business - Dashboard ventes",
  },
  results: [
    {
      title: "Offline-First",
      description: "Fonctionne sans connexion réseau",
      percentageIncrease: 100,
      chart: <TrafficBarChart startValue={0} endValue={100} />,
      dataSource: "SQLite local avec sync différée",
    },
    {
      title: "Freemium",
      description: "Activation par clé de licence",
      percentageIncrease: 80,
      chart: <RadialProgressRing />,
      dataSource: "Système de licences personnalisé",
    },
    {
      title: "Mobile Money",
      description: "Intégration KKiaPay",
      percentageIncrease: 90,
      chart: <LineChart />,
      dataSource: "Paiements en production",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Architecture offline",
      subtitle: "SQLite + Sync différée",
      description: "L'app fonctionne entièrement hors ligne grâce à SQLite. Les données sont synchronisées avec le backend Node.js/Express dès que la connexion revient.",
      details: [
        "Stockage local avec SQLite via Expo SQLite",
        "Sync automatique au retour de la connexion",
        "Gestion des conflits de données",
        "UX fluide même sans réseau",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/bespoke-hero-before.png" alt="Architecture offline" />,
    },
    {
      id: 2,
      title: "Freemium & Licences",
      subtitle: "Activation par clé unique",
      description: "Système freemium avec clés de licence générées côté backend. Les utilisateurs débloquent les fonctionnalités premium via paiement mobile money.",
      details: [
        "Génération de clés côté serveur (Node.js + Prisma)",
        "Validation de licence au démarrage",
        "Fonctionnalités premium verrouillées dynamiquement",
        "Gestion des expirations et renouvellements",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Système de licences" />,
    },
    {
      id: 3,
      title: "Mobile Money",
      subtitle: "Paiement KKiaPay",
      description: "Intégration de KKiaPay pour les paiements mobile money (MTN, Moov). Les commerçants souscrivent depuis l'app sans carte bancaire.",
      details: [
        "SDK KKiaPay intégré dans React Native",
        "Support MTN Mobile Money et Moov Money",
        "Webhooks backend pour confirmer les paiements",
        "Reçus automatiques via Brevo",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/bespoke-hero-before.png" alt="Paiement KKiaPay" />,
    },
  ],
  review: REVIEW_MAP.bespoke,
}

export const automedicsKirkland: ProjectData = {
  hero: {
    title: "YouAndMe — App sociale React Native avec Firebase & Supabase",
    client: "Projet Personnel",
    year: "2024",
    description:
      "YouAndMe est une app sociale mobile construite avec React Native/Expo. Authentification Firebase Auth, base de données Supabase PostgreSQL avec subscriptions temps réel. Les utilisateurs partagent des moments et interagissent via un feed dynamique.",
    categories: ["React Native", "Expo", "Firebase", "Supabase", "Node.js"],
    link: "https://github.com/Issa-Mgn",
  },
  slug: "automedics",
  beforeAfter: {
    heroBefore: heroBeforeAutomedics,
    beforeAltText: "YouAndMe - Feed principal",
    beforeMobileAltText: "YouAndMe - Vue mobile",
    heroBeforeMobile: heroBeforeMobileAutomedics,
    iframe: undefined,
    afterAltText: "YouAndMe - Profil utilisateur",
  },
  results: [
    {
      title: "Auth Firebase",
      description: "Authentification sécurisée",
      percentageIncrease: 100,
      chart: <TrafficBarChart startValue={0} endValue={100} />,
      dataSource: "Firebase Authentication",
    },
    {
      title: "Supabase",
      description: "Backend PostgreSQL temps réel",
      percentageIncrease: 95,
      chart: <RadialProgressRing percentage={95} />,
      dataSource: "Supabase Realtime",
    },
    {
      title: "Performance",
      description: "UX fluide et réactive",
      percentageIncrease: 90,
      chart: <LineChart />,
      dataSource: "React Native Expo",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Auth & Onboarding",
      subtitle: "Firebase Authentication",
      description: "Système d'authentification complet : inscription, connexion, récupération de mot de passe, profil utilisateur persistant.",
      details: [
        "Firebase Auth (email/password)",
        "Onboarding en plusieurs étapes",
        "Gestion de session persistante",
        "Sécurité des tokens côté client",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Auth Firebase" />,
    },
    {
      id: 2,
      title: "Backend Supabase",
      subtitle: "PostgreSQL + Realtime",
      description: "Base de données PostgreSQL via Supabase avec subscriptions temps réel pour les mises à jour de feed.",
      details: [
        "Modèle de données relationnelles PostgreSQL",
        "Supabase Realtime pour les updates live",
        "Row Level Security (RLS)",
        "Storage pour les médias utilisateurs",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="Supabase Backend" />,
    },
    {
      id: 3,
      title: "UX & Navigation",
      subtitle: "Interface intuitive",
      description: "Navigation fluide avec Expo Router, animations natives, feed infini et UX pensée pour un usage mobile quotidien.",
      details: [
        "Expo Router pour la navigation",
        "Animations React Native Reanimated",
        "Mode sombre / clair",
        "Infinite scroll et lazy loading",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/automedics-before.png" alt="UX YouAndMe" />,
    },
  ],
  review: REVIEW_MAP.automedics,
}

export const iao: ProjectData = {
  hero: {
    title: (
      <>
        Le Focus <br />— Actualités Béninoises
      </>
    ),
    client: "Projet Personnel",
    year: "2024",
    description:
      "Le Focus est un site d'actualités béninois développé avec React/Vite côté front-end et un backend Express/Node.js connecté à Supabase. Interface claire et rapide, pensée pour la lecture mobile, avec gestion de contenu, catégories et flux d'articles.",
    categories: ["React", "Vite", "Express", "Supabase", "PostgreSQL"],
    link: "https://github.com/Issa-Mgn",
  },
  slug: "iron-and-oak",
  beforeAfter: {
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: undefined,
    beforeAltText: "Le Focus - Page d'accueil",
    beforeMobileAltText: "Le Focus - Vue mobile",
    afterAltText: "Le Focus - Page article",
  },
  results: [
    {
      title: "Performance",
      description: "Chargement rapide avec Vite",
      percentageIncrease: 95,
      chart: <TrafficBarChart startValue={10} endValue={95} />,
      dataSource: "Vite + optimisations React",
    },
    {
      title: "Articles",
      description: "Contenu dynamique via Supabase",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Supabase PostgreSQL",
    },
    {
      title: "Mobile",
      description: "Design responsive mobile-first",
      percentageIncrease: 100,
      chart: <LineChart />,
      dataSource: "Tailwind CSS responsive",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Frontend React/Vite",
      subtitle: "Interface de lecture rapide",
      description: "Frontend construit avec React et Vite. Interface claire, catégories d'articles, moteur de recherche et navigation fluide.",
      details: [
        "React + Vite pour un build ultra-rapide",
        "Routing avec React Router v6",
        "Pages catégories et détail d'article",
        "Moteur de recherche côté client",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design.jpg" alt="Le Focus Frontend" />,
    },
    {
      id: 2,
      title: "Backend Express",
      subtitle: "API REST Node.js",
      description: "Backend Node.js/Express avec Prisma ORM connecté à Supabase. API RESTful pour la gestion des articles, catégories et auteurs.",
      details: [
        "Express.js + Prisma ORM",
        "Supabase PostgreSQL comme base de données",
        "Endpoints REST pour articles et catégories",
        "Gestion des médias avec Supabase Storage",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design-mobile.jpg" alt="Le Focus Backend" />,
    },
    {
      id: 3,
      title: "Temps Réel",
      subtitle: "Supabase Realtime",
      description: "Les nouveaux articles apparaissent en temps réel sans rechargement de page grâce à Supabase Realtime.",
      details: [
        "Supabase Realtime subscriptions",
        "Mise à jour du feed sans rechargement",
        "Notifications de nouveaux articles",
        "Cache intelligent côté client",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-before-website-design.jpg" alt="Le Focus Realtime" />,
    },
  ],
  review: REVIEW_MAP.iao,
}
