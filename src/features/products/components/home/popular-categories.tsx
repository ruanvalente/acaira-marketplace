import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { popularCategories } from "../../data/marketplace-content"
import { categoryToneClasses } from "../../utils/category-tone"
import { formatListingCount } from "../../utils/format"
import { SectionHeader } from "./section-header"

/**
 * Atalhos para as categorias com mais anúncios no marketplace.
 */
export function PopularCategories() {
  return (
    <section
      id="categorias"
      aria-labelledby="categorias-title"
      className="scroll-mt-28"
    >
      <SectionHeader
        id="categorias-title"
        title="Categorias populares"
        description="Comece pelo que você procura ou explore as categorias com mais anúncios perto de você."
        action={
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Ver catálogo completo
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        }
      />

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
        {popularCategories.map((category) => {
          const Icon = category.icon

          return (
            <li key={category.id}>
              <Link
                href={category.href}
                className="group flex h-full flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-11 items-center justify-center rounded-xl transition-transform duration-200 motion-safe:group-hover:scale-105 ${categoryToneClasses[category.tone]}`}
                >
                  <Icon className="size-5" />
                </span>

                <span className="space-y-0.5">
                  <span className="block text-sm leading-snug font-semibold text-foreground">
                    {category.name}
                  </span>
                  <span className="block text-label-sm text-muted-foreground">
                    {formatListingCount(category.count)}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
