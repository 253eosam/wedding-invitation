import { MapInfo } from '@/models/model'
import { useEffect, useRef, useState } from 'react'
import { Section } from '../Section'
import Link from 'next/link'
import { SiNaver } from 'react-icons/si'
import { MdLock, MdLockOpen } from 'react-icons/md'

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

export default function MapSection({
  position,
  link,
  address,
  addressDetail,
}: MapInfo) {
  const { latitude, longitude } = position
  const mapRef = useRef<HTMLDivElement>(null)
  const [isMapInteractive, setIsMapInteractive] = useState(false)

  useEffect(() => {
    loadNaverScript().then(() => {
      const { naver } = window
      if (!naver || !mapRef.current) return

      const map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 16,
        draggable: isMapInteractive,
        scrollWheel: isMapInteractive,
        keyboardShortcuts: isMapInteractive,
        disableDoubleClickZoom: !isMapInteractive,
        disableTwoFingerTapZoom: !isMapInteractive,
      })

      new naver.maps.Marker({
        map,
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
        href={link}
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
        <div className="flex flex-col gap-2">
          <p>버스이용시</p>
          <Section.Typography>
            119번, 201번, 202번, 311번, 314번, 513번, 608번, 613번, 618번,
            200번, 612번, 급행1, 2002, 33번
          </Section.Typography>
          <Section.Typography>* 서대전 내거리에서 하차</Section.Typography>
        </div>
        <div>
          <p>지하철이용시</p>
          <Section.Typography>
            서대전네거리역 2번출구에서 도보10분 좌측
          </Section.Typography>
        </div>
        <div>
          <p>택시&자가용이용시</p>
          <Section.Typography>
            네비게이션에 BMK웨딩홀 입력후 주차장이용
          </Section.Typography>
        </div>
        <div>
          <p>버스대절 (대구)</p>
          <Section.Typography>
            • 북구어울아트센터 10시
            <br />• 용산역5번출구 성서홈플러스 10시30분
          </Section.Typography>
        </div>
      </div>
    </Section.Container>
  )
}
