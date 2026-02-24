import { useState, useEffect } from 'react'
import { Section } from '../Section'
import classNames from 'classnames'
import type { GalleryItem } from '@/models/model'
import Picture from '../ui/picture'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GalleryMasonry({ images }: { images: GalleryItem[] }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleImageClick = (src: string, index: number) => {
    setSelectedImg(src)
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedImg(null)
    setSelectedIndex(-1)
  }

  useEffect(() => {
    if (!selectedImg) {
      setSelectedIndex(-1)
    }
  }, [selectedImg])

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

      <Section.Dialog isOpen={Boolean(selectedImg)} onClose={handleClose}>
        <div
          className="w-full h-full z-10"
          onClick={(e) => e.stopPropagation()}
          style={
            {
              '--swiper-pagination-fraction-color': 'white',
            } as React.CSSProperties
          }
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={true}
            pagination={{
              type: 'fraction',
            }}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            initialSlide={selectedIndex}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={300}
            resistance={false}
            resistanceRatio={0}
            onDestroy={handleClose}
            onSlideChange={(swiper) => {
              if (swiper.destroyed) return
              setSelectedIndex(swiper.realIndex)
              setSelectedImg(images[swiper.realIndex].src)
            }}
            allowTouchMove={true}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={true}
            simulateTouch={true}
            touchRatio={1}
            touchAngle={45}
            threshold={10}
            longSwipes={false}
            shortSwipes={true}
            longSwipesMs={300}
            className="w-full h-full gallery-swiper"
            style={
              {
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                '--swiper-navigation-size': '28px',
                '--swiper-pagination-fraction-color': '#fff',
              } as React.CSSProperties
            }
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={image.src}
                className="flex items-center justify-center"
              >
                <Picture
                  src={image.src}
                  alt={`갤러리 ${index + 1}번째 이미지`}
                  className="h-[100vh] w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .gallery-swiper .swiper-pagination-fraction {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
              font-weight: 600 !important;
            }
          `}</style>
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
