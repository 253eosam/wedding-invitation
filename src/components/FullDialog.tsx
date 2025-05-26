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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full h-full bg-[rgba(56, 44, 48, .84)] p-4 backdrop-blur-sm">
        <button
          className="absolute top-4 right-4 text-white w-11 h-11 text-2xl"
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
