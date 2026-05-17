"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronRight, Wrench, Cog, PenTool } from "lucide-react"

interface PageTwoProps {
  selectedDevice: "ar-condicionado" | "aquecedor"
  onSelectService: (service: string) => void
}

export function PageTwo({ selectedDevice, onSelectService }: PageTwoProps) {
  const [showImage, setShowImage] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showCard1, setShowCard1] = useState(false)
  const [showCard2, setShowCard2] = useState(false)
  const [showCard3, setShowCard3] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowImage(true), 200)
    const t2 = setTimeout(() => setShowTitle(true), 600)
    const t3 = setTimeout(() => setShowCard1(true), 1000)
    const t4 = setTimeout(() => setShowCard2(true), 1300)
    const t5 = setTimeout(() => setShowCard3(true), 1600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [])

  const deviceImage =
    selectedDevice === "ar-condicionado"
      ? "/images/ar-condicionado.png"
      : "/images/aquecedor-gas.png"

  const deviceAlt =
    selectedDevice === "ar-condicionado"
      ? "Ar condicionado"
      : "Aquecedor a gás"

  const deviceName =
    selectedDevice === "ar-condicionado"
      ? "ar condicionado"
      : "aquecedor a gás"

  const services = [
    {
      key: "instalacao",
      icon: Wrench,
      title: "INSTALAÇÃO",
      desc: `Instalação de ${deviceName} novo.`,
      show: showCard1,
    },
    {
      key: "manutencao",
      icon: Cog,
      title: "MANUTENÇÃO",
      desc: `Manutenção preventiva para garantir o bom funcionamento do ${deviceName}.`,
      show: showCard2,
    },
    {
      key: "conserto",
      icon: PenTool,
      title: "CONSERTO",
      desc: `Conserto e reparo de falhas no seu ${deviceName}.`,
      show: showCard3,
    },
  ]

  return (
    <div className="flex flex-1 flex-col px-4 pb-4">
      {/* Product Image */}
      <div
        className="relative mx-auto mb-4 flex h-44 w-full items-center justify-center transition-all duration-500 ease-out"
        style={{
          opacity: showImage ? 1 : 0,
          transform: showImage
            ? "translateY(0) scale(1)"
            : "translateY(15px) scale(0.95)",
        }}
      >
        <div className="absolute h-36 w-36 rounded-full bg-accent/60" />

        <Image
          src={deviceImage}
          alt={deviceAlt}
          width={220}
          height={140}
          className="relative z-10 object-contain"
        />
      </div>

      {/* Title */}
      <div
        className="mb-6 text-center transition-all duration-500 ease-out"
        style={{
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? "translateY(0)" : "translateY(15px)",
        }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Qual seria seu serviço?
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Selecione abaixo o tipo de serviço
          <br />
          que você precisa.
        </p>
      </div>

      {/* Service cards */}
      <div className="flex flex-col gap-3">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <button
              key={service.key}
              onClick={() => onSelectService(service.key)}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all active:scale-[0.98]"
              style={{
                opacity: service.show ? 1 : 0,
                transform: service.show
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "opacity 500ms ease-out, transform 500ms ease-out",
              }}
              disabled={!service.show}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="font-heading text-sm font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>

              <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
            </button>
          )
        })}
      </div>
    </div>
  )
}