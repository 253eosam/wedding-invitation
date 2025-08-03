'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import data from '@/models/data'
import Picture from '../ui/picture'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function IntroFullScreenSection({
  onClick,
}: {
  onClick: () => void
}) {
  const [displayRightIcon, setDisplayRightIcon] = useState(false)
  const fullText = '소중한 분께\n드리는\n결혼 소식'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      setDisplayRightIcon(true)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 80)

    return () => clearTimeout(timeout)
  }, [currentIndex, fullText])

  return (
    <div className="absolute h-dvh w-full z-50">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-shadow-md text-4xl font-semibold leading-tight whitespace-pre-wrap break-words max-w-[90%] flex flex-col items-center font-gowun cursor-pointer"
        onClick={onClick}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {fullText.slice(0, currentIndex)}
        </motion.span>
        {displayRightIcon && <FaLongArrowAltRight />}
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
