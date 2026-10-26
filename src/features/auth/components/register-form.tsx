"use client"

import Link from "next/link"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"

import { useFocusFirstError } from "../hooks/use-focus-first-error"
import { PASSWORD_MIN_LENGTH, validateRegisterForm } from "../schemas/auth.schemas"
import { registerAction } from "../services/auth.actions"
import {
  initialAuthState,
  type AuthActionState,
  type AuthField,
} from "../types/auth.types"
import { AuthInput } from "./auth-input"
import { FormAlert } from "./form-alert"

const FIELDS: readonly AuthField[] = [
  "name",
  "email",
  "password",
  "passwordConfirmation",
]

async function submitRegistration(
  previousState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const validation = validateRegisterForm(formData)

  if (!validation.ok) {
    return { status: "error", fieldErrors: validation.errors }
  }

  return registerAction(previousState, formData)
}

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    submitRegistration,
    initialAuthState
  )
  const errors = state.fieldErrors ?? {}

  useFocusFirstError(state, FIELDS)

  if (state.status === "success") {
    return (
      <div className="space-y-5">
        <FormAlert tone="success">{state.message}</FormAlert>
        <p className="text-sm text-muted-foreground">
          Não recebeu o e-mail? Verifique a pasta de spam ou tente novamente em
          alguns minutos.
        </p>
        <Button asChild className="h-11 w-full">
          <Link href="/login">Ir para entrar</Link>
        </Button>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && state.message ? (
        <FormAlert tone="error">{state.message}</FormAlert>
      ) : null}

      <AuthInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        autoComplete="name"
        required
        error={errors.name}
      />

      <AuthInput
        id="email"
        name="email"
        type="email"
        label="E-mail"
        autoComplete="email"
        inputMode="email"
        required
        error={errors.email}
      />

      <AuthInput
        id="password"
        name="password"
        type="password"
        label="Senha"
        autoComplete="new-password"
        hint={`Mínimo de ${PASSWORD_MIN_LENGTH} caracteres.`}
        required
        error={errors.password}
      />

      <AuthInput
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        label="Confirmar senha"
        autoComplete="new-password"
        required
        error={errors.passwordConfirmation}
      />

      <Button
        type="submit"
        className="h-11 w-full"
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? "Criando conta..." : "Criar conta"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Já tem conta?{" "}
        <Link
          href="/login"
          className="text-primary underline-offset-4 hover:underline"
        >
          Entrar
        </Link>
      </p>
    </form>
  )
}
