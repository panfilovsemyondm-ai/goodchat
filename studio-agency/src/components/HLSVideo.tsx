import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
  desaturated?: boolean
}

export default function HLSVideo({ src, className, style, desaturated }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls({ autoStartLoad: true, lowLatencyMode: false })
        hls.loadSource(src)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {})
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
        video.play().catch(() => {})
      }
    } else {
      video.src = src
      video.play().catch(() => {})
    }

    return () => {
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={desaturated ? { ...style, filter: 'saturate(0)' } : style}
    />
  )
}
