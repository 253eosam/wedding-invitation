import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import Calendar from '../ui/calendar'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { WeddingDate } from '@/models/model'
import { Section } from '../Section'

export default function CalendarSection({
  year,
  month,
  day,
  time,
  groom = '신랑',
  bride = '신부',
}: WeddingDate & { [person in 'groom' | 'bride']?: string }) {
  // AM/PM을 24시간 형식으로 변환
  const hour24 =
    time.amPm === 'pm' && time.hour < 12
      ? time.hour + 12
      : time.amPm === 'am' && time.hour === 12
        ? 0
        : time.hour
  const marryDate = dayjs(
    `${year}/${month}/${day} ${hour24}:${time.minute}`,
    'YYYY/MM/DD HH:mm'
  )

  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const isPast = marryDate.isBefore(now)
  const diff = Math.abs(marryDate.diff(now, 'day'))
  const diffHours = Math.abs(marryDate.diff(now, 'hour') % 24)
  const diffMinutes = Math.abs(marryDate.diff(now, 'minute') % 60)
  const diffSeconds = Math.abs(marryDate.diff(now, 'second') % 60)

  return (
    <Section.Container className="text-center flex flex-col gap-y-9">
      <Section.Title kor="날짜" eng="CALENDAR" />
      <div className="text-secondary">
        <h2 className="text-2xl">{marryDate.format('YYYY.MM.DD')}</h2>
        <p className="text-medium mt-2">
          {marryDate.locale('ko').format('dddd')} {time.amPm.toUpperCase()}{' '}
          {marryDate.format('hh시 mm분')}
        </p>
      </div>
      <div className="w-full">
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
        {groom}, {bride}의 결혼식{isPast ? '이 ' : '이 '}
        <strong className="text-highlight">{diff}</strong>일{' '}
        {isPast ? '지났습니다.' : '남았습니다.'}
      </p>
    </Section.Container>
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
        'flex flex-col font-crimson text-[#2b2222]',
        value === ':' ? 'min-w-2 text-base' : 'min-w-8 text-2xl'
      )}
    >
      <p className="opacity-40 text-[10px] uppercase">{name}</p>
      <p className="opacity-80">{value}</p>
    </div>
  )
}
