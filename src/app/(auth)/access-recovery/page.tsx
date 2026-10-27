import type { Metadata } from "next";

import { AccessRecoveryPage } from "@/features/auth/components/access-recovery/access-recovery-page";
import { AuthHeader } from "@/features/auth/components/shared/auth-header";

export const metadata: Metadata = {
  title: "Recuperação de Acesso | Açaíra",
  description:
    "Recupere o acesso à sua conta Açaíra com verificação segura e criptografia de ponta a ponta.",
};

export default function AccessRecoveryRoute() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <AccessRecoveryPage />
      </div>
    </div>
  );
}
