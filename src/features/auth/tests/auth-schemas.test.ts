import { describe, expect, it } from "vitest";

import {
  PASSWORD_MIN_LENGTH,
  validateForgotPasswordForm,
  validateLoginForm,
  validateRegisterForm,
  validateResetPasswordForm,
} from "../schemas/auth.schemas";

function buildFormData(values: Record<string, string>): FormData {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    formData.set(key, value);
  });

  return formData;
}

describe("auth schemas", () => {
  describe("validateLoginForm", () => {
    it("exige e-mail e senha", () => {
      const result = validateLoginForm(buildFormData({}));

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.email).toBe("Informe seu e-mail.");
        expect(result.errors.password).toBe("Informe sua senha.");
      }
    });

    it("rejeita e-mail inválido", () => {
      const result = validateLoginForm(
        buildFormData({ email: "sem-arroba", password: "12345678" })
      );

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.email).toBe("Informe um e-mail válido.");
      }
    });

    it("normaliza o e-mail informado", () => {
      const result = validateLoginForm(
        buildFormData({ email: "  Pessoa@Exemplo.COM ", password: "segredo" })
      );

      expect(result).toEqual({
        ok: true,
        data: { email: "pessoa@exemplo.com", password: "segredo" },
      });
    });
  });

  describe("validateRegisterForm", () => {
    it("valida nome, senha e confirmação", () => {
      const result = validateRegisterForm(
        buildFormData({
          name: " ",
          email: "pessoa@exemplo.com",
          password: "123",
          passwordConfirmation: "456",
        })
      );

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.name).toBe("Informe seu nome.");
        expect(result.errors.password).toBe(
          `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`
        );
        expect(result.errors.passwordConfirmation).toBe(
          "As senhas não coincidem."
        );
      }
    });

    it("aceita dados válidos", () => {
      const result = validateRegisterForm(
        buildFormData({
          name: "  Maria Silva ",
          email: "Maria@Exemplo.com",
          password: "senha-segura",
          passwordConfirmation: "senha-segura",
        })
      );

      expect(result).toEqual({
        ok: true,
        data: {
          name: "Maria Silva",
          email: "maria@exemplo.com",
          password: "senha-segura",
        },
      });
    });
  });

  describe("validateForgotPasswordForm", () => {
    it("exige e-mail válido", () => {
      const result = validateForgotPasswordForm(
        buildFormData({ email: "invalido" })
      );

      expect(result.ok).toBe(false);
    });
  });

  describe("validateResetPasswordForm", () => {
    it("exige confirmação igual à nova senha", () => {
      const result = validateResetPasswordForm(
        buildFormData({
          password: "nova-senha",
          passwordConfirmation: "outra-senha",
        })
      );

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.passwordConfirmation).toBe(
          "As senhas não coincidem."
        );
      }
    });

    it("aceita uma nova senha válida", () => {
      const result = validateResetPasswordForm(
        buildFormData({
          password: "nova-senha",
          passwordConfirmation: "nova-senha",
        })
      );

      expect(result).toEqual({ ok: true, data: { password: "nova-senha" } });
    });
  });
});
