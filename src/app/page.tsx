'use client'
import MainSection from '@/components/sections/MainSection'
import InvitationSection from '@/components/sections/InvitationSection'
import GallerySection from '@/components/sections/GallerySection'
import CalendarSection from '@/components/sections/CalendarSection'
import MapSection from '@/components/sections/MapSection'
import AccountSection from '@/components/sections/AccountSection'
import { config } from '@/models'
import { useBGMPlayer } from '@/utils/useBGMPlayer'
import { FaCirclePlay } from 'react-icons/fa6'
import { FaRegPlayCircle } from 'react-icons/fa'
import IntroFullScreenSection from '@/components/sections/IntroFullScreenSection'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const {
    weddingDate,
    gallery,
    map,
    intro,
    invitation,
    bgm,
    couple,
    mainImage,
    account,
    charterBus,
    meta,
  } = config
  const [showIntro, setShowIntro] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { toggle, isPlaying, start } = useBGMPlayer(bgm, false)

  const handleClick = () => {
    setShowIntro(false)
  }

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'

      const preventScroll = (e: TouchEvent) => {
        e.preventDefault()
      }

      document.addEventListener('touchmove', preventScroll, { passive: false })

      return () => {
        document.removeEventListener('touchmove', preventScroll)
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.height = ''

      setTimeout(() => {
        start()
      }, 500)
    }
  }, [showIntro, start])

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <IntroFullScreenSection onClick={handleClick} intro={intro} />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={() => toggle()}
        className="flex justify-end items-center gap-1 mr-4"
      >
        BGM 재생 {isPlaying ? <FaCirclePlay /> : <FaRegPlayCircle />}
      </div>
      <div className="flex flex-col gap-y-25 py-15">
        <MainSection
          meta={meta}
          weddingDate={weddingDate}
          couple={couple}
          mainImage={mainImage}
        />
        <InvitationSection invitation={invitation} couple={couple} />
        <GallerySection images={gallery} />
        <CalendarSection
          {...weddingDate}
          groom={couple.groom.name}
          bride={couple.bride.name}
        />
        <MapSection map={map} charterBus={charterBus} />
        <AccountSection accountConfig={account} couple={couple} />
      </div>
    </>
  )
}
