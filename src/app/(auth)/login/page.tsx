import type { Metadata } from "next"
import { Suspense } from "react"

import { AuthFormSkeleton } from "@/features/auth/components/auth-form-skeleton"
import { LoginForm } from "@/features/auth/components/login-form"
import { LoginPage } from "@/features/auth/components/login-page"
import { RedirectIfAuthenticated } from "@/features/auth/components/session-gate"

export const metadata: Metadata = {
  title: "Entrar | Açaíra",
  description: "Acesse sua conta Açaíra para anunciar e conversar com vendedores.",
}

export default function LoginRoute() {
  return (
    <LoginPage
      form={
        <Suspense fallback={<AuthFormSkeleton />}>
          <RedirectIfAuthenticated>
            <LoginForm />
          </RedirectIfAuthenticated>
        </Suspense>
      }
    />
  )
}
