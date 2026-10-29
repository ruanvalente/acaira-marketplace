import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Home from "@/app/(landing)/page"

describe("Home", () => {
  it("renderiza a landing page com um único título principal", () => {
    render(<Home />)

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
  })
})
