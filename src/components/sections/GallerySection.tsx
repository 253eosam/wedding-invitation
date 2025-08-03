import { useState } from 'react'
import { Section } from '../Section'
import classNames from 'classnames'
import { Gallery } from '@/models/model'
import { motion } from 'framer-motion'
import Picture from '../ui/picture'

export default function GalleryMasonry({ images }: { images: Gallery[] }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleImageClick = (src: string, index: number) => {
    setSelectedImg(src)
    setSelectedIndex(index)
  }

  const handlePrevImage = () => {
    const newIndex = selectedIndex - 1
    if (0 <= newIndex) {
      setSelectedIndex(newIndex)
      setSelectedImg(images[newIndex].src)
    } else {
      const last = images.length - 1
      setSelectedIndex(last)
      setSelectedImg(images[last].src)
    }
  }

  const handleNextImage = () => {
    const newIndex = selectedIndex + 1
    if (newIndex <= images.length - 1) {
      setSelectedIndex(newIndex)
      setSelectedImg(images[newIndex].src)
    } else {
      const first = 0
      setSelectedIndex(first)
      setSelectedImg(images[first].src)
    }
  }

  return (
    <Section.Container fadeUp className="px-2">
      <h1 className="text-center mb-7.5">
        <p className="font-crimson text-[13px] text-[#f79e9e] tracking-[3px] opacity-60">
          GALLERY
        </p>
        <p className="text-[#f79e9e] text-xl mt-1 font-gowun">우리의 순간</p>
      </h1>

      <div className="grid grid-cols-3 gap-1.5">
        {images.map((image, imageIndex) => (
          <Picture
            onImageClick={() => handleImageClick(image.src, imageIndex)}
            key={image.src}
            src={image.src}
            alt={`갤러리의 ${imageIndex + 1}번째 웨딩 사진`}
            width={125}
            height={125}
            className={classNames(
              'w-[125px] h-[125px] object-cover rounded',
              image.position
            )}
          />
        ))}
      </div>

      <Section.Dialog
        isOpen={Boolean(selectedImg)}
        onClose={() => {
          setSelectedImg(null)
          setSelectedIndex(-1)
        }}
      >
        <motion.div
          key={selectedImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={false}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              handleNextImage()
            } else if (info.offset.x > 100) {
              handlePrevImage()
            }
          }}
        >
          <Picture
            src={selectedImg as string}
            alt="갤러리에서 선택한 이미지가 fullscreen으로 화면에 나옵니다."
            className="h-[100vh] w-full object-contain"
          />
        </motion.div>
      </Section.Dialog>
    </Section.Container>
  )
}
