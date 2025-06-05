import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import { memo } from 'react'

const weekdays = ['일', '월', '화', '수', '목', '금', '토']

export default memo(function Calendar({ dday }: { dday: Dayjs }) {
  const startOfMonth = dday.startOf('month')
  const startDay = startOfMonth.day() // 시작 요일 (0:일~6:토)
  const daysInMonth = startOfMonth.daysInMonth()

  const dates = []

  for (let i = 0; i < startDay; i++) {
    dates.push(null) // 앞 공백
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(startOfMonth.date(i))
  }
  return (
    <div className="w-[280px] border-y border-[#eee] py-4 mx-auto">
      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-[#544f4f] mb-1">
        {weekdays.map((d) => {
          const isSunday = d === weekdays[0]
          return (
            <div key={d} className={classNames({ 'text-[#f79e9e]': isSunday })}>
              {d}
            </div>
          )
        })}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center text-[#544f4f]">
        {dates.map((date, idx) => {
          const dDay = date?.isSame(dday, 'day')
          const isSunday = date?.day() === 0
          return (
            <div
              key={idx}
              className={classNames(
                'h-10 flex items-center justify-center rounded',
                !date && 'opacity-0',
                dDay && 'bg-[#f79e9e] text-white font-bold rounded-full',
                isSunday && 'text-[#f79e9e]'
              )}
            >
              {date?.date()}
            </div>
          )
        })}
      </div>
    </div>
  )
})
