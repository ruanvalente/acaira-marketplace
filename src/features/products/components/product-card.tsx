import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { FavoriteButton } from "@/features/favorites/components/favorite-button"
import { cn } from "@/lib/utils"

import { MARKETPLACE_REFERENCE_DATE } from "../data/marketplace-content"
import type { Product } from "../types/marketplace.types"
import { formatPrice, formatRelativeTime } from "../utils/format"

type ProductCardProps = {
  product: Product
  className?: string
}

/**
 * Card de produto do catálogo público.
 *
 * Recebe apenas dados de domínio. Favoritar é composto via `FavoriteButton`,
 * mantendo a responsabilidade de persistência fora do card.
 */
export function ProductCard({ product, className }: ProductCardProps) {
  const productHref = `/products/${product.id}`
  const publishedLabel = formatRelativeTime(
    product.publishedAt,
    MARKETPLACE_REFERENCE_DATE,
  )

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
        />

        <Link
          href={productHref}
          aria-label={`Ver detalhes de ${product.title}`}
          className="absolute inset-0 z-[1] rounded-t-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/70"
        />

        <Badge
          variant="outline"
          className="absolute top-3 left-3 z-10 border-transparent bg-card/95 px-2.5 py-1 text-badge-label text-foreground shadow-card backdrop-blur-sm"
        >
          {product.condition}
        </Badge>

        <FavoriteButton
          productId={product.id}
          productTitle={product.title}
          className="absolute top-2 right-2 z-10"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-price-display text-primary">
          {formatPrice(product.price)}
        </p>

        <h3 className="line-clamp-2 text-headline-sm leading-snug font-semibold text-foreground">
          <Link
            href={productHref}
            className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {product.title}
          </Link>
        </h3>

        <p className="mt-1 flex min-w-0 items-center gap-1.5 text-label-sm text-muted-foreground">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">{product.location}</span>
          <span aria-hidden="true" className="shrink-0 text-border">
            •
          </span>
          <span className="truncate">{product.seller}</span>
        </p>

        <p className="mt-auto pt-2 text-label-sm text-muted-foreground">
          {publishedLabel}
        </p>
      </div>
    </article>
  )
}
