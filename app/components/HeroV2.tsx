import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { CallToActionButton } from "./ui/CallToActionButton"
import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/app/utils/lazy-ui"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.2, 0.65, 0.3, 0.9] as const },
})

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">

          <MotionSpan
            {...fadeUp(0.1)}
            className="z-2 inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg"
          >
            <ActivityDot />
            Cotonou, Bénin 🇧🇯
          </MotionSpan>

          <MotionH1
            {...fadeUp(0.2)}
            className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Issa MIGAN
            <br />
            <span className="text-slate-700">Portfolio</span>
          </MotionH1>

          <MotionP {...fadeUp(0.35)} className="max-w-xs text-sm leading-snug tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base">
            <strong className="font-semibold text-slate-900">Je transforme des idées en produits simples qui tiennent en prod.</strong> Développeur FullStack Web & Mobile, disponible en{" "}
            <span className="text-nowrap text-slate-900 font-medium">freelance / remote</span>
          </MotionP>

          <MotionDiv {...fadeUp(0.5)}>
            <CallToActionButton />
          </MotionDiv>
        </div>

        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
