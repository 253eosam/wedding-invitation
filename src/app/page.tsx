'use client'
import MainSection from '@/components/sections/MainSection'
import InvitationSection from '@/components/sections/InvitationSection'
import GallerySection from '@/components/sections/GallerySection'
import CalendarSection from '@/components/sections/CalendarSection'
import MapSection from '@/components/sections/MapSection'
import AccountSection from '@/components/sections/AccountSection'
import { data } from '@/models'

export default function Home() {
  const { weddingDate } = data

  return (
    <div className="flex flex-col gap-y-15 py-15">
      <MainSection />
      <InvitationSection />
      <GallerySection />
      <CalendarSection {...weddingDate} />
      <MapSection />
      <AccountSection />
    </div>
  )
}
