import classNames from 'classnames'
import {
  forwardRef,
  HTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
  useEffect,
} from 'react'
import { motion, MotionProps } from 'framer-motion'

const fadeUpMotionProps = {
  initial: 'hidden',
  whileInView: 'show',
  variants: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  },
  viewport: { once: true, amount: 0.3 },
} satisfies MotionProps

const SectionContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & MotionProps & { fadeUp?: boolean }
>(({ children, className, fadeUp, ...props }, ref) => {
  let allProps = props
  if (fadeUp) allProps = { ...fadeUpMotionProps, ...allProps }

  return (
    <motion.section ref={ref} className={classNames(className)} {...allProps}>
      {children}
    </motion.section>
  )
})
SectionContainer.displayName = 'SectionContainer'

const SectionTitle = ({ kor, eng }: { kor: string; eng: string }) => {
  return (
    <motion.div className="text-center text-primary" {...fadeUpMotionProps}>
      <h2 className="font-eng uppercase text-sm  tracking-[3] opacity-60">
        {eng}
      </h2>
      <h1 className="font-kor text-xl mt-3 tracking-[0.5]">{kor}</h1>
    </motion.div>
  )
}

const SectionTypography = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & MotionProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.p
      {...fadeUpMotionProps}
      ref={ref}
      className={classNames(
        'font-gowun text-[#544f4f] text-sm text-center leading-7.5 font-normal',
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  )
})
SectionTypography.displayName = 'SectionTypography'

const SectionButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & MotionProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      {...fadeUpMotionProps}
      ref={ref}
      className={classNames(
        'border border-[#eeeeee] bg-white py-2 px-7.5 rounded-xl text-[#404040] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
})
SectionButton.displayName = 'SectionButton'

const SectionDialog = ({
  isOpen = false,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div
      {...fadeUpMotionProps}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#382C30D6]"
      role="dialog"
      aria-modal="true"
      aria-label="Section Dialog"
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.y > 100) {
            onClose()
          }
        }}
        dragElastic={0.2}
        className="w-full h-full"
      >
        <button
          className="absolute top-4 right-4 text-[#ccc] w-11 h-11 text-2xl"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </motion.div>
  )
}

const SectionImg = forwardRef<
  HTMLImageElement,
  MotionProps & ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => <motion.img ref={ref} {...fadeUpMotionProps} {...props} />)
SectionImg.displayName = 'SectionImg'

export const Section = {
  Container: SectionContainer,
  Title: SectionTitle,
  Typography: SectionTypography,
  Button: SectionButton,
  Dialog: SectionDialog,
  Image: SectionImg,
}
