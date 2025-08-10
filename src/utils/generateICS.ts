// 1) ICS 생성: UTC(Z)로 변환, 필수 필드 추가, CRLF 보장
export const generateICS = ({
  title,
  description,
  location,
  startDate, // "YYYY-MM-DDTHH:mm:ss" (로컬 기준)
  endDate, // "YYYY-MM-DDTHH:mm:ss" (로컬 기준)
}: {
  title: string
  description?: string
  location?: string
  startDate: string
  endDate: string
}) => {
  const toICSDateUTC = (localISO: string) =>
    new Date(localISO).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const escapeText = (v?: string) =>
    (v ?? '')
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;')

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//yourapp//calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${crypto.randomUUID?.() ?? String(Date.now())}@yourapp`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `SUMMARY:${escapeText(title)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(location)}`,
    `DTSTART:${toICSDateUTC(startDate)}`,
    `DTEND:${toICSDateUTC(endDate)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  // ICS는 CRLF(\r\n) 라인 엔딩을 권장
  const icsContent = lines.join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  return url
}

// 2) 클릭 시 다운로드 트리거
export const downloadAndOpenICS = (icsUrl: string, filename = 'event.ics') => {
  const a = document.createElement('a')
  a.href = icsUrl
  a.download = filename

  // iOS Safari 대응: DOM에 붙였다가 클릭
  document.body.appendChild(a)
  a.click()

  // 메모리 정리
  setTimeout(() => {
    URL.revokeObjectURL(icsUrl)
    a.remove()
  }, 30_000)
}
