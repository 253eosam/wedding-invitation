import data from '@/models/data'

export default function IntroFullScreenSection() {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-amber-50">
          <img
            src={data.gallery[0].src}
            alt="intro"
            style={{ objectFit: 'cover' }}
            className="h-full"
          />
        </div>
      </div>
    </div>
  )
}
