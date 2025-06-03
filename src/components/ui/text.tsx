import classNames from 'classnames'
import { forwardRef, HTMLAttributes } from 'react'

const TitleKor = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <p
      ref={forwardRef}
      className={classNames(
        'font-kor text-[#f79e9e] text-xl tracking-[0.5px] h-10',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
TitleKor.displayName = 'Text.TitleKor'

const TitleEng = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <p
      ref={forwardRef}
      className={classNames(
        'font-kor text-[#f79e9e] text-xl tracking-[0.5px] h-10',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
})
TitleEng.displayName = 'Text.TitleEng'

const Text = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, forwardRef) => {
  return (
    <p
      ref={forwardRef}
      className={classNames('font-kor text-[15px]', className)}
      {...props}
    >
      {children}
    </p>
  )
})
Text.displayName = 'Text'

export default {
  TitleKor,
  TitleEng,
}
