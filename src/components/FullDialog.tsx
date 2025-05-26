import { ReactNode } from 'react'

type FullScreenDialogProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function FullScreenDialog({
  isOpen,
  onClose,
  children,
}: FullScreenDialogProps) {
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
