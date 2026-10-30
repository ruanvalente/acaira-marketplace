import { HeroSection } from "./hero-section"
import { PopularCategories } from "./popular-categories"
import { RecentListings } from "./recent-listings"
import { SellCtaBanner } from "./sell-cta-banner"
import { TrustSection } from "./trust-section"

/**
 * Composição da home do marketplace.
 *
 * A página apenas monta as seções; cada uma é responsável pelo próprio conteúdo
 * e pela origem dos dados que recebe.
 */
export function MarketplaceHome() {
  return (
    <main className="flex-1">
      <HeroSection />

      <div className="mx-auto w-full max-w-[1320px] space-y-14 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <PopularCategories />
        <RecentListings />
        <SellCtaBanner />
        <TrustSection />
      </div>
    </main>
  )
}
