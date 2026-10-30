import { describe, expect, it } from "vitest"
import { fireEvent, render, screen, within } from "@testing-library/react"

import { MarketplaceHome } from "../components/home/marketplace-home"
import { RecentListings } from "../components/home/recent-listings"
import { mockProducts } from "../data/marketplace-content"

describe("MarketplaceHome", () => {
  it("apresenta busca, categorias e anúncios recentes", () => {
    render(<MarketplaceHome />)

    expect(
      screen.getByRole("search", { name: "Buscar produtos no marketplace" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("searchbox", { name: "O que você está procurando?" }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { level: 2, name: "Categorias populares" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /Celulares/i }),
    ).toHaveAttribute("href", "/products?category=celulares")

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Recém-publicados em Belém e Região",
      }),
    ).toBeInTheDocument()

    for (const product of mockProducts) {
      expect(
        screen.getByRole("heading", { level: 3, name: product.title }),
      ).toBeInTheDocument()
    }
  })

  it("permite favoritar um anúncio no card", () => {
    render(<MarketplaceHome />)

    const favoriteButton = screen.getByRole("button", {
      name: `Adicionar ${mockProducts[0].title} aos favoritos`,
    })

    expect(favoriteButton).toHaveAttribute("aria-pressed", "false")

    fireEvent.click(favoriteButton)

    expect(
      screen.getByRole("button", {
        name: `Remover ${mockProducts[0].title} dos favoritos`,
      }),
    ).toHaveAttribute("aria-pressed", "true")
  })

  it("exibe um estado vazio quando não há anúncios", () => {
    render(<RecentListings products={[]} />)

    const section = screen.getByRole("region", {
      name: "Recém-publicados em Belém e Região",
    })

    expect(
      within(section).getByRole("heading", {
        level: 3,
        name: "Nenhum anúncio por aqui ainda",
      }),
    ).toBeInTheDocument()
    expect(
      within(section).getByRole("link", { name: "Anunciar produto" }),
    ).toHaveAttribute("href", "/register")
  })
})
