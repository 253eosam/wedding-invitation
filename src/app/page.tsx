'use client'
import MainSection from '@/components/MainSection'
import IntroSection from '@/components/IntroSection'
import GallerySection from '@/components/GallerySection'
import CalendarSection from '@/components/CalendarSection'
import MapSection from '@/components/MapSection'
import AccountSection from '@/components/AccountSection'
import DB from '@/assets/DB.json'

export default function Home() {
  const { weddingDate } = DB

  return (
    <div className="flex flex-col gap-y-15 py-15">
      <MainSection />
      <IntroSection />
      <GallerySection />
      <CalendarSection weddingDate={weddingDate} />
      <MapSection />
      <AccountSection />
    </div>
  )
}
