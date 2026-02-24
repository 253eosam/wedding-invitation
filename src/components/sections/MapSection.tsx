import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SiNaver } from 'react-icons/si'
import { MdLock, MdLockOpen } from 'react-icons/md'
import { Section } from '../Section'
import TransportInfoBlock from '@/components/common/TransportInfoBlock'
import type { CharterBusConfig, MapConfig } from '@/models/model'

const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID

const loadNaverScript = (): Promise<void> => {
  return new Promise((resolve) => {
    const existingScript = document.getElementById('naver-map-script')
    if (existingScript) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.id = 'naver-map-script'
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}&callback=CALLBACK_FUNCTION"`
    script.async = true
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

export default function MapSection({
  map,
  charterBus,
}: {
  map: MapConfig
  charterBus: CharterBusConfig | null
}) {
  const {
    position,
    naverMapLink,
    address,
    addressDetail,
    directions: { bus, subway, car },
  } = map
  const { latitude, longitude } = position
  const mapRef = useRef<HTMLDivElement>(null)
  const [isMapInteractive, setIsMapInteractive] = useState(false)

  useEffect(() => {
    loadNaverScript().then(() => {
      const { naver } = window
      if (!naver || !mapRef.current) return

      const instance = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 16,
        draggable: isMapInteractive,
        scrollWheel: isMapInteractive,
        keyboardShortcuts: isMapInteractive,
        disableDoubleClickZoom: !isMapInteractive,
        disableTwoFingerTapZoom: !isMapInteractive,
      })

      new naver.maps.Marker({
        map: instance,
        position: new naver.maps.LatLng(latitude, longitude),
        clickable: false,
      })
    })
  }, [latitude, longitude, isMapInteractive])

  return (
    <Section.Container className="flex flex-col gap-y-6">
      <Section.Title kor="오시는 길" eng="LOCATION" />
      <div>
        <Section.Typography className="text-[20px] text-black">
          {addressDetail}
        </Section.Typography>
        <Section.Typography>{address}</Section.Typography>
      </div>
      <div className="relative">
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
        {!isMapInteractive && (
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
        )}
        <button
          onClick={() => setIsMapInteractive(!isMapInteractive)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
          aria-label={isMapInteractive ? '지도 잠금' : '지도 잠금 해제'}
        >
          {isMapInteractive ? (
            <MdLockOpen className="w-5 h-5 text-gray-700" />
          ) : (
            <MdLock className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
      <Link
        href={naverMapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto inline-block"
      >
        <Section.Button className="flex items-center gap-1">
          <SiNaver className="inline-block" />
          네이버지도
        </Section.Button>
      </Link>
      <div className="text-center flex flex-col gap-6 mx-4 break-keep mt-2">
        <TransportInfoBlock
          title="버스이용시"
          description={`${bus.lines}\n* ${bus.stop}`}
          className="flex flex-col gap-2"
        />
        <TransportInfoBlock title="지하철이용시" description={subway} />
        <TransportInfoBlock title="택시&자가용이용시" description={car} />
        {charterBus && (
          <TransportInfoBlock
            title={charterBus.title}
            description={`${charterBus.stops
              .map((stop) => `• ${stop}`)
              .join('\n')}\n\n※ ${charterBus.notice}`}
            emphasis={charterBus.vehicleInfo}
          />
        )}
      </div>
    </Section.Container>
  )
}
