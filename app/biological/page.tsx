"use client"

import { TrueOpposingScroll } from "@/components/true-opposing-scroll"

export default function BiologicalPage() {
  // Content specific to biological agents
  const content = {
    left: [
      {
        type: "text",
        content:
          "Biological agents include bacteria, viruses, fungi, and toxins that can be used to cause disease in humans, animals, or plants. These agents can be naturally occurring or modified to increase their virulence or resistance to treatment.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Biological hazard symbol",
      },
      {
        type: "text",
        content:
          "Throughout history, biological warfare has been documented from ancient times to modern day. The Biological Weapons Convention of 1972 prohibits the development, production, and stockpiling of biological weapons.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Biological laboratory",
      },
    ],
    right: [
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Biological containment facility",
      },
      {
        type: "text",
        content:
          "Detection of biological agents often requires sophisticated laboratory techniques. Early warning systems may include environmental monitoring, syndromic surveillance, and rapid diagnostic tests.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Biological protection equipment",
      },
      {
        type: "text",
        content:
          "Response to biological incidents includes medical countermeasures such as vaccines and antibiotics, infection control measures, and public health interventions like quarantine and contact tracing.",
      },
    ],
  }

  return (
    <div className="h-full">
      <div className="p-6 bg-slate-800 mb-4">
        <h1 className="text-3xl font-bold">Biological Agents</h1>
        <p className="text-slate-300">Monitoring and control of biological threats</p>
      </div>

      <TrueOpposingScroll content={content} />
    </div>
  )
}
