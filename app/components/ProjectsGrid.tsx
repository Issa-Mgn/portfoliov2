"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import lotusbusinessPreview from "@/app/images/lotusbusiness.webp"
import writedInPreview from "@/app/images/writedin.webp"
import mikePreview from "@/app/images/mike.webp"
import okazPreview from "@/app/images/okaz.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

const ids = ["lotusbusiness", "writedin", "mike", "okaz"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    lotusbusiness: { rot: 5,  s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    writedin:      { rot: 9,  s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    mike:          { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    okaz:          { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] ?? { x: 0, y: 0 }
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: (base.x ?? 0) + t.dx!,
          y: (base.y ?? 0) + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true")
      } else {
        setReveal("false")
      }
    })
    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key="lotusbusiness"
          src={lotusbusinessPreview}
          alt="Lotus Business Preview"
          offset={offsets["lotusbusiness"]}
          gridId="lotusbusiness"
          color="#024EFC"
          type="Mobile App · Gestion commerciale"
          progress={progress}
          dataText="Voir le projet"
        />
        <AnimatedCard
          key="writedin"
          src={writedInPreview}
          alt="WritedIn Preview"
          offset={offsets["writedin"]}
          gridId="writedin"
          color="#0a4fa8"
          type="Web App · IA & Écriture"
          progress={progress}
          dataText="Voir le projet"
        />
        <AnimatedCard
          key="mike"
          src={mikePreview}
          alt="Mike Preview"
          offset={offsets["mike"]}
          gridId="mike"
          color="#4a1a8c"
          type="Web App · Analyse IA"
          progress={progress}
          dataText="Voir le projet"
        />
        <AnimatedCard
          key="okaz"
          src={okazPreview}
          alt="Okaz Preview"
          offset={offsets["okaz"]}
          gridId="okaz"
          color="#1a7a4a"
          type="Mobile App · Covoiturage"
          progress={progress}
          dataText="Voir le projet"
        />
      </div>
    </section>
  )
}
