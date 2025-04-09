"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ContentItem {
  type: "text" | "image"
  content: string
  alt?: string
}

interface TrueOpposingScrollProps {
  content: {
    left: ContentItem[]
    right: ContentItem[]
  }
}

export function TrueOpposingScroll({ content }: TrueOpposingScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  useEffect(() => {
    // Calculate the maximum scroll amount once content is loaded
    if (leftContentRef.current) {
      const contentHeight = leftContentRef.current.scrollHeight
      const containerHeight = containerRef.current?.clientHeight || window.innerHeight
      setMaxScroll(Math.max(0, contentHeight - containerHeight))
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const delta = e.deltaY
      // Update scroll position, clamping it between 0 and maxScroll
      setScrollPosition((prevPos) => {
        const newPos = prevPos + delta
        return Math.max(0, Math.min(newPos, maxScroll))
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [maxScroll])

  // When scroll position changes, update the transforms
  useEffect(() => {
    if (leftContentRef.current && rightContentRef.current) {
      // Left side scrolls normally (negative transform means content moves up)
      leftContentRef.current.style.transform = `translateY(-${scrollPosition}px)`

      // Right side scrolls in opposite direction
      // Calculate right position as percentage of maxScroll to get smooth inverse
      const rightPosition = maxScroll > 0 ? maxScroll - scrollPosition : 0
      rightContentRef.current.style.transform = `translateY(-${rightPosition}px)`
    }
  }, [scrollPosition, maxScroll])

  // Render section content
  const renderContent = (item: ContentItem, index: number) => {
    if (item.type === "image") {
      return (
        <div key={index} className="mb-16">
          <div className="relative w-full h-64">
            <Image
              src={item.content || "/placeholder.svg"}
              alt={item.alt || ""}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    } else {
      return (
        <div key={index} className="mb-16 p-6 bg-slate-700 rounded-lg shadow-sm">
          <p className="text-slate-200 leading-relaxed">{item.content}</p>
        </div>
      )
    }
  }

  return (
    <div ref={containerRef} className="h-[calc(100%-5rem)] flex bg-slate-900">
      {/* Left half */}
      <div className="w-1/2 overflow-hidden">
        <div
          ref={leftContentRef}
          className="p-8 h-full"
          style={{
            transition: "transform 0.3s ease-out",
            willChange: "transform",
          }}
        >
          <div className="space-y-8">{content.left.map((item, index) => renderContent(item, index))}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-1 bg-slate-700"></div>

      {/* Right half */}
      <div className="w-1/2 overflow-hidden">
        <div
          ref={rightContentRef}
          className="p-8 h-full"
          style={{
            transition: "transform 0.3s ease-out",
            willChange: "transform",
          }}
        >
          <div className="space-y-8">{content.right.map((item, index) => renderContent(item, index))}</div>
        </div>
      </div>
    </div>
  )
}
