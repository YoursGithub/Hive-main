"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

interface HoverExpandProps {
  images: string[]
  initialSelectedIndex?: number
  thumbnailHeight?: number
  modalImageSize?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  // thumbnailHeight = 320, // taller
  modalImageSize = 700, // larger modal
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-2 pb-20 pt-10 md:gap-3">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative overflow-hidden transition-all duration-300 ${
              selectedIndex === i
                ? "w-[26rem] h-[16rem]" // expanded image is much wider and taller
                : "w-16 sm:w-20 md:w-24 xl:w-28 h-[16rem]" // collapsed are also larger
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <Image
                src={imageUrl}
                alt={`Image ${i + 1}`}
                width={800}
                height={800}
                className="size-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl bg-black"
              style={{ width: modalImageSize, height: modalImageSize }}
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative w-full h-full"
              >
                <Image
                  src={images[selectedIndex]}
                  alt={`Image ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
