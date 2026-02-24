import { Section } from '@/components/Section'

export default function ImagePair({
  images,
  altPrefix = '초대 이미지',
}: {
  images: string[]
  altPrefix?: string
}) {
  return (
    <div className="flex gap-2 mx-2">
      {images.slice(0, 2).map((src, idx) => (
        <div key={src} className="flex flex-col gap-4">
          <Section.Image
            src={src}
            alt={`${altPrefix} ${idx + 1}`}
            className="rounded-2xl w-[200px] h-[280px] object-cover object-bottom"
            width={200}
            height={280}
          />
        </div>
      ))}
    </div>
  )
}
