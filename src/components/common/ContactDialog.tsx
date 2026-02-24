import { IoIosCall, IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'

interface ContactMember {
  name: string
  phone: string
}

interface ContactFamily {
  self: ContactMember
  father: ContactMember
  mother: ContactMember
}

export default function ContactDialog({
  open,
  onClose,
  groom,
  bride,
}: {
  open: boolean
  onClose: () => void
  groom: ContactFamily
  bride: ContactFamily
}) {
  const groups = [
    {
      title: '신랑측',
      eng: 'GROOM',
      rows: [
        { label: '신랑', member: groom.self },
        { label: '신랑 아버지', member: groom.father },
        { label: '신랑 어머니', member: groom.mother },
      ],
    },
    {
      title: '신부측',
      eng: 'BRIDE',
      rows: [
        { label: '신부', member: bride.self },
        { label: '신부 아버지', member: bride.father },
        { label: '신부 어머니', member: bride.mother },
      ],
    },
  ]

  return (
    <Section.Dialog isOpen={open} onClose={onClose}>
      <div className="flex flex-col items-center text-[#ccc] text-center overflow-auto h-full">
        <h2 className="mt-[50px]">
          <p className="font-crimson text-xs font-medium text-[#999] tracking-[3px]">
            CONTACT
          </p>
          <p className="font-gowun text-lg font-medium tracking-[2px]">
            연락하기
          </p>
        </h2>
        {groups.map((group) => (
          <div key={group.eng} className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300px] text-start">
              {group.title}
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                {group.eng}
              </span>
            </p>
            <ul>
              {group.rows.map((row) => (
                <li key={row.label} className="my-5 flex">
                  <p className="flex-1/3 text-start ">{row.label}</p>
                  <p className="flex-1/3 text-[15px] text-white">
                    {row.member.name}
                  </p>
                  <div className="flex-1/3 flex justify-end gap-x-5">
                    <a href={`tel:${row.member.phone}`}>
                      <IoIosCall size={20} />
                    </a>
                    <a href={`sms:${row.member.phone}`}>
                      <IoIosMail size={20} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section.Dialog>
  )
}
