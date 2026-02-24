import classNames from 'classnames'
import { Section } from '@/components/Section'

export default function TransportInfoBlock({
  title,
  description,
  emphasis,
  className,
}: {
  title: string
  description: string
  emphasis?: string
  className?: string
}) {
  return (
    <div className={classNames('flex flex-col gap-2', className)}>
      <p>{title}</p>
      <Section.Typography className="whitespace-pre-line">
        {description}
        {emphasis && (
          <>
            {'\n'}
            <span className="underline underline-offset-2">※ {emphasis}</span>
          </>
        )}
      </Section.Typography>
    </div>
  )
}
