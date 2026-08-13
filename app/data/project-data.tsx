import { StaticImageData } from "next/image"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"

// Cover images (app/images/)
import lotusbusinessCover from "@/app/images/lotusbusiness.webp"
import writedInCover from "@/app/images/writedin.webp"
import mikeCover from "@/app/images/mike.webp"
import okazCover from "@/app/images/okaz.webp"

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
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

// ─── LOTUS BUSINESS ──────────────────────────────────────────────────────────
export const lotusbusiness: ProjectData = {
  slug: "lotusbusiness",
  hero: {
    title: "Lotus Business — Gestion commerciale offline-first",
    client: "HoveYii (Stage)",
    year: "2024",
    description:
      "Application mobile de gestion commerciale développée en React Native/Expo avec un backend Node.js, Express et Prisma, conçue pour les petits commerçants béninois. Architecture offline-first : toutes les opérations (ventes, stock, factures) sont exécutées localement via SQLite. Parmi ses fonctionnalités : impression de reçus Bluetooth, authentification par clé de licence, vitrine marchande automatique et génération de documents comptables assistée par IA. Paiement mobile via KKiaPay, deux formules Free et Premium.",
    categories: ["React Native", "Expo", "Node.js", "Express", "Prisma", "SQLite", "Supabase", "KKiaPay"],
    link: "https://lotusbusinesses.com",
  },
  beforeAfter: {
    heroBefore: lotusbusinessCover,
    heroBeforeMobile: lotusbusinessCover,
    beforeAltText: "Lotus Business - Interface principale",
    beforeMobileAltText: "Lotus Business - Vue mobile",
    afterAltText: "Lotus Business - Dashboard ventes",
  },
  results: [
    {
      title: "Offline-First",
      description: "100% fonctionnel sans réseau",
      percentageIncrease: 100,
      chart: <TrafficBarChart startValue={0} endValue={100} />,
      dataSource: "SQLite embarqué + sync différée",
    },
    {
      title: "Mobile Money",
      description: "Intégration KKiaPay MTN/Moov",
      percentageIncrease: 90,
      chart: <RadialProgressRing percentage={90} />,
      dataSource: "KKiaPay en production",
    },
    {
      title: "Freemium",
      description: "Licences Free & Premium",
      percentageIncrease: 80,
      chart: <LineChart />,
      dataSource: "Système de licences custom",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Architecture offline",
      subtitle: "SQLite + Sync différée",
      description: "L'app fonctionne entièrement hors ligne grâce à SQLite embarqué. La synchronisation avec Supabase se déclenche automatiquement au retour de la connexion.",
      details: [
        "Stockage local SQLite via Expo SQLite",
        "Sync automatique au retour réseau",
        "Gestion des conflits de données",
        "UX fluide sans connexion",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/lotusbusiness/1.webp" alt="Architecture offline Lotus Business" />,
    },
    {
      id: 2,
      title: "Licences & Freemium",
      subtitle: "Clé d'activation unique",
      description: "Système freemium avec clés générées côté backend. Les fonctionnalités premium se déverrouillent après paiement mobile money.",
      details: [
        "Génération de clés côté serveur (Prisma)",
        "Validation au démarrage de l'app",
        "Features premium verrouillées dynamiquement",
        "Gestion des expirations",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/lotusbusiness/2.webp" alt="Licences Lotus Business" />,
    },
    {
      id: 3,
      title: "Paiement KKiaPay",
      subtitle: "MTN & Moov Mobile Money",
      description: "Intégration complète de KKiaPay pour les paiements mobile money. Webhooks backend pour confirmer les transactions, reçus via Brevo.",
      details: [
        "SDK KKiaPay en React Native",
        "Support MTN Mobile Money et Moov",
        "Webhooks pour confirmation paiement",
        "Impression reçus Bluetooth",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/lotusbusiness/3.webp" alt="Paiement KKiaPay Lotus Business" />,
    },
  ],
  review: REVIEW_MAP["bespoke"],
}

// ─── WRITEDIN ────────────────────────────────────────────────────────────────
export const writedin: ProjectData = {
  slug: "writedin",
  hero: {
    title: "WritedIn — Créer du contenu social avec l'IA",
    client: "Projet Personnel",
    year: "2024",
    description:
      "Plateforme web conçue pour simplifier et booster la création de contenus sur les réseaux sociaux grâce à l'IA. L'application permet de générer rapidement des publications optimisées, d'adapter le ton selon le réseau ciblé et d'aider les créateurs ou entrepreneurs à maintenir une présence active en ligne sans y passer des heures.",
    categories: ["React", "IA", "Web App", "Réseaux Sociaux"],
    link: "https://writedin.netlify.app",
  },
  beforeAfter: {
    heroBefore: writedInCover,
    heroBeforeMobile: writedInCover,
    beforeAltText: "WritedIn - Interface principale",
    beforeMobileAltText: "WritedIn - Vue mobile",
    afterAltText: "WritedIn - Génération de contenu",
  },
  results: [
    {
      title: "Génération IA",
      description: "Publications prêtes en secondes",
      percentageIncrease: 95,
      chart: <TrafficBarChart startValue={0} endValue={95} />,
      dataSource: "API IA intégrée",
    },
    {
      title: "Multi-réseau",
      description: "Ton adapté par plateforme",
      percentageIncrease: 90,
      chart: <RadialProgressRing percentage={90} />,
      dataSource: "Prompts personnalisés",
    },
    {
      title: "Gain de temps",
      description: "Moins de temps sur le contenu",
      percentageIncrease: 85,
      chart: <LineChart />,
      dataSource: "Retours utilisateurs",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Interface de création",
      subtitle: "UX simple et directe",
      description: "Interface pensée pour aller vite : l'utilisateur décrit son idée, choisit son réseau et obtient un post prêt à publier.",
      details: [
        "Formulaire de génération guidé",
        "Choix du réseau cible",
        "Prévisualisation du post",
        "Copie en un clic",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/writedin/1.webp" alt="WritedIn Interface" />,
    },
    {
      id: 2,
      title: "Intégration IA",
      subtitle: "Génération optimisée",
      description: "Les prompts sont construits pour produire un contenu adapté au ton et aux codes de chaque réseau social.",
      details: [
        "Prompts engineering par réseau",
        "Adaptation du ton automatique",
        "Hashtags suggérés",
        "Variations de contenu",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/writedin/2.webp" alt="WritedIn IA" />,
    },
    {
      id: 3,
      title: "Déploiement",
      subtitle: "Netlify",
      description: "Application déployée sur Netlify avec CI/CD automatique à chaque push.",
      details: [
        "Déploiement continu Netlify",
        "Performance optimisée",
        "Accessible sur tous supports",
        "Build Vite ultra-rapide",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/writedin/3.webp" alt="WritedIn Déploiement" />,
    },
  ],
  review: REVIEW_MAP["iao"],
}

// ─── MIKE ─────────────────────────────────────────────────────────────────────
export const mike: ProjectData = {
  slug: "mike",
  hero: {
    title: "Mike — Analyse tes conversations WhatsApp par IA",
    client: "Projet Personnel",
    year: "2024",
    description:
      "Application web propulsée par l'IA (Groq/Mistral) permettant d'analyser des conversations de groupe WhatsApp et de générer, en français, des portraits de personnalité humoristiques et incisifs. L'interface évolue vers une identité moderne autour d'une palette Signal Violet et Mist Gray.",
    categories: ["React", "Groq", "Mistral", "IA", "Web App"],
    link: "https://quepensemike.netlify.app",
  },
  beforeAfter: {
    heroBefore: mikeCover,
    heroBeforeMobile: mikeCover,
    beforeAltText: "Mike - Interface d'analyse",
    beforeMobileAltText: "Mike - Vue mobile",
    afterAltText: "Mike - Résultat d'analyse",
  },
  results: [
    {
      title: "Analyse IA",
      description: "Portraits générés automatiquement",
      percentageIncrease: 100,
      chart: <TrafficBarChart startValue={0} endValue={100} />,
      dataSource: "Groq / Mistral API",
    },
    {
      title: "Précision",
      description: "Analyse des patterns conversationnels",
      percentageIncrease: 88,
      chart: <RadialProgressRing percentage={88} />,
      dataSource: "Export WhatsApp parsé",
    },
    {
      title: "UX",
      description: "Expérience ludique et originale",
      percentageIncrease: 92,
      chart: <LineChart />,
      dataSource: "Retours utilisateurs",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Parsing WhatsApp",
      subtitle: "Extraction des données",
      description: "L'utilisateur importe son export de chat WhatsApp. Le système parse le fichier et extrait les messages, auteurs et fréquences.",
      details: [
        "Import de fichier .txt WhatsApp",
        "Parser custom en JavaScript",
        "Extraction des participants",
        "Analyse des fréquences",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/mike/1.webp" alt="Mike Parsing" />,
    },
    {
      id: 2,
      title: "Génération IA",
      subtitle: "Groq + Mistral",
      description: "Les données extraites sont envoyées à l'API Groq/Mistral avec des prompts ciblés pour générer des portraits humoristiques.",
      details: [
        "API Groq (Mistral LLM)",
        "Prompts engineering en français",
        "Portraits humoristiques générés",
        "Personnalité déduite des patterns",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/mike/2.webp" alt="Mike IA" />,
    },
    {
      id: 3,
      title: "Interface & Design",
      subtitle: "Signal Violet & Mist Gray",
      description: "Refonte visuelle en cours vers une identité moderne en rupture avec le style néomorphique initial.",
      details: [
        "Palette Signal Violet + Mist Gray",
        "Design moderne et épuré",
        "Animations fluides",
        "Mobile-first",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/mike/3.webp" alt="Mike Design" />,
    },
  ],
  review: REVIEW_MAP["automedics"],
}

// ─── OKAZ ─────────────────────────────────────────────────────────────────────
export const okaz: ProjectData = {
  slug: "okaz",
  hero: {
    title: "Okaz — App de covoiturage avec géolocalisation temps réel",
    client: "Projet Personnel",
    year: "2024",
    description:
      "Application mobile de covoiturage développée avec React Native et Expo, intégrant Mapbox pour la cartographie et le géopositionnement en temps réel. Design glassmorphisme avec typographie Outfit et vert signature. Illustre une maîtrise des problématiques de géolocalisation et de mise en relation en temps réel.",
    categories: ["React Native", "Expo", "Mapbox", "Géolocalisation", "Mobile"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: {
    heroBefore: okazCover,
    heroBeforeMobile: okazCover,
    beforeAltText: "Okaz - Carte principale",
    beforeMobileAltText: "Okaz - Vue mobile",
    afterAltText: "Okaz - Recherche de trajet",
  },
  results: [
    {
      title: "Géolocalisation",
      description: "Temps réel avec Mapbox",
      percentageIncrease: 100,
      chart: <TrafficBarChart startValue={0} endValue={100} />,
      dataSource: "Mapbox SDK React Native",
    },
    {
      title: "UX Mobile",
      description: "Navigation fluide glassmorphisme",
      percentageIncrease: 92,
      chart: <RadialProgressRing percentage={92} />,
      dataSource: "Design system custom",
    },
    {
      title: "Mise en relation",
      description: "Trajets partagés en temps réel",
      percentageIncrease: 88,
      chart: <LineChart />,
      dataSource: "Supabase Realtime",
    },
  ],
  phases: [
    {
      id: 1,
      title: "Cartographie Mapbox",
      subtitle: "Géolocalisation temps réel",
      description: "Intégration de Mapbox pour afficher la carte, géolocaliser l'utilisateur et tracer les trajets en temps réel.",
      details: [
        "Mapbox SDK pour React Native",
        "Géolocalisation continue",
        "Tracé de trajets sur la carte",
        "Recherche de destinations",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/okaz/1.webp" alt="Okaz Mapbox" />,
    },
    {
      id: 2,
      title: "Mise en relation",
      subtitle: "Conducteur / Passager",
      description: "Système permettant aux conducteurs de proposer des trajets et aux passagers de les rejoindre en temps réel.",
      details: [
        "Création et recherche de trajets",
        "Matching conducteur/passager",
        "Notifications en temps réel",
        "Chat intégré",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/okaz/2.webp" alt="Okaz Mise en relation" />,
    },
    {
      id: 3,
      title: "Design Glassmorphisme",
      subtitle: "Vert signature + Outfit",
      description: "Identité visuelle moderne avec effets glassmorphisme, palette vert signature et typographie Outfit.",
      details: [
        "Effets glassmorphisme natifs",
        "Palette vert signature",
        "Typographie Outfit",
        "Animations fluides",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/okaz/3.webp" alt="Okaz Design" />,
    },
  ],
  review: REVIEW_MAP["bespoke"],
}

// Legacy exports (kept for existing pages that import them)
export const bespoke = lotusbusiness
export const automedicsKirkland = writedin
export const iao = mike
