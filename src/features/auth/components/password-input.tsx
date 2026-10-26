"use client"

import * as React from "react"
import { Eye, EyeOff, LockKeyhole } from "lucide-react"

import { AuthInput } from "./auth-input"

type PasswordInputProps = Omit<
  React.ComponentProps<typeof AuthInput>,
  "type" | "endAdornment" | "icon"
>

/**
 * Campo de senha com controle acessível de visibilidade.
 *
 * O tipo do input alterna entre `password` e `text`; o botão mantém um
 * `aria-label` descritivo em cada estado.
 */
export function PasswordInput({ id, ...props }: PasswordInputProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <AuthInput
      id={id}
      type={visible ? "text" : "password"}
      icon={LockKeyhole}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          aria-controls={id}
          aria-pressed={visible}
          className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-container hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          {visible ? (
            <EyeOff aria-hidden="true" className="size-4" />
          ) : (
            <Eye aria-hidden="true" className="size-4" />
          )}
        </button>
      }
      {...props}
    />
  )
}
