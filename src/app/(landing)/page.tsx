import type { Metadata } from "next"

import { LandingPage } from "@/features/landing/components/landing-page"

export const metadata: Metadata = {
  title: "Ver-o-Preço — Compre e venda perto de você no Pará",
  description:
    "Marketplace regional do Pará para comprar e vender sem taxas e sem burocracia. Anuncie em minutos, converse pelo chat seguro e negocie com quem está perto de você.",
  openGraph: {
    title: "Ver-o-Preço — Compre e venda perto de você no Pará",
    description:
      "Marketplace regional do Pará com taxa zero, chat seguro e comércio de vizinhança.",
    locale: "pt_BR",
    siteName: "Ver-o-Preço",
    type: "website",
  },
}

export default function Home() {
  return <LandingPage />
}
