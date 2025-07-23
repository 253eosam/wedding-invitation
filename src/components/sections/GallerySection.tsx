import { useState } from 'react'
import { Section } from '../Section'
import classNames from 'classnames'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const DEFAULT_PREVIEW_PERCENT = 0.2 as const

export default function GalleryMasonry({ images }: { images: string[] }) {
  const previewCount = Math.ceil(images.length * DEFAULT_PREVIEW_PERCENT)

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
      setSelectedImg(images[newIndex])
    }
  }

  const handleNextImage = () => {
    if (selectedIndex < images.length - 1) {
      const newIndex = selectedIndex + 1
      setSelectedIndex(newIndex)
      setSelectedImg(images[newIndex])
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
          disabled={selectedIndex >= images.length - 1}
        >
          <MdArrowForwardIos
            size={60}
            color={selectedIndex >= images.length - 1 ? 'gray' : 'white'}
          />
        </button>
      </Section.Dialog>
    </Section.Container>
  )
}
