import { MapInfo } from '@/models/model'
import { useEffect, useRef } from 'react'
import { Section } from '../Section'
import Link from 'next/link'
import { SiNaver } from 'react-icons/si'

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

  useEffect(() => {
    loadNaverScript().then(() => {
      const { naver } = window
      if (!naver || !mapRef.current) return

      const map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 16,
      })

      new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(latitude, longitude),
        clickable: false,
      })
    })
  }, [latitude, longitude])

  return (
    <Section.Container className="flex flex-col gap-y-6">
      <Section.Title kor="오시는 길" eng="LOCATION" />
      <div>
        <Section.Typography className="text-[20px] text-black">
          {addressDetail}
        </Section.Typography>
        <Section.Typography>{address}</Section.Typography>
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
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
          <Section.Typography>준비중입니다. 🙇‍♂️</Section.Typography>
        </div>
      </div>
    </Section.Container>
  )
}
