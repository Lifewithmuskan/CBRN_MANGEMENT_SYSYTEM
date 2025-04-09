"use client"

import { useRouter } from "next/navigation"
import ParticleRing from "@/components/particle-ring"
import { CBRNCard } from "@/components/cbrn-card"

export default function Home() {
  const router = useRouter()

  const handleCardClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className="relative h-full w-full">
      {/* Background 3D animation */}
      <div className="fixed inset-0 ">
        <ParticleRing />
      </div>
      
     

      {/* Overlay content - Cards */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 pt-[40rem]">

        {/* Title is now in the ParticleRing component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mt-24">
          <CBRNCard
            title="Chemical"
            description="Management of chemical agents and hazards"
            imageSrc="/placeholder.svg?height=300&width=500"
            onClick={() => handleCardClick("/chemical")}
          />
          <CBRNCard
            title="Biological"
            description="Monitoring and control of biological threats"
            imageSrc="/placeholder.svg?height=300&width=500"
            onClick={() => handleCardClick("/biological")}
          />
          <CBRNCard
            title="Radiological"
            description="Detection and response to radiological incidents"
            imageSrc="/placeholder.svg?height=300&width=500"
            onClick={() => handleCardClick("/radiological")}
          />
          <CBRNCard
            title="Nuclear"
            description="Nuclear safety and emergency protocols"
            imageSrc="/placeholder.svg?height=300&width=500"
            onClick={() => handleCardClick("/nuclear")}
          />
        </div>
      </div>
    </div>
  )
}


