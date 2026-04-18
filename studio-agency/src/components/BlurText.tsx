import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  direction?: 'bottom' | 'top'
}

export default function BlurText({
  text,
  className,
  delay = 100,
  direction = 'bottom',
}: BlurTextProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const yInitial = direction === 'bottom' ? 50 : -50

  return (
    <div ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: yInitial }}
          animate={
            isInView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [yInitial, -5, 0],
                }
              : { filter: 'blur(10px)', opacity: 0, y: yInitial }
          }
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
