import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/features/auth/services/auth.actions", () => ({
  registerAction: vi.fn(),
}));

import { registerAction } from "@/features/auth/services/auth.actions";

import { RegisterForm } from "../components/register-form";

function fillRegistration(values?: {
  name?: string;
  email?: string;
  password?: string;
  confirmation?: string;
}) {
  fireEvent.change(screen.getByLabelText("Nome"), {
    target: { value: values?.name ?? "Maria Silva" },
  });
  fireEvent.change(screen.getByLabelText("E-mail"), {
    target: { value: values?.email ?? "maria@exemplo.com" },
  });
  fireEvent.change(screen.getByLabelText("Senha"), {
    target: { value: values?.password ?? "senha-segura" },
  });
  fireEvent.change(screen.getByLabelText("Confirmar senha"), {
    target: { value: values?.confirmation ?? "senha-segura" },
  });
}

function submit() {
  fireEvent.click(screen.getByRole("button", { name: "Criar conta" }));
}

describe("RegisterForm", () => {
  beforeEach(() => {
    vi.mocked(registerAction).mockReset();
  });

  it("valida os campos obrigatórios antes de chamar o servidor", async () => {
    render(<RegisterForm />);

    submit();

    expect(await screen.findByText("Informe seu nome.")).toBeInTheDocument();
    expect(screen.getByText("Informe seu e-mail.")).toBeInTheDocument();
    expect(screen.getByText("Informe sua senha.")).toBeInTheDocument();
    expect(registerAction).not.toHaveBeenCalled();
  });

  it("avisa quando as senhas não coincidem", async () => {
    render(<RegisterForm />);

    fillRegistration({ confirmation: "outra-senha" });
    submit();

    expect(await screen.findByText("As senhas não coincidem.")).toBeInTheDocument();
    expect(registerAction).not.toHaveBeenCalled();
  });

  it("mostra confirmação de e-mail após cadastro", async () => {
    vi.mocked(registerAction).mockResolvedValue({
      status: "success",
      message:
        "Enviamos um link de confirmação para maria@exemplo.com. Confirme para acessar sua conta.",
    });

    render(<RegisterForm />);

    fillRegistration();
    submit();

    expect(
      await screen.findByText(/Enviamos um link de confirmação/)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Ir para entrar" })).toHaveAttribute(
      "href",
      "/login"
    );
  });

  it("exibe erro de cadastro devolvido pelo servidor", async () => {
    vi.mocked(registerAction).mockResolvedValue({
      status: "error",
      message: "Já existe uma conta com este e-mail. Tente entrar ou recuperar sua senha.",
    });

    render(<RegisterForm />);

    fillRegistration();
    submit();

    expect(
      await screen.findByText(/Já existe uma conta com este e-mail/)
    ).toBeInTheDocument();
  });
});
