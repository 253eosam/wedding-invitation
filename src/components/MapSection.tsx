import { useEffect, useRef } from 'react'

export default function MapSection({
  latitude = 33.450701,
  longitude = 126.570667,
}: {
  latitude?: number
  longitude?: number
}) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
}
