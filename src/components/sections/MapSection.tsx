import { MapInfo } from '@/models/model'
import { useEffect, useRef } from 'react'
import { Section } from '../Section'
import Link from 'next/link'

export default function MapSection({ position, name }: MapInfo) {
  const { latitude, longitude } = position
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const loadScript = () => {
      return new Promise<void>((resolve) => {
        if (document.getElementById('kakao-map-script')) return resolve()
        const script = document.createElement('script')
        script.id = 'kakao-map-script'
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`
        script.onload = () => {
          window.kakao.maps.load(() => {
            resolve()
          })
        }
        document.head.appendChild(script)
      })
    }

    const initMap = async () => {
      await loadScript()

      if (!mapRef.current) return
      if (!window.kakao) return
      const container = mapRef.current
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      }
      new window.kakao.maps.Map(container, options)
    }

    initMap()
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
