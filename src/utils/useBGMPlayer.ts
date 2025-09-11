'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { Howl } from 'howler'

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
    } else start()
  }

  useEffect(() => {
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
