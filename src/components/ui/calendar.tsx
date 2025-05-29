import { useState } from 'react'
import dayjs from 'dayjs'
import classNames from 'classnames'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Calendar() {
  const [current, setCurrent] = useState(dayjs())

  const startOfMonth = current.startOf('month')
  const startDay = startOfMonth.day() // 시작 요일 (0:일~6:토)
  const daysInMonth = current.daysInMonth()

  const today = dayjs()

  const prevMonth = () => setCurrent(current.subtract(1, 'month'))
  const nextMonth = () => setCurrent(current.add(1, 'month'))

  const dates = []

  for (let i = 0; i < startDay; i++) {
    dates.push(null) // 앞 공백
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(current.date(i))
  }
  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-gray-500 hover:text-black">
          &lt;
        </button>
        <div className="font-semibold text-lg">
          {current.format('MMMM YYYY')}
        </div>
        <button onClick={nextMonth} className="text-gray-500 hover:text-black">
          &gt;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-1">
        {weekdays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center gap-y-2">
        {dates.map((date, idx) => {
          const isToday = date?.isSame(today, 'day')

          return (
            <div
              key={idx}
              className={classNames(
                'h-10 flex items-center justify-center rounded cursor-pointer',
                !date && 'opacity-0',
                isToday && 'bg-blue-500 text-white font-bold'
              )}
              onClick={() => date && alert(date.format('YYYY-MM-DD'))}
            >
              {date?.date()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
