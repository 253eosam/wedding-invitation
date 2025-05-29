import { useState } from 'react'
import { TiArrowDownThick } from 'react-icons/ti'
import Masonry from 'react-masonry-css'

const heightMap = {
  1: 160,
  2: 280,
}

const images = [
  { src: 'https://picsum.photos/id/101/400/600', height: 2 },
  { src: 'https://picsum.photos/id/102/400/300', height: 1 },
  { src: 'https://picsum.photos/id/103/400/300', height: 1 },
  { src: 'https://picsum.photos/id/104/400/600', height: 2 },
  { src: 'https://picsum.photos/id/105/400/300', height: 1 },
  { src: 'https://picsum.photos/id/106/400/300', height: 1 },
  { src: 'https://picsum.photos/id/107/400/600', height: 2 },
  { src: 'https://picsum.photos/id/108/400/300', height: 1 },
  { src: 'https://picsum.photos/id/109/400/300', height: 1 },
  { src: 'https://picsum.photos/id/110/400/600', height: 2 },
  { src: 'https://picsum.photos/id/101/400/600', height: 2 },
  { src: 'https://picsum.photos/id/102/400/300', height: 1 },
  { src: 'https://picsum.photos/id/103/400/300', height: 1 },
  { src: 'https://picsum.photos/id/104/400/600', height: 2 },
  { src: 'https://picsum.photos/id/105/400/300', height: 1 },
  { src: 'https://picsum.photos/id/106/400/300', height: 1 },
  { src: 'https://picsum.photos/id/107/400/600', height: 2 },
  { src: 'https://picsum.photos/id/108/400/300', height: 1 },
  { src: 'https://picsum.photos/id/109/400/300', height: 1 },
  { src: 'https://picsum.photos/id/110/400/600', height: 2 },
] satisfies { src: string; height: 1 | 2 }[]

const breakpointColumns = {
  default: 2,
  768: 2,
  480: 1,
}

const DEFAULT_PREVIEW_PERCENT = 0.2 as const

export default function GalleryMasonry() {
  const [showAll, setShowAll] = useState(false)
  const previewCount = Math.ceil(images.length * DEFAULT_PREVIEW_PERCENT)
  const visibleImages = showAll ? images : images.slice(0, previewCount)

  return (
    <section className="px-4">
      <h1 className="text-center mb-7.5">
        <p className="font-crimson text-[13px] text-[#f79e9e] tracking-[3px] opacity-60">
          GALLERY
        </p>
        <p className="text-[#f79e9e] text-xl mt-1 font-gowun">우리의 순간</p>
      </h1>

      <Masonry
        breakpointCols={breakpointColumns}
        className={`flex gap-4 transition-[height]`}
        columnClassName="flex flex-col gap-4"
      >
        {visibleImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`image-${idx}`}
            className="rounded w-full object-cover"
            style={{ height: `${heightMap[img.height]}px` }}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/400x200?text=Image+Not+Found'
              target.onerror = null
            }}
          />
        ))}
      </Masonry>

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
    </section>
  )
}
