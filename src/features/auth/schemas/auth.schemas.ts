import type { AuthFieldErrors } from "../types/auth.types";

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 72;
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 80;
export const EMAIL_MAX_LENGTH = 254;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: AuthFieldErrors };

export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export type ForgotPasswordInput = {
  email: string;
};

export type ResetPasswordInput = {
  password: string;
};

function readField(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function validateEmail(value: string): string | undefined {
  const email = normalizeEmail(value);

  if (!email) {
    return "Informe seu e-mail.";
  }

  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
    return "Informe um e-mail válido.";
  }

  return undefined;
}

function validateRequiredPassword(value: string): string | undefined {
  if (!value) {
    return "Informe sua senha.";
  }

  return undefined;
}

function validateNewPassword(value: string): string | undefined {
  if (!value) {
    return "Informe sua senha.";
  }

  if (value.length < PASSWORD_MIN_LENGTH) {
    return `A senha deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres.`;
  }

  if (value.length > PASSWORD_MAX_LENGTH) {
    return `A senha deve ter no máximo ${PASSWORD_MAX_LENGTH} caracteres.`;
  }

  return undefined;
}

function validatePasswordConfirmation(
  password: string,
  confirmation: string
): string | undefined {
  if (!confirmation) {
    return "Confirme sua senha.";
  }

  if (password !== confirmation) {
    return "As senhas não coincidem.";
  }

  return undefined;
}

export function validateLoginForm(formData: FormData): ValidationResult<LoginInput> {
  const email = normalizeEmail(readField(formData, "email"));
  const password = readField(formData, "password");

  const errors: AuthFieldErrors = {};
  const emailError = validateEmail(email);
  const passwordError = validateRequiredPassword(password);

  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { email, password } };
}

export function validateRegisterForm(
  formData: FormData
): ValidationResult<RegisterInput> {
  const name = readField(formData, "name").trim();
  const email = normalizeEmail(readField(formData, "email"));
  const password = readField(formData, "password");
  const passwordConfirmation = readField(formData, "passwordConfirmation");

  const errors: AuthFieldErrors = {};

  if (!name) {
    errors.name = "Informe seu nome.";
  } else if (name.length < NAME_MIN_LENGTH) {
    errors.name = `O nome deve ter pelo menos ${NAME_MIN_LENGTH} caracteres.`;
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.name = `O nome deve ter no máximo ${NAME_MAX_LENGTH} caracteres.`;
  }

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const passwordError = validateNewPassword(password);
  if (passwordError) errors.password = passwordError;

  const confirmationError = validatePasswordConfirmation(
    password,
    passwordConfirmation
  );
  if (confirmationError) errors.passwordConfirmation = confirmationError;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { name, email, password } };
}

export function validateForgotPasswordForm(
  formData: FormData
): ValidationResult<ForgotPasswordInput> {
  const email = normalizeEmail(readField(formData, "email"));
  const emailError = validateEmail(email);

  if (emailError) {
    return { ok: false, errors: { email: emailError } };
  }

  return { ok: true, data: { email } };
}

export function validateResetPasswordForm(
  formData: FormData
): ValidationResult<ResetPasswordInput> {
  const password = readField(formData, "password");
  const passwordConfirmation = readField(formData, "passwordConfirmation");

  const errors: AuthFieldErrors = {};

  const passwordError = validateNewPassword(password);
  if (passwordError) errors.password = passwordError;

  const confirmationError = validatePasswordConfirmation(
    password,
    passwordConfirmation
  );
  if (confirmationError) errors.passwordConfirmation = confirmationError;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { password } };
}
