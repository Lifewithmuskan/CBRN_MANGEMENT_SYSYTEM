"use client"

import { TrueOpposingScroll } from "@/components/true-opposing-scroll"

export default function NuclearPage() {
  // Content specific to nuclear agents
  const content = {
    left: [
      {
        type: "text",
        content:
          "Nuclear weapons derive their destructive force from nuclear reactions, either fission or a combination of fission and fusion. They release enormous amounts of energy in the form of blast, heat, and radiation.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Nuclear hazard symbol",
      },
      {
        type: "text",
        content:
          "The effects of a nuclear explosion include the initial blast, thermal radiation, and nuclear radiation. The blast can destroy buildings for miles, while the heat can cause severe burns and start fires. Radiation can cause immediate death or long-term health effects.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Nuclear fallout shelter",
      },
    ],
    right: [
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Nuclear power plant",
      },
      {
        type: "text",
        content:
          "Nuclear power plants, while designed for peaceful energy production, can pose risks if damaged or improperly operated. Safety measures include multiple containment barriers, cooling systems, and emergency protocols.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Nuclear emergency response team",
      },
      {
        type: "text",
        content:
          "Response to nuclear incidents involves immediate evacuation from the blast zone, sheltering from fallout, and long-term monitoring of radiation levels. International agreements like the Treaty on the Non-Proliferation of Nuclear Weapons aim to prevent the spread of nuclear weapons.",
      },
    ],
  }

  return (
    <div className="h-full">
      <div className="p-6 bg-slate-800 mb-4">
        <h1 className="text-3xl font-bold">Nuclear Agents</h1>
        <p className="text-slate-300">Nuclear safety and emergency protocols</p>
      </div>

      <TrueOpposingScroll content={content} />
    </div>
  )
}
