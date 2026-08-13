import { Metadata } from "next"

const PORTFOLIO_URL = "https://portfoliov2-two-henna.vercel.app/"
const CREDIT_PATH = "/serbyte-dev-credit"

export const metadata: Metadata = {
  title: "Portfolio by Issa MIGAN",
  description: "Portfolio développé par Issa MIGAN.",
  alternates: { canonical: CREDIT_PATH },
}

export default function SerbyteDevCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Portfolio</p>
        <h1 className="text-2xl font-semibold">Portfolio — Issa MIGAN</h1>
        <p className="text-base text-gray-700">Construit avec Next.js, React, Tailwind CSS v4 et des composants Zero-UI.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a href={PORTFOLIO_URL} className="underline underline-offset-4">
            Retour au portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a href="https://github.com/Issa-Mgn" className="underline underline-offset-4">
            GitHub
          </a>
        </div>
      </div>
    </main>
  )
}
