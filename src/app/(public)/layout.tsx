import type { ReactNode } from "react"

import { MainHeader } from "@/components/layout"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <MainHeader />
      {children}
    </div>
  )
}
