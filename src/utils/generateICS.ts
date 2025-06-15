export const generateICS = ({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string
  description?: string
  location?: string
  startDate: string // YYYY-MM-DDTHH:mm:ss
  endDate: string // YYYY-MM-DDTHH:mm:ss
}) => {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description ?? ''}
LOCATION:${location ?? ''}
DTSTART:${startDate.replace(/[-:]/g, '').split('.')[0]}
DTEND:${endDate.replace(/[-:]/g, '').split('.')[0]}
END:VEVENT
END:VCALENDAR
`.trim()

  const blob = new Blob([icsContent], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  return url
}
