import { StaticImageData } from "next/image"
import { Phase } from "../components/ProjectSection/ApproachSection"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"

import lotusbusinessCover from "@/app/images/lotusbusiness.webp"
import writedInCover from "@/app/images/writedin.webp"
import mikeCover from "@/app/images/mike.webp"
import okazCover from "@/app/images/okaz.webp"
import getcommandCover from "@/app/images/getcommand.webp"
import lefocusCover from "@/app/images/lefocus.webp"
import generatemycvCover from "@/app/images/generatemycv.webp"
import educmeCover from "@/app/images/educme.webp"
import connectCover from "@/app/images/connect.webp"
import shopeatCover from "@/app/images/shop-eat.webp"
import vitiligoCover from "@/app/images/vitiligocommunity.webp"
import bodybloomCover from "@/app/images/bodybloom.webp"
import docfusionCover from "@/app/images/docfusion.webp"
import youandmeCover from "@/app/images/youandme.webp"
import todolistCover from "@/app/images/todolist.webp"
import emilienCover from "@/app/images/emilien.webp"
import marketplaceCover from "@/app/images/marketplace.webp"
import igliveCover from "@/app/images/iglive.webp"

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

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const defaultReview = REVIEW_MAP["bespoke"]

function makeResults(a: string, b: string, c: string, pa: number, pb: number, pc: number): AnalyticCardProps[] {
  return [
    { title: a, description: "", percentageIncrease: pa, chart: <TrafficBarChart startValue={0} endValue={pa} />, dataSource: "" },
    { title: b, description: "", percentageIncrease: pb, chart: <RadialProgressRing percentage={pb} />, dataSource: "" },
    { title: c, description: "", percentageIncrease: pc, chart: <LineChart />, dataSource: "" },
  ]
}

function makePhases(slug: string, p1: [string,string,string], p2: [string,string,string], p3: [string,string,string]): Phase[] {
  return [
    { id:1, title:p1[0], subtitle:p1[1], description:p1[2], details:[], icon:"/assets/design-black.webp",  feature:<ApproachTabsImage src={`/assets/${slug}/1.webp`} alt={`${slug} phase 1`} /> },
    { id:2, title:p2[0], subtitle:p2[1], description:p2[2], details:[], icon:"/assets/tool-black.webp",    feature:<ApproachTabsImage src={`/assets/${slug}/2.webp`} alt={`${slug} phase 2`} /> },
    { id:3, title:p3[0], subtitle:p3[1], description:p3[2], details:[], icon:"/assets/notepad-black.webp", feature:<ApproachTabsImage src={`/assets/${slug}/3.webp`} alt={`${slug} phase 3`} /> },
  ]
}

