import * as React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type AuthInputProps = Omit<React.ComponentProps<typeof Input>, "id"> & {
  id: string
  label: string
  error?: string
  hint?: string
}

/**
 * Campo de formulário de autenticação com label explícito, dica opcional e
 * mensagem de erro associada ao input.
 */
export function AuthInput({
  id,
  label,
  error,
  hint,
  className,
  ...props
}: AuthInputProps) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn("h-11", className)}
        {...props}
      />
      {hint ? (
        <p id={hintId} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
