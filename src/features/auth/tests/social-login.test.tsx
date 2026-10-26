import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { SocialLogin } from "../components/social-login"

describe("SocialLogin", () => {
  it("informa indisponibilidade sem simular uma sessão", async () => {
    render(<SocialLogin />)

    fireEvent.click(screen.getByRole("button", { name: "Google" }))

    expect(
      await screen.findByText("O login com Google ainda não está disponível.")
    ).toBeInTheDocument()
  })

  it("bloqueia os demais provedores enquanto um está carregando", async () => {
    render(<SocialLogin />)

    fireEvent.click(screen.getByRole("button", { name: "Google" }))

    expect(screen.getByRole("button", { name: "Gov.br" })).toBeDisabled()

    await screen.findByText(
      "O login com Google ainda não está disponível."
    )
  })
})
