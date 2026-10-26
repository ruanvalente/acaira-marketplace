export type SocialProvider = "google" | "govbr"

export const SOCIAL_PROVIDER_LABELS: Record<SocialProvider, string> = {
  google: "Google",
  govbr: "Gov.br",
}

export type SocialLoginResult = {
  status: "unavailable"
  message: string
}

/**
 * Ponto único de integração com os provedores sociais.
 *
 * Google e Gov.br ainda não estão configurados no Supabase. Até lá, devolvemos
 * um estado explícito de indisponibilidade — nunca uma sessão falsa. Quando o
 * OAuth for habilitado, esta é a função que deve iniciar o fluxo real.
 */
export async function requestSocialLogin(
  provider: SocialProvider
): Promise<SocialLoginResult> {
  return {
    status: "unavailable",
    message: `O login com ${SOCIAL_PROVIDER_LABELS[provider]} ainda não está disponível.`,
  }
}
