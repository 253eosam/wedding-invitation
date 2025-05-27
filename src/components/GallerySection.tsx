export default function GallerySection() {
  const images = Array.from({ length: 20 }, (_, i) => {
    const isVertical = i % 2 === 0
    return {
      // id 범위: 0~1000 사이 권장 (https://picsum.photos/images)
      src: `https://picsum.photos/id/${100 + i}/${1280}/${isVertical ? 1920 : 583}`,
      height: isVertical
        ? 280 + (i % 5) * 10 // 세로형 높이 다양화
        : 150 + (i % 5) * 10, // 가로형 높이 다양화
    }
  })

  return (
    <div>
      <h1 className="text-center mb-7.5">
        <p className="font-crimson text-[13px] text-[#f79e9e] tracking-[3px] opacity-60">
          GALLERY
        </p>
        <p className="text-[#f79e9e] text-xl mt-1 font-gowun">우리의 순간</p>
      </h1>
      <div className="columns-2 gap-4 space-y-4 px-5">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`image-${idx}`}
            className="w-full object-cover rounded"
            style={{ height: `${img.height}px` }}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/400x200?text=Image+Not+Found'
              target.onerror = null
            }}
          />
        ))}
      </div>
    </div>
  )
}
