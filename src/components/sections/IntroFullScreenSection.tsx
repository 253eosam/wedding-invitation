'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import data from '@/models/data'
import Picture from '../ui/picture'

export default function IntroFullScreenSection({
  onClick,
}: {
  onClick: () => void
}) {
  const fullText = 'Wedding day\n\n주희 ❤️ 성준\n\n초대합니다'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      return
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 150)

    return () => clearTimeout(timeout)
  }, [currentIndex, fullText])

  return (
    <div
      className="absolute h-dvh w-full z-50 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-shadow-md text-4xl font-semibold leading-tight whitespace-pre-wrap break-words max-w-[90%] flex flex-col items-center font-gowun ">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {fullText.slice(0, currentIndex)}
        </motion.span>
      </div>
      <Picture
        src={data.images.intro}
        alt="intro"
        style={{ objectFit: 'cover' }}
        className="h-full w-full"
      />
    </div>
  )
}
