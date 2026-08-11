import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { Icon } from "./Icon"
import profilePhoto from "@/app/images/profile.webp"
import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

export const RecruiterContact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-gray-200">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center gap-8 rounded-2xl border border-gray-300 bg-white p-5.5 max-lg:text-center max-sm:px-1 sm:p-8"
        >
          <div className="flex w-fit items-center gap-3 p-2 max-lg:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-slate-200">
              <Image src={profilePhoto} alt="Issa MIGAN" fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-col items-start text-sm whitespace-nowrap text-slate-700">
              <h2 className="font-medium text-slate-900">Issa MIGAN</h2>
              <p className="text-slate-500">Développeur FullStack Web & Mobile</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 max-lg:items-center">
            <H3 className="text-center font-normal tracking-tight">
              <span>
                Vous avez un projet en tête ? <br />
              </span>
              <span className="text-slate-500">Parlons-en.</span>
            </H3>
            <Text className="max-w-2xl text-center text-balance">
              Je construis des apps web et mobiles rapides, accessibles et bien architecturées. Disponible en freelance / remote depuis Cotonou, Bénin.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:justify-center">
            <BlackButtonLink href={`mailto:${SITE_NAP.email}`}>
              <Mail height={18} width={18} className="h-[18px] w-[18px] text-white" />
              M&apos;écrire
            </BlackButtonLink>

            <WhiteButtonLink href={SITE_NAP.profiles.whatsapp}>
              <Icon name="github" height={18} width={18} className="h-[18px] w-[18px]" />
              WhatsApp
            </WhiteButtonLink>
            <WhiteButtonLink href={SITE_NAP.profiles.github}>
              <Icon name="github" height={18} width={18} className="h-[18px] w-[18px]" />
              GitHub
            </WhiteButtonLink>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
