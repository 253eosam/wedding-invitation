import { names, contents, contacts } from '@/models/DB.json'
import { useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { IoCall } from 'react-icons/io5'

export default function IntroSection() {
  const [open, setOpen] = useState(false)

  return (
    <Section.Container className="flex flex-col items-center my-10">
      <Section.Title kor="소중한 분들을 초대합니다." eng="INVITATION" />
      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {contents.map((content) => (
          <Section.Typography key={content}>{content}</Section.Typography>
        ))}
      </div>
      <Section.Image
        src="https://placehold.co/360x240"
        alt=""
        className="rounded-2xl"
      />
      <div className="font-gowun mt-6 mb-4 text-[#444]">
        <p className="flex gap-0.5">
          {names.groom.dad}
          <span className="text-[#777]">·</span>
          {names.groom.mom}
          <span className="text-[#777] mr-1">의 장남 </span>
          {names.groom.me}
        </p>
        <p className="flex gap-0.5">
          {names.bride.dad}
          <span className="text-[#777]">·</span>
          {names.bride.mom}
          <span className="text-[#777] mr-1">의 차녀 </span>
          {names.bride.me}
        </p>
      </div>
      <Section.Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2"
      >
        <IoCall size={16} />
        연락하기
      </Section.Button>

      <Section.Dialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-[#ccc] text-center overflow-auto h-full">
          <h2 className="mt-[50px]">
            <p className="font-crimson text-xs font-medium text-[#999] tracking-[3px]">
              CONTACT
            </p>
            <p className="font-gowun text-lg font-medium tracking-[2px]">
              연락하기
            </p>
          </h2>
          <div className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300] text-start">
              신랑측
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                GROOM
              </span>
            </p>
            <ul>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신랑</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.groom.me}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.groom.me}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.groom.me}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신랑 아버지</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.groom.dad}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.groom.dad}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.groom.dad}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신랑 어머니</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.groom.mom}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.groom.mom}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.groom.mom}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-15 font-gowun text-sm">
            <p className="border-b-1 border-dotted border-gray-400 pb-2.5 w-[300] text-start">
              신부측
              <span className="text-[#999] text-xs align-bottom ml-1 tracking-[3px]">
                BRIDE
              </span>
            </p>
            <ul>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신부</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.bride.me}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.bride.me}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.bride.me}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신부 아버지</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.bride.dad}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.bride.dad}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.bride.dad}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신부 어머니</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {names.bride.mom}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${contacts.bride.mom}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${contacts.bride.mom}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section.Dialog>
    </Section.Container>
  )
}
