'use client'
import MainSection from '@/components/sections/MainSection'
import InvitationSection from '@/components/sections/InvitationSection'
import GallerySection from '@/components/sections/GallerySection'
import CalendarSection from '@/components/sections/CalendarSection'
import MapSection from '@/components/sections/MapSection'
import AccountSection from '@/components/sections/AccountSection'
import DB from '@/assets/DB.json'

export default function Home() {
  const { weddingDate } = DB

  return (
    <div className="flex flex-col gap-y-15 py-15">
      <MainSection />
      <InvitationSection />
      <GallerySection />
      <CalendarSection weddingDate={weddingDate} />
      <MapSection />
      <AccountSection />
    </div>
  )
}
