import { useState } from 'react'
import { TiArrowDownThick } from 'react-icons/ti'
import Masonry from 'react-masonry-css'
import type { Image } from '@/models/model'
import { Section } from '../Section'
import { motion } from 'motion/react'
import classNames from 'classnames'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const heightMap = {
  1: 160,
  2: 280,
}
const breakpointColumns = {
  default: 2,
  768: 2,
  480: 1,
}
const DEFAULT_PREVIEW_PERCENT = 0.2 as const

export default function GalleryMasonry({ images }: { images: Image[] }) {
  const [showAll, setShowAll] = useState(false)
  const previewCount = Math.ceil(images.length * DEFAULT_PREVIEW_PERCENT)
  const visibleImages = showAll ? images : images.slice(0, previewCount)

  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const handleImageClick = (src: string, index: number) => {
    setSelectedImg(src)
    setSelectedIndex(index)
  }

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1
      setSelectedIndex(newIndex)
      setSelectedImg(visibleImages[newIndex].src)
    }
  }

  const handleNextImage = () => {
    if (selectedIndex < visibleImages.length - 1) {
      const newIndex = selectedIndex + 1
      setSelectedIndex(newIndex)
      setSelectedImg(visibleImages[newIndex].src)
    }
  }

  return (
    <Section.Container fadeUp className="px-4">
      <h1 className="text-center mb-7.5">
        <p className="font-crimson text-[13px] text-[#f79e9e] tracking-[3px] opacity-60">
          GALLERY
        </p>
        <p className="text-[#f79e9e] text-xl mt-1 font-gowun">우리의 순간</p>
      </h1>

      <motion.div layout transition={{ duration: 0.2 }}>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {visibleImages.map((img, idx) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={`image-${idx}`}
              onClick={() => handleImageClick(img.src, idx)}
              className="rounded w-full object-cover bg-white"
              style={{ height: `${heightMap[img.height]}px` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </Masonry>
      </motion.div>

      {!showAll && (
        <div className="text-center relative">
          <div className="h-[100px] absolute bottom-[100%] left-0 right-0 gradient-fade-up" />
          <button
            className="pt-5 text-sm font-gowun text-[#544f4f] flex gap-1 items-center mx-auto"
            onClick={() => setShowAll(true)}
          >
            더보기 <TiArrowDownThick className="inline-block" />
          </button>
        </div>
      )}

      <Section.Dialog
        isOpen={Boolean(selectedImg)}
        onClose={() => {
          setSelectedImg(null)
          setSelectedIndex(-1)
        }}
      >
        <button
          className={classNames('absolute top-1/2 -translate-y-1/2 left-4')}
          onClick={handlePrevImage}
          disabled={selectedIndex <= 0}
        >
          <MdArrowBackIos
            size={60}
            color={selectedIndex <= 0 ? 'gray' : 'white'}
          />
        </button>
        <div className="flex items-center justify-center h-full w-full">
          <img
            src={selectedImg as string}
            alt="갤러리에서 선택한 이미지가 fullscreen으로 화면에 나옵니다."
            className="h-[100vh] max-w-[85vw] object-contain"
          />
        </div>
        <button
          className={classNames('absolute top-1/2 -translate-y-1/2 right-4')}
          onClick={handleNextImage}
          disabled={selectedIndex >= visibleImages.length - 1}
        >
          <MdArrowForwardIos
            size={60}
            color={selectedIndex >= visibleImages.length - 1 ? 'gray' : 'white'}
          />
        </button>
      </Section.Dialog>
    </Section.Container>
  )
}
