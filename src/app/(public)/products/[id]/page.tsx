import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MARKETPLACE_REFERENCE_DATE,
  mockProducts,
} from "@/features/products/data/marketplace-content"
import {
  formatPrice,
  formatRelativeTime,
} from "@/features/products/utils/format"

type ProductDetailPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return mockProducts.map((product) => ({ id: product.id }))
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const product = mockProducts.find((item) => item.id === id)

  if (!product) {
    return { title: "Anúncio não encontrado — Ver-o-Preço" }
  }

  return {
    title: `${product.title} — Ver-o-Preço`,
    description: `${product.title} por ${formatPrice(product.price)} em ${product.location}. Negocie pelo chat do Ver-o-Preço.`,
    openGraph: {
      title: `${product.title} — Ver-o-Preço`,
      description: `${product.title} por ${formatPrice(product.price)} em ${product.location}.`,
      locale: "pt_BR",
      siteName: "Ver-o-Preço",
      type: "website",
    },
  }
}

/**
 * Página de detalhe do anúncio.
 *
 * Enquanto o módulo de catálogo não está integrado ao Supabase, a rota usa os
 * mocks da home para evitar que os cards levem a uma página inexistente. A
 * composição completa do detalhe entra na fase do catálogo.
 */
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params
  const product = mockProducts.find((item) => item.id === id)

  if (!product) {
    notFound()
  }

  const publishedLabel = formatRelativeTime(
    product.publishedAt,
    MARKETPLACE_REFERENCE_DATE,
  )

  return (
    <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Voltar para o início
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <Badge
            variant="outline"
            className="border-transparent bg-card px-2.5 py-1 text-badge-label text-foreground shadow-card"
          >
            {product.condition}
          </Badge>

          <h1 className="mt-4 text-balance text-headline-lg-mobile font-bold tracking-tight text-foreground sm:text-headline-lg">
            {product.title}
          </h1>

          <p className="mt-4 text-price-display text-primary">
            {formatPrice(product.price)}
          </p>

          <p className="mt-4 flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4 shrink-0" />
            <span className="truncate">{product.location}</span>
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {product.seller} · {publishedLabel}
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-6">
            <h2 className="text-headline-sm font-semibold text-foreground">
              Detalhes completos em breve
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Estamos preparando esta página com todas as informações do
              anúncio. Enquanto isso, continue explorando os anúncios da sua
              região.
            </p>
            <Button asChild className="mt-5">
              <Link href="/">Continuar explorando</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
