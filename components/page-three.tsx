"use client"

import { useEffect, useState } from "react"
import { Shield, Phone } from "lucide-react"

export function PageThree() {
  const [showIcon, setShowIcon] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowIcon(true), 200)
    const t2 = setTimeout(() => setShowTitle(true), 700)
    const t3 = setTimeout(() => setShowButton(true), 1200)
    const t4 = setTimeout(() => setShowInfo(true), 1600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  const whatsappNumber = "5521972377240"
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de falar com um especialista sobre meu equipamento."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="flex flex-1 flex-col items-center px-5 pb-4">
      {/* WhatsApp Icon */}
      <div
        className="relative mb-8 mt-6 flex h-48 w-48 items-center justify-center transition-all duration-600 ease-out"
        style={{
          opacity: showIcon ? 1 : 0,
          transform: showIcon ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "rgba(252, 205, 211, 0.5)" }}
        />
        <div
          className="absolute inset-5 rounded-full"
          style={{ backgroundColor: "rgba(251, 175, 185, 0.6)" }}
        />
        <div
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full"
          style={{ backgroundColor: "#f4a0ac" }}
        >
          <Phone className="h-11 w-11" style={{ color: "white" }} fill="white" />
        </div>
      </div>

      {/* Title */}
      <div
        className="transition-all duration-500 ease-out"
        style={{
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? "translateY(0)" : "translateY(15px)",
        }}
      >
        <h2 className="text-center font-heading text-2xl font-bold text-foreground">
          Falar com atendimento
        </h2>
        <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
          Clique no botão abaixo para iniciar seu
          <br />
          atendimento diretamente pelo WhatsApp.
        </p>
      </div>

      {/* CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-5 font-heading text-base font-semibold uppercase tracking-widest text-primary-foreground shadow-lg transition-all active:scale-[0.98]"
        style={{
          opacity: showButton ? 1 : 0,
          transform: showButton ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 500ms ease-out, transform 500ms ease-out",
        }}
      >
        INICIAR CONVERSA
      </a>

      {/* Info card */}
      <div
        className="mt-7 w-full rounded-2xl border border-border bg-card p-5 shadow-sm"
        style={{
          opacity: showInfo ? 1 : 0,
          transform: showInfo ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 500ms ease-out, transform 500ms ease-out",
        }}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-foreground">
              Atendimento rápido e seguro
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Você será direcionado para o nosso WhatsApp oficial para falar com um especialista.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
