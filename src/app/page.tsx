'use client'
import MainSection from '@/components/sections/MainSection'
import InvitationSection from '@/components/sections/InvitationSection'
import GallerySection from '@/components/sections/GallerySection'
import CalendarSection from '@/components/sections/CalendarSection'
import MapSection from '@/components/sections/MapSection'
import AccountSection from '@/components/sections/AccountSection'
import { data } from '@/models'
import { useBGMPlayer } from '@/utils/useBGMPlayer'
import { FaCirclePlay } from 'react-icons/fa6'
import { FaRegPlayCircle } from 'react-icons/fa'

export default function Home() {
  const { weddingDate, families, gallery, map, images, bgm } = data
  const { toggle, isPlaying } = useBGMPlayer(bgm)

  const groom = families.find(
    (person) => person.gender === 'groom' && person.relation === 'self'
  )
  const bride = families.find(
    (person) => person.gender === 'bride' && person.relation === 'self'
  )
  const groomFamily = families.filter((person) => person.gender === 'groom')
  const brideFamily = families.filter((person) => person.gender === 'bride')

  return (
    <>
      <div
        onClick={() => toggle()}
        className="flex justify-end items-center gap-1 mr-4"
      >
        BGM 재생 {isPlaying ? <FaCirclePlay /> : <FaRegPlayCircle />}
      </div>
      <div className="flex flex-col gap-y-25 py-15">
        <MainSection {...data} />
        <InvitationSection
          images={images}
          groomFamily={groomFamily}
          brideFamily={brideFamily}
        />
        <GallerySection images={gallery} />
        <CalendarSection
          {...weddingDate}
          groom={groom?.name}
          bride={bride?.name}
        />
        <MapSection {...map} />
        <AccountSection families={families} />
      </div>
    </>
  )
}
