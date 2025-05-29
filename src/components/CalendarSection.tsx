import Calendar from './ui/calendar'
import classNames from 'classnames'

export default function CalendarSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="text-secondary">
        <h2 className="text-2xl">2025.11.09</h2>
        <p className="text-medium mt-2">토요일 오전 11시 30분</p>
      </div>
      <div className="my-9 w-full">
        <Calendar />
      </div>
      <div className="flex flex-row justify-center gap-0.5">
        <DateUnit value="120" name="DAYS" />
        <DateUnit />
        <DateUnit value="120" name="HOUR" />
        <DateUnit />
        <DateUnit value="120" name="MIN" />
        <DateUnit />
        <DateUnit value="120" name="SEC" />
      </div>
      <p className="mt-4 font-bold text-[#666666]">
        성준, 주희의 결혼식이 <strong className="text-highlight">100</strong>일
        남았습니다.
      </p>
    </section>
  )
}

const DateUnit = ({
  name = '\u00A0',
  value = ':',
}: {
  name?: string
  value?: string
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col font-crimson',
        value === ':' ? 'min-w-2 text-base' : 'min-w-8 text-2xl'
      )}
    >
      <p className="text-primary opacity-40 text-[10px] uppercase">{name}</p>
      <p className="text-primary opacity-80">{value}</p>
    </div>
  )
}
