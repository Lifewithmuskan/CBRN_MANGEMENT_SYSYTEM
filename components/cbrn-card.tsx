"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CBRNCardProps {
  title: string
  description: string
  imageSrc: string
  onClick: () => void
}

export function CBRNCard({ title, description, imageSrc, onClick }: CBRNCardProps) {
  return (
    <motion.div
      className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={`${title} image`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}
