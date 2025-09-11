export default function Picture({
  className,
  height,
  src,
  width,
  alt,
  style,
  onImageClick,
}: {
  src: string
  extension?: string
  className?: string
  width?: number
  height?: number
  alt?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
  onImageClick?: () => void
}) {
  const excludeExtensionPath = src.split('.').at(0)

  return (
    <picture>
      <source
        srcSet={`${excludeExtensionPath}.webp`}
        type="image/webp"
      ></source>
      <img
        src={src}
        alt={alt ? alt : '이미지'}
        className={className}
        width={width}
        height={height}
        style={style}
        onClick={(e) => {
          e.stopPropagation()
          onImageClick?.()
        }}
      />
    </picture>
  )
}
