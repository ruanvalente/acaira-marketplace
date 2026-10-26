import type { Metadata } from "next"
import { Suspense } from "react"

import { AuthFormSkeleton } from "@/features/auth/components/auth-form-skeleton"
import { AuthShell } from "@/features/auth/components/auth-shell"
import { RegisterForm } from "@/features/auth/components/register-form"
import { RedirectIfAuthenticated } from "@/features/auth/components/session-gate"

export const metadata: Metadata = {
  title: "Criar conta | Açaíra",
  description: "Crie sua conta Açaíra e comece a vender no Pará.",
}

export default function RegisterPage() {
  return (
    <AuthShell
      title="Criar conta"
      description="Crie sua conta para vender, favoritar e conversar com vendedores."
    >
      <Suspense fallback={<AuthFormSkeleton />}>
        <RedirectIfAuthenticated>
          <RegisterForm />
        </RedirectIfAuthenticated>
      </Suspense>
    </AuthShell>
  )
}
