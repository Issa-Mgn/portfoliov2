import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-issa-migan" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">À propos de</span>
          <br />
          Issa MIGAN
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Issa MIGAN" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px", amount: 0 }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Issa MIGAN
              </Text>
              <p className="text-sm text-gray-500">
                Développeur FullStack Web & Mobile · Cotonou, Bénin 🇧🇯
              </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">J&apos;ai toujours aimé comprendre comment les choses fonctionnent.</strong>
            </p>

            <p>
              Étudiant en 3e année ARI (Administration des Réseaux Informatiques) à l&apos;ENEAM-UAC, Cotonou — mais depuis un moment déjà, je construis des produits réels. Des apps mobiles, des backends robustes, des interfaces qui donnent envie de cliquer.
            </p>

            <p>
              J&apos;ai fait un stage de 8 semaines chez <strong className="text-slate-900">HoveYii</strong>, une startup béninoise à impact social, où j&apos;ai développé <strong className="text-slate-900">Lotus Business</strong> : une solution mobile offline-first de gestion commerciale pour les petits commerçants d&apos;Afrique de l&apos;Ouest (paiement mobile money, freemium, notifications push, emailing transactionnel).
            </p>

            <p>
              Mon approche : prototyper vite, livrer propre. Je construis des interfaces simples et lisibles, et des apps qui tiennent bien en production.
            </p>

            <p>
              En dehors du code, je m&apos;intéresse à la cybersécurité, je fais des labs réseau sur Cisco Packet Tracer, et j&apos;explore le pentest sur TryHackMe avec Kali NetHunter.
            </p>

            {/* signature */}
            <Image src={signature} alt="Issa MIGAN Signature" className="relative mt-6 -ml-3 h-32 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
