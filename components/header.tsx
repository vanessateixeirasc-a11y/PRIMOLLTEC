"use client"

import Image from "next/image"
import { ArrowLeft, MoreHorizontal } from "lucide-react"

interface HeaderProps {
  showBackButton?: boolean
  onBack?: () => void
}

export function Header({ showBackButton = false, onBack }: HeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      {/* Left side */}
      <div className="flex items-center gap-3 pl-3">
        {showBackButton && (
          <button
            onClick={onBack}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
        )}

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-sm">
            <Image
              src="/images/logo.png"
              alt="PRIMOLLTEC Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="font-heading text-lg font-bold tracking-tight text-foreground">
              PRIMOLLTEC
            </h1>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">
                Assistente
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

              <span className="text-xs text-green-500">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right menu */}
      <button
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-card shadow-sm"
        aria-label="Menu"
      >
        <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
      </button>
    </div>
  )
}