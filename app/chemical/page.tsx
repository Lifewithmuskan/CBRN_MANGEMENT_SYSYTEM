"use client"

import { TrueOpposingScroll } from "@/components/true-opposing-scroll"

export default function ChemicalPage() {
  // Content specific to chemical agents
  const content = {
    left: [
      {
        type: "text",
        content:
          "Chemical agents are substances that can cause harm to humans, animals, or the environment through their toxic properties. They can be classified as choking agents, blood agents, blister agents, and nerve agents.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Chemical hazard symbol",
      },
      {
        type: "text",
        content:
          "Chemical weapons have been used throughout history, from World War I mustard gas to more recent incidents. International efforts like the Chemical Weapons Convention aim to eliminate these weapons.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Chemical protection equipment",
      },
    ],
    right: [
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Chemical detection equipment",
      },
      {
        type: "text",
        content:
          "Detection and protection against chemical agents requires specialized equipment including gas masks, protective suits, and detection devices that can identify the presence of harmful chemicals in the air or water.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Chemical decontamination process",
      },
      {
        type: "text",
        content:
          "Response to chemical incidents involves decontamination procedures, medical countermeasures, and evacuation strategies. First responders need specialized training to handle these dangerous situations safely.",
      },
    ],
  }

  return (
    <div className="h-full">
      <div className="p-6 bg-slate-800 mb-4">
        <h1 className="text-3xl font-bold">Chemical Agents</h1>
        <p className="text-slate-300">Management and response to chemical threats</p>
      </div>

      <TrueOpposingScroll content={content} />
    </div>
  )
}
