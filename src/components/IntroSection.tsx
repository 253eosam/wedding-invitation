import { names, contents, contacts } from '@/assets/DB.json'
import { useState } from 'react'
import FullScreenDialog from '@/components/FullDialog'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'

export default function IntroSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="flex flex-col items-center my-10">
      <h1 className="text-center">
        <p className="font-crimson text-sm text-[#f79e9e] tracking-[3px] opacity-60">
          INVITATION
        </p>
        <p className="text-[#f79e9e] text-xl mt-3 font-gowun">
          소중한 분들을 초대합니다.
        </p>
      </h1>
      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {contents.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
      <img src="https://placehold.co/360x240" alt="" className="rounded-2xl" />
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
      <button
        onClick={() => setOpen(true)}
        className="border border-[#eeeeee] bg-white py-[9px] px-[30px] rounded-xl text-[#404040] font-gowun w-[190px]"
      >
        연락하기
      </button>

      <FullScreenDialog isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center text-[#ccc] text-center">
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
        </div>
      </FullScreenDialog>
    </section>
  )
}
