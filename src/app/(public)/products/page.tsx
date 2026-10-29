import type { Metadata } from "next"
import Link from "next/link"
import { PackageSearch } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Explorar produtos — Ver-o-Preço",
  description:
    "Catálogo de produtos do Ver-o-Preço Marketplace no Pará. Anúncios organizados por município para comprar e vender perto de você.",
}

/**
 * Destino provisório do CTA "Explorar produtos" da landing page.
 *
 * O catálogo público pertence ao módulo de produtos (fase 4 do MVP). Enquanto
 * ele não existe, esta página evita um 404 e direciona o visitante para o
 * cadastro.
 */
export default function ProductsPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-4 py-16 text-center sm:py-20">
      <span
        aria-hidden="true"
        className="flex size-14 items-center justify-center rounded-2xl bg-primary-muted text-primary"
      >
        <PackageSearch className="size-7" />
      </span>

      <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Catálogo em construção
      </h1>

      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
        Estamos organizando os anúncios por município para você encontrar o que
        precisa perto de casa. Enquanto isso, já é possível anunciar o que está
        parado.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/register">Quero anunciar</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </main>
  )
}
