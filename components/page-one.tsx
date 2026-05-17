"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface PageOneProps {
  onSelectDevice: (device: "ar-condicionado" | "aquecedor") => void
}

export function PageOne({ onSelectDevice }: PageOneProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowWelcome(true), 300)
    const t2 = setTimeout(() => setShowQuestion(true), 1000)
    const t3 = setTimeout(() => setShowButtons(true), 1700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <div className="flex flex-1 flex-col gap-5 px-4 pb-4">
      {/* Welcome message */}
      {/* Welcome message */}
<div
  className="rounded-2xl bg-card px-5 py-7 shadow-sm transition-all duration-500 ease-out"
  style={{
    opacity: showWelcome ? 1 : 0,
    transform: showWelcome ? "translateY(0)" : "translateY(20px)",
  }}
>
  <div className="flex items-start gap-3">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
      <span className="text-xl">👋</span>
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[14px] leading-relaxed text-foreground">
        Olá! Seja bem-vindo à{" "}
        <strong className="font-heading font-bold text-primary whitespace-nowrap">
          PRIMOLLTEC.
        </strong>
      </p>

      <p className="-mt-1 text-[14px] leading-relaxed text-foreground">
        Somos especialistas em instalação, manutenção e conserto de ar
        condicionado e aquecedores a gás.
      </p>
    </div>
  </div>
</div>

      {/* Question */}
<div
  className="rounded-2xl bg-card px-5 py-6 shadow-sm transition-all duration-500 ease-out"
  style={{
    opacity: showQuestion ? 1 : 0,
    transform: showQuestion ? "translateY(0)" : "translateY(20px)",
  }}
>
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
      <span className="font-heading text-lg font-bold text-primary-foreground">
        ?
      </span>
    </div>

    <p className="pt-0.5 font-heading text-[14px] font-semibold leading-relaxed text-foreground">
      Qual seria o modelo do seu aparelho?
    </p>
  </div>
</div>

      {/* Device selection */}
      <div
        className="grid grid-cols-2 gap-4 transition-all duration-500 ease-out"
        style={{
          opacity: showButtons ? 1 : 0,
          transform: showButtons ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <button
          onClick={() => onSelectDevice("ar-condicionado")}
          className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 pb-5 pt-4 shadow-sm transition-all active:scale-[0.98]"
        >
          <div className="relative flex h-36 w-full items-center justify-center">
            <div className="absolute h-32 w-32 rounded-full bg-accent/50" />
            <Image
              src="/images/ar-condicionado.png"
              alt="Ar condicionado"
              width={150}
              height={100}
              className="relative z-10 object-contain"
            />
          </div>
          <span className="font-heading text-sm font-semibold text-foreground">
            Ar condicionado
          </span>
        </button>

        <button
          onClick={() => onSelectDevice("aquecedor")}
          className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 pb-5 pt-4 shadow-sm transition-all active:scale-[0.98]"
        >
          <div className="relative flex h-36 w-full items-center justify-center">
            <div className="absolute h-32 w-32 rounded-full bg-accent/50" />
            <Image
              src="/images/aquecedor-gas.png"
              alt="Aquecedor a gás"
              width={110}
              height={130}
              className="relative z-10 object-contain"
            />
          </div>
          <span className="font-heading text-sm font-semibold text-foreground">
            Aquecedor a gás
          </span>
        </button>
      </div>
    </div>
  )
}