// ─── LOTUS BUSINESS ───────────────────────────────────────────────────────────
export const lotusbusiness: ProjectData = {
  slug: "lotusbusiness",
  hero: {
    title: "Lotus Business — Gestion commerciale offline-first",
    client: "HoveYii (Stage)",
    year: "2024",
    description: "Application mobile de gestion commerciale développée en React Native/Expo avec un backend Node.js, Express et Prisma, conçue pour les petits commerçants béninois. Architecture offline-first : toutes les opérations (ventes, stock, factures) sont exécutées localement via SQLite. Fonctionnalités : impression de reçus Bluetooth, authentification par clé de licence, vitrine marchande automatique et génération de documents comptables assistée par IA. Paiement mobile via KKiaPay, deux formules Free et Premium.",
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
  results: makeResults("Offline-First", "Mobile Money", "Freemium", 100, 90, 80),
  phases: makePhases("lotusbusiness",
    ["Architecture offline", "SQLite + Sync différée", "L'app fonctionne entièrement hors ligne. La synchronisation avec Supabase se déclenche automatiquement au retour de la connexion."],
    ["Licences & Freemium", "Clé d'activation unique", "Système freemium avec clés générées côté backend. Les fonctionnalités premium se déverrouillent après paiement mobile money."],
    ["Paiement KKiaPay", "MTN & Moov Mobile Money", "Intégration KKiaPay pour paiements mobile money. Webhooks backend pour confirmer les transactions, reçus Brevo et impression Bluetooth."],
  ),
  review: defaultReview,
}

// ─── WRITEDIN ─────────────────────────────────────────────────────────────────
export const writedin: ProjectData = {
  slug: "writedin",
  hero: {
    title: "WritedIn — Créer du contenu social avec l'IA",
    client: "Projet Personnel",
    year: "2024",
    description: "Plateforme web conçue pour simplifier et booster la création de contenus sur les réseaux sociaux grâce à l'IA. Génération de publications optimisées, adaptation du ton selon le réseau ciblé, aide aux créateurs et entrepreneurs pour maintenir une présence active en ligne sans y passer des heures.",
    categories: ["React", "IA", "Netlify", "Web App"],
    link: "https://writedin.netlify.app",
  },
  beforeAfter: { heroBefore: writedInCover, heroBeforeMobile: writedInCover, beforeAltText: "WritedIn - Interface", beforeMobileAltText: "WritedIn - Mobile", afterAltText: "WritedIn - Génération" },
  results: makeResults("Génération IA", "Multi-réseau", "Gain de temps", 95, 90, 85),
  phases: makePhases("writedin",
    ["Interface de création", "UX simple et directe", "Formulaire guidé : l'utilisateur décrit son idée, choisit son réseau et obtient un post prêt à publier."],
    ["Intégration IA", "Prompts optimisés", "Prompts engineering par réseau pour un contenu adapté au ton et aux codes de chaque plateforme."],
    ["Déploiement", "Netlify CI/CD", "Application déployée sur Netlify avec CI/CD automatique à chaque push."],
  ),
  review: REVIEW_MAP["iao"],
}

// ─── MIKE ─────────────────────────────────────────────────────────────────────
export const mike: ProjectData = {
  slug: "mike",
  hero: {
    title: "Mike — Analyse tes conversations WhatsApp par IA",
    client: "Projet Personnel",
    year: "2024",
    description: "Application web propulsée par l'IA (Groq/Mistral) permettant d'analyser des conversations de groupe WhatsApp et de générer, en français, des portraits de personnalité humoristiques et incisifs. L'interface évolue vers une identité moderne : palette Signal Violet et Mist Gray.",
    categories: ["React", "Groq", "Mistral", "IA", "Web App"],
    link: "https://quepensemike.netlify.app",
  },
  beforeAfter: { heroBefore: mikeCover, heroBeforeMobile: mikeCover, beforeAltText: "Mike - Interface", beforeMobileAltText: "Mike - Mobile", afterAltText: "Mike - Résultat" },
  results: makeResults("Analyse IA", "Précision", "UX", 100, 88, 92),
  phases: makePhases("mike",
    ["Parsing WhatsApp", "Extraction des données", "Import du fichier .txt WhatsApp. Parser custom qui extrait les messages, auteurs et fréquences d'écriture."],
    ["Génération IA", "Groq + Mistral", "Les données sont envoyées à l'API Groq/Mistral avec des prompts ciblés pour générer des portraits humoristiques en français."],
    ["Design", "Signal Violet & Mist Gray", "Refonte visuelle vers une identité moderne en rupture avec le style néomorphique initial."],
  ),
  review: REVIEW_MAP["automedics"],
}

// ─── OKAZ ─────────────────────────────────────────────────────────────────────
export const okaz: ProjectData = {
  slug: "okaz",
  hero: {
    title: "Okaz — App de covoiturage avec géolocalisation temps réel",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile de covoiturage développée avec React Native et Expo, intégrant Mapbox pour la cartographie et le géopositionnement en temps réel. Design glassmorphisme avec typographie Outfit et vert signature. Maîtrise des problématiques de géolocalisation et de mise en relation en temps réel.",
    categories: ["React Native", "Expo", "Mapbox", "Géolocalisation", "Mobile"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: okazCover, heroBeforeMobile: okazCover, beforeAltText: "Okaz - Carte", beforeMobileAltText: "Okaz - Mobile", afterAltText: "Okaz - Trajet" },
  results: makeResults("Géolocalisation", "UX Mobile", "Mise en relation", 100, 92, 88),
  phases: makePhases("okaz",
    ["Cartographie Mapbox", "Géolocalisation temps réel", "Intégration Mapbox pour afficher la carte, géolocaliser l'utilisateur et tracer les trajets en temps réel."],
    ["Mise en relation", "Conducteur / Passager", "Système de matching permettant aux conducteurs de proposer des trajets et aux passagers de les rejoindre."],
    ["Design Glassmorphisme", "Vert signature + Outfit", "Identité visuelle avec effets glassmorphisme, palette vert signature et typographie Outfit."],
  ),
  review: defaultReview,
}

// ─── GETCOMMAND ───────────────────────────────────────────────────────────────
export const getcommand: ProjectData = {
  slug: "getcommand",
  hero: {
    title: "GetCommand — Outil CLI & automatisation",
    client: "Projet Personnel",
    year: "2024",
    description: "Projet orienté développement et automatisation, structuré autour de scripts (Python et JavaScript) et d'interfaces en ligne de commande. Conçu pour exécuter des commandes techniques, rationaliser la gestion des tâches dans le terminal et fluidifier le flux de travail quotidien pour gagner en efficacité lors des phases de développement.",
    categories: ["Python", "JavaScript", "CLI", "Automatisation", "Dev Tools"],
    link: "https://getcommand.netlify.app",
  },
  beforeAfter: { heroBefore: getcommandCover, heroBeforeMobile: getcommandCover, beforeAltText: "GetCommand - Interface", beforeMobileAltText: "GetCommand - Mobile", afterAltText: "GetCommand - Résultat" },
  results: makeResults("Productivité", "Scripts", "Automatisation", 90, 85, 88),
  phases: makePhases("getcommand",
    ["Interface CLI", "Commandes en ligne", "Interface en ligne de commande simple pour exécuter des scripts et automatiser des tâches répétitives."],
    ["Scripts Python/JS", "Automatisation", "Ensemble de scripts Python et JavaScript pour rationaliser les flux de développement."],
    ["Déploiement", "Netlify", "Interface web déployée sur Netlify pour accéder aux commandes depuis un navigateur."],
  ),
  review: defaultReview,
}

// ─── LE FOCUS ─────────────────────────────────────────────────────────────────
export const lefocus: ProjectData = {
  slug: "lefocus",
  hero: {
    title: "Le Focus — Site d'actualités béninois",
    client: "Projet Personnel",
    year: "2024",
    description: "Site d'actualités béninois développé avec React et Vite, hébergé sur Netlify, avec un backend Express et Supabase déployé sur Render. Indexation complète sur Google Search Console et sitemap généré dynamiquement pour garantir la découverte rapide de chaque nouvel article par les moteurs de recherche.",
    categories: ["React", "Vite", "Express", "Supabase", "PostgreSQL", "SEO"],
    link: "https://lefocus.netlify.app",
  },
  beforeAfter: { heroBefore: lefocusCover, heroBeforeMobile: lefocusCover, beforeAltText: "Le Focus - Accueil", beforeMobileAltText: "Le Focus - Mobile", afterAltText: "Le Focus - Article" },
  results: makeResults("Performance", "SEO", "Articles", 95, 90, 100),
  phases: makePhases("lefocus",
    ["Frontend React/Vite", "Interface de lecture rapide", "React + Vite pour un build ultra-rapide. Catégories d'articles, moteur de recherche et navigation fluide."],
    ["Backend Express", "API REST + Supabase", "Node.js/Express avec Supabase PostgreSQL. API RESTful pour la gestion des articles et catégories."],
    ["SEO & Sitemap", "Google Search Console", "Stratégie SEO aboutie avec indexation complète et sitemap dynamique pour chaque nouvel article."],
  ),
  review: defaultReview,
}

// ─── GENERATEMYCV ─────────────────────────────────────────────────────────────
export const generatemycv: ProjectData = {
  slug: "generatemycv",
  hero: {
    title: "GenerateMyCV — Créez votre CV professionnel en ligne",
    client: "Projet de Groupe",
    year: "2024",
    description: "Application web développée en React et Vite permettant aux utilisateurs de créer facilement des curriculum vitae professionnels avec export direct au format PDF. Interface intuitive guidant l'utilisateur à travers les différentes sections du CV, avec une génération de document final soignée et prête à l'emploi.",
    categories: ["React", "Vite", "PDF", "Netlify", "Projet de Groupe"],
    link: "https://generatemycv.netlify.app",
  },
  beforeAfter: { heroBefore: generatemycvCover, heroBeforeMobile: generatemycvCover, beforeAltText: "GenerateMyCV - Formulaire", beforeMobileAltText: "GenerateMyCV - Mobile", afterAltText: "GenerateMyCV - CV généré" },
  results: makeResults("Export PDF", "UX", "Performance", 100, 92, 88),
  phases: makePhases("generatemycv",
    ["Formulaire de CV", "Sections guidées", "Interface guidant l'utilisateur section par section : infos personnelles, expériences, compétences, formations."],
    ["Génération PDF", "Export direct", "Génération automatique d'un CV propre et professionnel au format PDF, prêt à envoyer."],
    ["Déploiement", "Netlify CI/CD", "Déployé sur Netlify dans le cadre d'un projet de groupe avec workflow collaboratif."],
  ),
  review: defaultReview,
}

// ─── EDUCME ───────────────────────────────────────────────────────────────────
export const educme: ProjectData = {
  slug: "educme",
  hero: {
    title: "EducMe — Plateforme d'épreuves et ressources académiques",
    client: "Projet Personnel",
    year: "2024",
    description: "Plateforme web développée en React.js dédiée à la recherche et au téléchargement d'épreuves d'examens. Conçue pour les étudiants souvent confrontés à la difficulté de trouver des ressources académiques organisées et fiables. Centralise les documents dans une interface simple facilitant la révision et la préparation aux examens.",
    categories: ["React.js", "Education", "Web App"],
    link: "https://educ-me.netlify.app",
  },
  beforeAfter: { heroBefore: educmeCover, heroBeforeMobile: educmeCover, beforeAltText: "EducMe - Accueil", beforeMobileAltText: "EducMe - Mobile", afterAltText: "EducMe - Épreuves" },
  results: makeResults("Ressources", "UX", "Accessibilité", 100, 88, 95),
  phases: makePhases("educme",
    ["Catalogue d'épreuves", "Recherche & Filtres", "Interface de recherche par matière, niveau et année pour trouver rapidement les épreuves pertinentes."],
    ["Téléchargement", "PDF direct", "Accès et téléchargement direct des épreuves en PDF sans inscription requise."],
    ["Déploiement", "Netlify", "Application déployée sur Netlify, accessible partout depuis un navigateur."],
  ),
  review: defaultReview,
}

// ─── CONNECT ──────────────────────────────────────────────────────────────────
export const connect: ProjectData = {
  slug: "connect",
  hero: {
    title: "Connect — Génération de requêtes SQL par langage naturel",
    client: "Projet Personnel",
    year: "2024",
    description: "Outil web innovant permettant de générer automatiquement des requêtes SQL à partir de commandes en langage naturel, grâce aux API Groq et Mistral. Développé en React.js avec une interface au thème sombre rehaussé d'accents orange. Rend l'écriture SQL accessible même aux non-initiés.",
    categories: ["React.js", "Groq", "Mistral", "IA", "SQL", "Dark Theme"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: connectCover, heroBeforeMobile: connectCover, beforeAltText: "Connect - Interface", beforeMobileAltText: "Connect - Mobile", afterAltText: "Connect - SQL généré" },
  results: makeResults("Génération SQL", "Précision IA", "Accessibilité", 95, 90, 100),
  phases: makePhases("connect",
    ["Langage naturel", "Saisie intuitive", "L'utilisateur décrit en français ce qu'il veut faire. L'IA traduit automatiquement en requête SQL."],
    ["IA Groq/Mistral", "Génération précise", "API Groq/Mistral pour générer des requêtes SQL précises et optimisées à partir de descriptions textuelles."],
    ["Interface Dark", "Accents orange", "Design sombre avec accents orange, pensé pour les développeurs et DBA qui travaillent en environnement sombre."],
  ),
  review: defaultReview,
}

// ─── SHOP-EAT ─────────────────────────────────────────────────────────────────
export const shopeat: ProjectData = {
  slug: "shopeat",
  hero: {
    title: "Shop-eat — Commande de repas en ligne",
    client: "Projet Personnel",
    year: "2023",
    description: "Site web de restauration en ligne développé en HTML, CSS et JavaScript, proposant des plats à petits prix dans une interface simple et directe. Permet de parcourir un menu, sélectionner des plats et passer commande. Démontre une solide maîtrise des fondamentaux du développement web sans framework.",
    categories: ["HTML", "CSS", "JavaScript", "E-commerce", "Food"],
    link: "https://shop-eat.netlify.app",
  },
  beforeAfter: { heroBefore: shopeatCover, heroBeforeMobile: shopeatCover, beforeAltText: "Shop-eat - Menu", beforeMobileAltText: "Shop-eat - Mobile", afterAltText: "Shop-eat - Commande" },
  results: makeResults("Performance", "UX", "Accessibilité", 90, 88, 92),
  phases: makePhases("shop-eat",
    ["Menu & Catalogue", "Navigation produits", "Interface de navigation dans le menu avec catégories, photos des plats et prix affichés clairement."],
    ["Panier & Commande", "Processus d'achat", "Sélection des plats, ajout au panier et processus de commande simple en quelques clics."],
    ["Fondamentaux web", "HTML/CSS/JS pur", "Projet sans framework démontrant la maîtrise des bases : DOM, événements, manipulation dynamique du panier."],
  ),
  review: defaultReview,
}

// ─── VITILIGOCOMMUNITY ────────────────────────────────────────────────────────
export const vitiligocommunity: ProjectData = {
  slug: "vitiligocommunity",
  hero: {
    title: "VitiligoCommunity — Espace d'échange et de soutien",
    client: "Projet Personnel",
    year: "2024",
    description: "Plateforme communautaire développée en React.js, conçue pour rassembler les personnes atteintes de vitiligo autour d'un espace d'échange, de soutien mutuel et de partage d'expériences. Illustre une sensibilité aux enjeux d'inclusion et de bien-être, en offrant un espace numérique sécurisant.",
    categories: ["React.js", "Communauté", "Web App", "Social"],
    link: "https://vitiligocommunity.netlify.app",
  },
  beforeAfter: { heroBefore: vitiligoCover, heroBeforeMobile: vitiligoCover, beforeAltText: "VitiligoCommunity - Accueil", beforeMobileAltText: "VitiligoCommunity - Mobile", afterAltText: "VitiligoCommunity - Forum" },
  results: makeResults("Communauté", "Engagement", "Accessibilité", 95, 88, 100),
  phases: makePhases("vitiligocommunity",
    ["Espace d'échange", "Forum & Posts", "Espace où les membres peuvent partager leurs expériences, poser des questions et s'entraider."],
    ["Profils membres", "Identité communautaire", "Profils personnalisés permettant aux membres de se présenter et de s'identifier au sein de la communauté."],
    ["Design inclusif", "Accessibilité & Bienveillance", "Design pensé pour un environnement sécurisant et bienveillant, avec une interface claire et accessible."],
  ),
  review: defaultReview,
}

// ─── BODYBLOOM ────────────────────────────────────────────────────────────────
export const bodybloom: ProjectData = {
  slug: "bodybloom",
  hero: {
    title: "BodyBloom — App fitness & suivi bien-être",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile de fitness développée en React Native, destinée à accompagner les utilisateurs dans le suivi de leurs objectifs sportifs et de bien-être au quotidien. Expérience mobile fluide pour organiser et suivre son parcours fitness.",
    categories: ["React Native", "Mobile", "Fitness", "Bien-être"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: bodybloomCover, heroBeforeMobile: bodybloomCover, beforeAltText: "BodyBloom - Dashboard", beforeMobileAltText: "BodyBloom - Mobile", afterAltText: "BodyBloom - Suivi" },
  results: makeResults("Suivi fitness", "UX Mobile", "Engagement", 92, 90, 85),
  phases: makePhases("bodybloom",
    ["Suivi objectifs", "Goals & Progress", "Définition et suivi d'objectifs sportifs personnalisés avec visualisation de la progression."],
    ["Entraînements", "Programmes & Séances", "Bibliothèque d'entraînements et programmes personnalisés selon le niveau et les objectifs."],
    ["UX Mobile", "React Native fluide", "Interface pensée pour une utilisation pendant l'entraînement : rapide, lisible et accessible."],
  ),
  review: defaultReview,
}

// ─── DOCFUSION ────────────────────────────────────────────────────────────────
export const docfusion: ProjectData = {
  slug: "docfusion",
  hero: {
    title: "DocFusion — Fusion de documents PDF sur mobile",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile développée en React Native permettant la fusion de documents PDF et d'autres formats directement depuis un smartphone. Répond à un besoin pratique de gestion documentaire mobile, en simplifiant une tâche technique généralement réservée aux outils de bureau.",
    categories: ["React Native", "Mobile", "PDF", "Gestion documentaire"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: docfusionCover, heroBeforeMobile: docfusionCover, beforeAltText: "DocFusion - Import", beforeMobileAltText: "DocFusion - Mobile", afterAltText: "DocFusion - Fusion" },
  results: makeResults("Fusion PDF", "Formats supportés", "UX Mobile", 100, 90, 88),
  phases: makePhases("docfusion",
    ["Import documents", "Sélection fichiers", "Sélection de plusieurs documents PDF ou autres formats depuis le stockage du téléphone."],
    ["Fusion", "Traitement local", "Fusion des documents sélectionnés en un seul fichier, traitement optimisé directement sur le mobile."],
    ["Export & Partage", "PDF final", "Export du document fusionné et partage direct via les apps natives (WhatsApp, email, Drive...)."],
  ),
  review: defaultReview,
}

// ─── YOUANDME ─────────────────────────────────────────────────────────────────
export const youandme: ProjectData = {
  slug: "youandme",
  hero: {
    title: "YouAndMe — App sociale mobile",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile développée avec React Native et Expo (SDK 57), intégrant une authentification sécurisée via Firebase et un backend construit sur Node.js et Supabase. Système de cache média inspiré de WhatsApp. Migration du système Google de expo-auth-session vers @react-native-google-signin/google-signin suite à l'évolution des standards OAuth 2.1.",
    categories: ["React Native", "Expo", "Firebase", "Supabase", "Node.js", "OAuth 2.1"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: youandmeCover, heroBeforeMobile: youandmeCover, beforeAltText: "YouAndMe - Feed", beforeMobileAltText: "YouAndMe - Mobile", afterAltText: "YouAndMe - Profil" },
  results: makeResults("Auth Firebase", "Supabase Realtime", "Performance", 100, 95, 90),
  phases: makePhases("youandme",
    ["Auth & Onboarding", "Firebase + Google Sign-In", "Authentification Firebase avec migration vers @react-native-google-signin pour OAuth 2.1."],
    ["Backend Supabase", "PostgreSQL + Realtime", "Backend Node.js/Supabase avec subscriptions temps réel et Row Level Security."],
    ["Cache Média", "Optimisation WhatsApp-like", "Système de cache média inspiré de WhatsApp pour un chargement rapide des contenus échangés."],
  ),
  review: defaultReview,
}

// ─── TODOLIST ─────────────────────────────────────────────────────────────────
export const todolist: ProjectData = {
  slug: "todolist",
  hero: {
    title: "ToDoList — Gestion de tâches mobile",
    client: "Projet Personnel",
    year: "2023",
    description: "Application mobile de gestion de tâches développée en React Native, offrant aux utilisateurs un outil simple et efficace pour organiser leur quotidien, planifier leurs activités et suivre l'avancement de leurs objectifs personnels ou professionnels.",
    categories: ["React Native", "Mobile", "Productivité"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: todolistCover, heroBeforeMobile: todolistCover, beforeAltText: "ToDoList - Liste", beforeMobileAltText: "ToDoList - Mobile", afterAltText: "ToDoList - Tâche complétée" },
  results: makeResults("Productivité", "UX Mobile", "Simplicité", 90, 95, 100),
  phases: makePhases("todolist",
    ["Création de tâches", "Ajout rapide", "Interface d'ajout de tâches rapide avec titre, description, priorité et date d'échéance."],
    ["Organisation", "Catégories & Priorités", "Organisation par catégories et niveaux de priorité pour une gestion efficace du quotidien."],
    ["Suivi progression", "Check & Archive", "Validation des tâches terminées et archivage pour suivre sa productivité dans le temps."],
  ),
  review: defaultReview,
}

// ─── EMILIEN ──────────────────────────────────────────────────────────────────
export const emilien: ProjectData = {
  slug: "emilien",
  hero: {
    title: "Emilien — Prise de notes mobile",
    client: "Projet Personnel",
    year: "2023",
    description: "Application mobile de gestion de notes conçue en React Native, permettant aux utilisateurs de rédiger, organiser et retrouver facilement leurs notes personnelles depuis leur smartphone, dans une interface pensée pour la rapidité et la simplicité d'usage.",
    categories: ["React Native", "Mobile", "Notes", "Productivité"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: emilienCover, heroBeforeMobile: emilienCover, beforeAltText: "Emilien - Notes", beforeMobileAltText: "Emilien - Mobile", afterAltText: "Emilien - Édition" },
  results: makeResults("Rapidité", "UX Mobile", "Simplicité", 95, 92, 100),
  phases: makePhases("emilien",
    ["Rédaction rapide", "Éditeur mobile", "Éditeur de notes optimisé pour mobile avec formatage simple et saisie rapide."],
    ["Organisation", "Dossiers & Tags", "Organisation des notes par dossiers et tags pour les retrouver facilement."],
    ["Recherche", "Full-text search", "Recherche plein texte dans toutes les notes pour accéder instantanément au contenu voulu."],
  ),
  review: defaultReview,
}

// ─── MARKETPLACE ──────────────────────────────────────────────────────────────
export const marketplace: ProjectData = {
  slug: "marketplace",
  hero: {
    title: "Marketplace — E-commerce mobile React Native",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile e-commerce développée en React Native, offrant une expérience d'achat en ligne fluide et intuitive. Couvre les fonctionnalités essentielles d'une plateforme marchande mobile, de la navigation catalogue jusqu'au processus de commande.",
    categories: ["React Native", "Mobile", "E-commerce"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: marketplaceCover, heroBeforeMobile: marketplaceCover, beforeAltText: "Marketplace - Catalogue", beforeMobileAltText: "Marketplace - Mobile", afterAltText: "Marketplace - Commande" },
  results: makeResults("Catalogue", "Conversion", "UX Mobile", 100, 88, 92),
  phases: makePhases("marketplace",
    ["Catalogue produits", "Navigation & Filtres", "Navigation fluide dans le catalogue avec filtres par catégorie, prix et disponibilité."],
    ["Panier & Checkout", "Processus d'achat", "Gestion du panier et processus de commande simplifié en quelques étapes."],
    ["UX E-commerce", "Conversion optimisée", "Interface pensée pour maximiser la conversion et le confort d'achat sur mobile."],
  ),
  review: defaultReview,
}

// ─── IG-LIVE ──────────────────────────────────────────────────────────────────
export const iglive: ProjectData = {
  slug: "iglive",
  hero: {
    title: "IG-Live — Mini réseau social universitaire ENEAM",
    client: "Projet Personnel",
    year: "2024",
    description: "Application mobile développée en React Native, Express et Supabase. Mini réseau social universitaire pour les étudiants de l'ENEAM (École Nationale d'Économie Appliquée et de Management). Espace de partage et d'échange dédié à la communauté estudiantine.",
    categories: ["React Native", "Express", "Supabase", "Mobile", "Social"],
    link: "https://github.com/Issa-Mgn",
  },
  beforeAfter: { heroBefore: igliveCover, heroBeforeMobile: igliveCover, beforeAltText: "IG-Live - Feed", beforeMobileAltText: "IG-Live - Mobile", afterAltText: "IG-Live - Post" },
  results: makeResults("Communauté ENEAM", "Temps réel", "UX Mobile", 100, 92, 90),
  phases: makePhases("iglive",
    ["Feed universitaire", "Posts & Partage", "Feed de publications dédié aux étudiants de l'ENEAM pour partager actualités, cours et événements."],
    ["Backend Supabase", "Realtime + Auth", "Backend Express/Supabase avec authentification et subscriptions temps réel pour le feed."],
    ["Communauté", "Identité ENEAM", "Application pensée pour les codes et besoins spécifiques de la communauté ENEAM."],
  ),
  review: defaultReview,
}

// ─── LEGACY EXPORTS ───────────────────────────────────────────────────────────
export const bespoke = lotusbusiness
export const automedicsKirkland = writedin
export const iao = mike
