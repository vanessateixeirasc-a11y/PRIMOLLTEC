import { Shield } from "lucide-react"

interface FooterProps {
  text: string
}

export function Footer({ text }: FooterProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
        <Shield className="h-4 w-4 text-primary" />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
