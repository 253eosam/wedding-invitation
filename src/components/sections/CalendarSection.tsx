import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

import Calendar from '../ui/calendar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'

export default function CalendarSection({
  year,
  month,
  day,
  time,
}: WeddingDate) {
  const marryDate = dayjs(`${year}.${month}.${day} ${time.hour}:${time.minute}`)

  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const diff = marryDate.diff(now, 'day')
  const diffHours = marryDate.diff(now, 'hour') % 24
  const diffMinutes = marryDate.diff(now, 'minute') % 60
  const diffSeconds = marryDate.diff(now, 'second') % 60

  return (
    <section className="flex flex-col items-center text-center">
      <div className="text-secondary">
        <h2 className="text-2xl">{marryDate.format('YYYY.MM.DD')}</h2>
        <p className="text-medium mt-2">
          {marryDate.format('dddd')} {marryDate.format('A hh시 mm분')}
        </p>
      </div>
      <div className="my-9 w-full">
        <Calendar dday={marryDate} />
      </div>
      <div className="flex flex-row justify-center gap-0.5">
        <DateUnit value={diff.toString()} name="DAYS" />
        <DateUnit />
        <DateUnit value={diffHours.toString()} name="HOUR" />
        <DateUnit />
        <DateUnit value={diffMinutes.toString()} name="MIN" />
        <DateUnit />
        <DateUnit value={diffSeconds.toString()} name="SEC" />
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
