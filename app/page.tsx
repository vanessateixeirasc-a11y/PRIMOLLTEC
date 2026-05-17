"use client"

import { useState, useCallback, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageOne } from "@/components/page-one"
import { PageTwo } from "@/components/page-two"
import { PageThree } from "@/components/page-three"

type Page = 1 | 2 | 3
type Device = "ar-condicionado" | "aquecedor"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>(1)
  const [selectedDevice, setSelectedDevice] = useState<Device>("ar-condicionado")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"forward" | "back">("forward")
  const [displayedPage, setDisplayedPage] = useState<Page>(1)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigateTo = useCallback((target: Page, direction: "forward" | "back") => {
    if (isTransitioning) return

    setTransitionDirection(direction)
    setIsTransitioning(true)

    timeoutRef.current = setTimeout(() => {
      setDisplayedPage(target)
      setCurrentPage(target)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false)
        })
      })
    }, 350)
  }, [isTransitioning])

  const handleSelectDevice = useCallback((device: Device) => {
    setSelectedDevice(device)
    navigateTo(2, "forward")
  }, [navigateTo])

  const handleSelectService = useCallback(() => {
    navigateTo(3, "forward")
  }, [navigateTo])

  const handleBack = useCallback(() => {
    navigateTo((currentPage > 1 ? currentPage - 1 : 1) as Page, "back")
  }, [navigateTo, currentPage])

  const footerText =
    displayedPage === 3
      ? "Seus dados estão protegidos e utilizaremos apenas para contato sobre o atendimento."
      : "Atendimento seguro e confiável"

  const getTransitionStyle = () => {
    if (isTransitioning) {
      return {
        opacity: 0,
        transform:
          transitionDirection === "forward"
            ? "translateX(-30px)"
            : "translateX(30px)",
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
      }
    }

    return {
      opacity: 1,
      transform: "translateX(0)",
      transition: "opacity 400ms ease-out, transform 400ms ease-out",
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background p-4">
      <div className="flex h-[812px] w-full max-w-[390px] flex-col overflow-hidden rounded-3xl bg-card shadow-xl">
        <Header showBackButton={displayedPage > 1} onBack={handleBack} />

        <div className="mx-5 h-px bg-border" />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div
            className="flex flex-1 flex-col pt-4"
            style={getTransitionStyle()}
          >
            {displayedPage === 1 && (
              <PageOne onSelectDevice={handleSelectDevice} />
            )}

            {displayedPage === 2 && (
              <PageTwo
                selectedDevice={selectedDevice}
                onSelectService={handleSelectService}
              />
            )}

            {displayedPage === 3 && <PageThree />}
          </div>
        </div>

        <Footer text={footerText} />
      </div>
    </div>
  )
}