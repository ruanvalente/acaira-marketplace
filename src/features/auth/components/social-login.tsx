"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  requestSocialLogin,
  SOCIAL_PROVIDER_LABELS,
  type SocialProvider,
} from "../services/social-auth.service"
import { GoogleIcon } from "./google-icon"

const PROVIDERS: readonly SocialProvider[] = ["google", "govbr"]

function GovBrIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex size-5 items-center justify-center rounded-full bg-foreground text-badge-label font-bold leading-none text-background"
    >
      BR
    </span>
  )
}

function ProviderIcon({ provider }: { provider: SocialProvider }) {
  return provider === "google" ? (
    <GoogleIcon className="size-5" />
  ) : (
    <GovBrIcon />
  )
}

export function SocialDivider() {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
      <span className="text-badge-label font-semibold uppercase tracking-wide text-muted-foreground">
        Ou continue com
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  )
}

/**
 * Login social.
 *
 * Enquanto Google e Gov.br não estiverem configurados, o handler devolve uma
 * mensagem explícita de indisponibilidade. Nenhuma sessão é simulada.
 */
export function SocialLogin() {
  const [pendingProvider, setPendingProvider] = useState<SocialProvider | null>(
    null
  )
  const [notice, setNotice] = useState<string | null>(null)

  async function handleSocialLogin(provider: SocialProvider) {
    setPendingProvider(provider)
    setNotice(null)

    try {
      const result = await requestSocialLogin(provider)
      setNotice(result.message)
    } finally {
      setPendingProvider(null)
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {PROVIDERS.map((provider) => {
          const pending = pendingProvider === provider

          return (
            <Button
              key={provider}
              type="button"
              variant="outline"
              size="lg"
              className="h-12 w-full justify-center gap-2 rounded-lg border-border bg-card text-sm font-medium text-foreground hover:bg-surface-container-low"
              disabled={pendingProvider !== null}
              aria-busy={pending}
              onClick={() => handleSocialLogin(provider)}
            >
              {pending ? (
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              ) : (
                <ProviderIcon provider={provider} />
              )}
              {SOCIAL_PROVIDER_LABELS[provider]}
            </Button>
          )
        })}
      </div>

      {notice ? (
        <p role="status" className="text-center text-xs text-muted-foreground">
          {notice}
        </p>
      ) : null}
    </div>
  )
}
