"use client"

import { Video, MessageSquare, Users } from "lucide-react"

interface BentoCardProps {
  title: string
  icon: "video" | "social" | "community"
  onClick: () => void
}

const icons = {
  video: Video,
  social: MessageSquare,
  community: Users,
}

export function BentoCard({ title, icon, onClick }: BentoCardProps) {
  const Icon = icons[icon]

  return (
    <button
      onClick={onClick}
      className="group relative aspect-square flex flex-col items-center justify-center gap-4 bg-background border-3 border-foreground transition-all duration-150 ease-out cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#4A90E2] hover:border-accent p-6"
      style={{
        boxShadow: "4px 4px 0px 0px #1A1A1A",
      }}
    >
      <Icon 
        className="w-12 h-12 stroke-[2px] text-foreground group-hover:text-accent transition-colors"
      />
      <span className="font-sans text-base font-bold text-foreground text-center group-hover:text-accent transition-colors">
        {title}
      </span>
    </button>
  )
}
