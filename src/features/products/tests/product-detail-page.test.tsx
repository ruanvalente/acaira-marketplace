import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import ProductDetailPage from "@/app/(public)/products/[id]/page"
import { mockProducts } from "../data/marketplace-content"

describe("ProductDetailPage", () => {
  it("renderiza o anúncio correspondente ao id", async () => {
    const product = mockProducts[0]

    render(
      await ProductDetailPage({
        params: Promise.resolve({ id: product.id }),
      }),
    )

    expect(
      screen.getByRole("heading", { level: 1, name: product.title }),
    ).toBeInTheDocument()
    expect(screen.getByText("R$ 4.500")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Voltar para o início" }),
    ).toHaveAttribute("href", "/")
  })
})
