import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  searchParams: new URLSearchParams(),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: () => mocks.searchParams,
}));

vi.mock("@/features/auth/services/auth.actions", () => ({
  loginAction: vi.fn(),
}));

import { loginAction } from "@/features/auth/services/auth.actions";

import { LoginForm } from "../components/login-form";

function fillCredentials(
  email = "pessoa@exemplo.com",
  password = "senha-segura"
) {
  fireEvent.change(screen.getByLabelText("E-mail"), {
    target: { value: email },
  });
  fireEvent.change(screen.getByLabelText("Senha"), {
    target: { value: password },
  });
}

function submit() {
  fireEvent.click(screen.getByRole("button", { name: "Entrar" }));
}

describe("LoginForm", () => {
  beforeEach(() => {
    vi.mocked(loginAction).mockReset();
    mocks.searchParams = new URLSearchParams();
  });

  it("renderiza campos com labels explícitos", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  it("mostra validação inline e não chama o servidor quando vazio", async () => {
    render(<LoginForm />);

    submit();

    expect(await screen.findByText("Informe seu e-mail.")).toBeInTheDocument();
    expect(screen.getByText("Informe sua senha.")).toBeInTheDocument();
    expect(loginAction).not.toHaveBeenCalled();

    const emailInput = screen.getByLabelText("E-mail");
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(emailInput).toHaveAttribute(
      "aria-describedby",
      expect.stringContaining("email-error")
    );
  });

  it("exibe erro de autenticação devolvido pelo servidor", async () => {
    vi.mocked(loginAction).mockResolvedValue({
      status: "error",
      message: "E-mail ou senha incorretos.",
    });

    render(<LoginForm />);
    fillCredentials();
    submit();

    expect(
      await screen.findByText("E-mail ou senha incorretos.")
    ).toBeInTheDocument();
    expect(loginAction).toHaveBeenCalledTimes(1);
  });

  it("preserva o destino informado na URL", async () => {
    mocks.searchParams = new URLSearchParams("next=%2Fdashboard");
    vi.mocked(loginAction).mockResolvedValue({ status: "idle" });

    render(<LoginForm />);
    fillCredentials();
    submit();

    await waitFor(() => expect(loginAction).toHaveBeenCalledTimes(1));

    const [, formData] = vi.mocked(loginAction).mock.calls[0];
    expect(formData.get("redirectTo")).toBe("/dashboard");
  });

  it("bloqueia o botão enquanto envia", async () => {
    vi.mocked(loginAction).mockReturnValue(new Promise<never>(() => undefined));

    render(<LoginForm />);
    fillCredentials();
    submit();

    const pendingButton = await screen.findByRole("button", {
      name: "Entrando...",
    });

    expect(pendingButton).toBeDisabled();
    expect(pendingButton).toHaveAttribute("aria-busy", "true");
  });
});
