'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { Howl, Howler } from 'howler'

export function useBGMPlayer(src: string, autoPlay: boolean = false) {
  const soundRef = useRef<Howl | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const start = useCallback(() => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [src],
        loop: true,
        volume: 0.4,
        preload: true,
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onplayerror: () => {
          // Howler.js 내장 unlock 메커니즘 사용
          Howler.autoUnlock = true
        },
      })
    }

    const id = soundRef.current.play()

    // fallback (일부 브라우저는 이벤트 안 타는 경우 대비)
    if (typeof id === 'number') {
      setIsPlaying(true)
    }
  }, [src])

  const stop = useCallback(() => {
    if (soundRef.current?.playing()) {
      soundRef.current.stop()
      setIsPlaying(false)
    }
  }, [])

  const toggle = () => {
    if (isPlaying) {
      stop()
    } else {
      start()
    }
  }

  useEffect(() => {
    // Howler.js autoUnlock 활성화 - 사용자 제스처 후 자동으로 AudioContext unlock
    Howler.autoUnlock = true

    if (autoPlay) {
      start()
    }

    return () => {
      stop()
      soundRef.current?.unload()
    }
  }, [start, stop, autoPlay])

  return { toggle, isPlaying, start }
}
