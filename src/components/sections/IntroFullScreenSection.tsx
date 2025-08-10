'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import data from '@/models/data'
import Picture from '../ui/picture'
import classNames from 'classnames'

export default function IntroFullScreenSection({
  onClick,
}: {
  onClick: () => void
}) {
  const fullText = 'Wedding day'
  const nextText = '주희 ♡ 성준'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayRightIcon, setDisplayRightIcon] = useState(false)
  useEffect(() => {
    if (currentIndex >= fullText.length) {
      setDisplayRightIcon(true)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 180)

    return () => clearTimeout(timeout)
  }, [currentIndex, fullText])

  return (
    <div
      className="absolute h-dvh w-full z-50 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-shadow-lg text-4xl font-m leading-tight whitespace-pre-wrap break-words max-w-[90%] flex flex-col items-center font-crimson ">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {fullText.slice(0, currentIndex)}
        </motion.span>

        {
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: displayRightIcon ? 1 : 0 }}
            transition={{ duration: 3 }}
            className={classNames('mt-4 text-2xl font-gowun')}
          >
            {nextText}
          </motion.span>
        }
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
