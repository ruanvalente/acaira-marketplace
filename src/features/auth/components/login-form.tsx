"use client"

import Link from "next/link"
import { useActionState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

import { useFocusFirstError } from "../hooks/use-focus-first-error"
import { validateLoginForm } from "../schemas/auth.schemas"
import { loginAction } from "../services/auth.actions"
import {
  initialAuthState,
  type AuthActionState,
  type AuthField,
} from "../types/auth.types"
import { AuthInput } from "./auth-input"
import { AuthNotice } from "./auth-notice"
import { FormAlert } from "./form-alert"

const FIELDS: readonly AuthField[] = ["email", "password"]

async function submitLogin(
  previousState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  // Validação imediata no cliente. O Server Action revalida antes de
  // qualquer chamada ao Supabase.
  const validation = validateLoginForm(formData)

  if (!validation.ok) {
    return { status: "error", fieldErrors: validation.errors }
  }

  return loginAction(previousState, formData)
}

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    submitLogin,
    initialAuthState
  )
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("next") ?? ""
  const errors = state.fieldErrors ?? {}

  useFocusFirstError(state, FIELDS)

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <AuthNotice />

      {state.status === "error" && state.message ? (
        <FormAlert tone="error">{state.message}</FormAlert>
      ) : null}

      <input type="hidden" name="redirectTo" value={redirectTo} />

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
        autoComplete="current-password"
        required
        error={errors.password}
      />

      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="rounded-sm text-sm text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          Esqueci minha senha
        </Link>
      </div>

      <Button
        type="submit"
        className="h-11 w-full"
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? "Entrando..." : "Entrar"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Ainda não tem conta?{" "}
        <Link
          href="/register"
          className="text-primary underline-offset-4 hover:underline"
        >
          Criar conta
        </Link>
      </p>
    </form>
  )
}
