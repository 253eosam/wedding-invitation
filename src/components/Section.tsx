import classNames from 'classnames'
import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react'

const SectionTitle = ({ kor, eng }: { kor: string; eng: string }) => {
  return (
    <h1 className="text-center text-primary">
      <p className="font-eng uppercase text-sm  tracking-[3] opacity-60">
        {eng}
      </p>
      <p className="font-kor text-xl mt-3 tracking-[0.5]">{kor}</p>
    </h1>
  )
}

const SectionTypography = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <p
      ref={forwardRef}
      className={classNames(
        'font-gowun text-[#544f4f] text-sm text-center leading-7.5 font-normal',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
SectionTypography.displayName = 'SectionTypography'

const SectionButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <button
      ref={forwardRef}
      className={classNames(
        'border border-[#eeeeee] bg-white py-2 px-7.5 rounded-xl text-[#404040] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </button>
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#382C30D6]"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full h-full backdrop-blur-sm">
        <button
          className="absolute top-4 right-4 text-[#ccc] w-11 h-11 text-2xl"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default {
  Title: SectionTitle,
  Typography: SectionTypography,
  Button: SectionButton,
  Dialog: SectionDialog,
}
