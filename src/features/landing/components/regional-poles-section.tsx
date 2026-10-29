import { regionalPoles } from "../data/landing-content"

import { PoleCard } from "./shared/pole-card"
import { Section } from "./shared/section"
import { SectionHeader } from "./shared/section-header"

export function RegionalPolesSection() {
  return (
    <Section id="polos" labelledBy="regional-poles-title">
      <SectionHeader
        id="regional-poles-title"
        eyebrow="Polos regionais"
        title="Polos conectados no Estado do Pará"
        description="De Belém ao oeste do estado, o Ver-o-Preço cresce com quem movimenta o comércio de bairro. Estes são os polos ativos e em expansão."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {regionalPoles.map((pole) => (
          <PoleCard key={pole.name} pole={pole} />
        ))}
      </div>

      <p className="mt-8 text-center text-label-sm text-muted-foreground">
        Contagens ilustrativas durante a fase de implantação do marketplace.
      </p>
    </Section>
  )
}
