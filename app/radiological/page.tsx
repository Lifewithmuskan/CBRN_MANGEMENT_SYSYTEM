"use client"

import { TrueOpposingScroll } from "@/components/true-opposing-scroll"

export default function RadiologicalPage() {
  // Content specific to radiological agents
  const content = {
    left: [
      {
        type: "text",
        content:
          "Radiological agents emit ionizing radiation that can damage living tissue. These include materials like cesium-137, cobalt-60, and strontium-90, which are used in medical and industrial applications but can be weaponized.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Radiation hazard symbol",
      },
      {
        type: "text",
        content:
          'A radiological dispersal device (RDD) or "dirty bomb" combines conventional explosives with radioactive material. While the explosion itself might cause limited damage, the spread of radioactive material can cause contamination and panic.',
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Radiation detection equipment",
      },
    ],
    right: [
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Radiation monitoring",
      },
      {
        type: "text",
        content:
          "Detection of radiological materials requires specialized equipment like Geiger counters, dosimeters, and radiation isotope identifiers. These tools can measure radiation levels and identify specific isotopes.",
      },
      {
        type: "image",
        content: "/placeholder.svg?height=400&width=600",
        alt: "Radiation protection gear",
      },
      {
        type: "text",
        content:
          "Response to radiological incidents involves principles of time, distance, and shielding to minimize exposure. Decontamination, medical treatment for radiation exposure, and long-term environmental remediation may be necessary.",
      },
    ],
  }

  return (
    <div className="h-full">
      <div className="p-6 bg-slate-800 mb-4">
        <h1 className="text-3xl font-bold">Radiological Agents</h1>
        <p className="text-slate-300">Detection and response to radiological incidents</p>
      </div>

      <TrueOpposingScroll content={content} />
    </div>
  )
}
