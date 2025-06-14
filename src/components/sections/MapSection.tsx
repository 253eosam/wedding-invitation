import { MapInfo } from '@/models/model'
import { useEffect, useRef } from 'react'
import { Section } from '../Section'
import Link from 'next/link'

const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID

const loadNaverScript = (): Promise<void> => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.id = 'naver-map-script'
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}&callback=CALLBACK_FUNCTION"`
    script.async = true
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

export default function MapSection({ position, name }: MapInfo) {
  const { latitude, longitude } = position
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadNaverScript().then(() => {
      const { naver } = window
      if (!naver || !mapRef.current) return

      // const map = new naver.maps.Map(mapRef.current, {
      //   center: new naver.maps.LatLng(latitude, longitude),
      //   zoom: 15,
      // })

      // new naver.maps.Marker({
      //   map,
      //   position: new naver.maps.LatLng(latitude, longitude),
      //   clickable: false,
      // })
    })
  }, [latitude, longitude])

  return (
    <div className="flex flex-col gap-y-6">
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      <Link
        href={`https://map.kakao.com/link/map/${name},${latitude},${longitude}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Section.Button className="mx-9">바로가기</Section.Button>
      </Link>
    </div>
  )
}
