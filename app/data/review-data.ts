import { StaticImageData } from "next/image"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "entitled",
    img: "/client-photos/yassine-rhamani-profile-photo.jpeg",
    name: "Témoignage",
    title: "À venir",
    quote:
      "Les témoignages de clients seront ajoutés ici prochainement.",
  },
  {
    id: "herba-naturals",
    img: "/brands/herba-naturals-logo.png",
    name: "Témoignage",
    title: "À venir",
    quote:
      "Les témoignages de clients seront ajoutés ici prochainement.",
  },
  {
    id: "vets-choice",
    img: "/brands/vets-choice-insurance-logo.png",
    name: "Témoignage",
    title: "À venir",
    quote:
      "Les témoignages de clients seront ajoutés ici prochainement.",
  },
  {
    id: "bespoke",
    img: "/client-photos/bespoke-tint-owner-kris-256.webp",
    name: "Témoignage",
    title: "À venir",
    quote:
      "Les témoignages de clients seront ajoutés ici prochainement.",
  },
  {
    id: "iao",
    img: "/client-photos/aleksandr-butowicz-iron-oak-profile-photo.jpg",
    name: "Témoignage",
    title: "À venir",
    quote:
      "Les témoignages de clients seront ajoutés ici prochainement.",
  },
  {
    id: "automedics",
    name: "Témoignage",
    title: "À venir",
    quote: "Les témoignages de clients seront ajoutés ici prochainement.",
    img: "/assets/automedics-logo-optimized.png",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}
