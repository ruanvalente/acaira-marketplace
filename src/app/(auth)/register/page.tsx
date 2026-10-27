import type { Metadata } from "next"
import { Suspense } from "react"

import { CreateAccountPage } from "@/features/auth/components/create-account/create-account-page"
import { RegistrationFormSkeleton } from "@/features/auth/components/create-account/registration-form-skeleton"
import { RegisterForm } from "@/features/auth/components/register-form"
import { RedirectIfAuthenticated } from "@/features/auth/components/session-gate"

export const metadata: Metadata = {
  title: "Criar conta | Açaíra",
  description:
    "Crie sua conta Açaíra para comprar, vender e conversar com gente do Pará.",
}

export default function RegisterPage() {
  return (
    <CreateAccountPage
      form={
        <Suspense fallback={<RegistrationFormSkeleton />}>
          <RedirectIfAuthenticated>
            <RegisterForm />
          </RedirectIfAuthenticated>
        </Suspense>
      }
    />
  )
}
