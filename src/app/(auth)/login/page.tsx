import type { Metadata } from "next"
import { Suspense } from "react"

import { AuthFormSkeleton } from "@/features/auth/components/auth-form-skeleton"
import { AuthShell } from "@/features/auth/components/auth-shell"
import { LoginForm } from "@/features/auth/components/login-form"
import { RedirectIfAuthenticated } from "@/features/auth/components/session-gate"

export const metadata: Metadata = {
  title: "Entrar | Açaíra",
  description: "Acesse sua conta Açaíra para anunciar e conversar com vendedores.",
}

export default function LoginPage() {
  return (
    <AuthShell
      title="Entrar"
      description="Acesse sua conta para anunciar, favoritar e conversar com vendedores."
    >
      <Suspense fallback={<AuthFormSkeleton />}>
        <RedirectIfAuthenticated>
          <LoginForm />
        </RedirectIfAuthenticated>
      </Suspense>
    </AuthShell>
  )
}
