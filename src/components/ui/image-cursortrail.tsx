"use client"

import { createRef, ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface ImageCursorTrailProps {
  items: string[] 
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
  fadeAnimation?: boolean
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageCursorTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return

    const relativeX = x - containerRect.left
    const relativeY = y - containerRect.top

    image.style.left = `${relativeX}px`
    image.style.top = `${relativeY}px`

    if (currentZIndexRef.current > 40) currentZIndexRef.current = 1
    image.style.zIndex = String(currentZIndexRef.current++)
    image.dataset.status = "active"

    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive"
      }, 1500)
    }

    last = { x, y }
  }

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive"
  }

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y)
  }

  const handleOnMove = (e: React.MouseEvent | React.Touch) => {
    const x = "clientX" in e ? e.clientX : e.pageX
    const y = "clientY" in e ? e.clientY : e.pageY

    if (distanceFromLast(x, y) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length].current
      const tail =
        refs.current[(globalIndex - maxNumberOfImages) % refs.current.length]
          ?.current

      if (lead) activate(lead, x, y)
      if (tail) deactivate(tail)

      globalIndex++
    }
  }

  return (
   <div  className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-[0_0_20px_#00000033] md:rounded-t-[40px] dark:shadow-[0_0_20px_#ffffff33] mt-10  ">
     <section
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className={cn(
        "relative grid place-content-center overflow-hidden  px-6 py-10 sm:p-12 max-w-5xl mx-auto bg-gray-100 dark:bg-neutral-900 shadow-xl dark:shadow-2xl transition-all duration-500  h-[600px] w-full  rounded-lg ",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={index}
          ref={refs.current[index]}
          src={item}
          alt={`image-${index}`}
          data-index={index}
          data-status="inactive"
          className={cn(
            "opacity-0 absolute -translate-x-1/2 -translate-y-1/2 scale-0 rounded-3xl object-cover transition-transform duration-300 ease-out-expo data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500",
            imgClass
          )}
        />
      ))}

      {children}
    </section>
   </div>
  )
}
