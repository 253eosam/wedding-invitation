import { useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { Section } from '@/components/Section'
import { IoCall } from 'react-icons/io5'
import { OtherSectionImage, Person } from '@/models/model'

export default function IntroSection({
  brideFamily,
  groomFamily,
  images,
}: {
  groomFamily: Person[]
  brideFamily: Person[]
  images: OtherSectionImage
}) {
  const [open, setOpen] = useState(false)
  const contents = [
    '100년 동안 당신을 모르고 사는 것보다,\n당신을 알고 지금 죽는게 더 나아요.\n\n- 디즈니, <포카혼타스> 中 -',
    '-',
    '평생 서로 귀하게 여기며\n첫 마음 그대로 존중하고\n배려하며 살겠습니다.',
    '오로지 믿음과 사랑을 약속하는 날\n오셔서 축복해 주시면 더 없는 기쁨으로\n간직하겠습니다.',
  ]
  const groomSelf = groomFamily.find(({ relation }) => relation === 'self')
  const groomFather = groomFamily.find(({ relation }) => relation === 'father')
  const groomMother = groomFamily.find(({ relation }) => relation === 'mother')
  const brideSelf = brideFamily.find(({ relation }) => relation === 'self')
  const brideFather = brideFamily.find(({ relation }) => relation === 'father')
  const brideMother = brideFamily.find(({ relation }) => relation === 'mother')

  return (
    <Section.Container className="flex flex-col items-center">
      <Section.Title kor="소중한 분들을 초대합니다." eng="INVITATION" />
      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {contents.map((content) => (
          <Section.Typography key={content}>{content}</Section.Typography>
        ))}
      </div>
      <Section.Image src={images.invitation} alt="" className="rounded-2xl" />
      <div className="font-gowun mt-6 mb-4 text-[#444]">
        <p className="flex gap-0.5">
          {groomFather?.name}
          <span className="text-[#777]">·</span>
          {groomMother?.name}
          <span className="text-[#777] mr-1">의 장남 </span>
          {groomSelf?.name}
        </p>
        <p className="flex gap-0.5">
          {brideFather?.name}
          <span className="text-[#777]">·</span>
          {brideMother?.name}
          <span className="text-[#777] mr-1">의 차녀 </span>
          {brideSelf?.name}
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
                  {groomSelf?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomSelf?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomSelf?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신랑 아버지</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomFather?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomFather?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomFather?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신랑 어머니</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {groomMother?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${groomMother?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${groomMother?.phone}`}>
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
                  {brideSelf?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideSelf?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideSelf?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신부 아버지</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {brideFather?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideFather?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideFather?.phone}`}>
                    <IoIosMail size={20} />
                  </a>
                </div>
              </li>
              <li className="my-5 flex">
                <p className="flex-1/3 text-start ">신부 어머니</p>
                <p className="flex-1/3 text-[15px] text-white">
                  {brideMother?.name}
                </p>
                <div className="flex-1/3 flex justify-end gap-x-5">
                  <a href={`tel:${brideMother?.phone}`}>
                    <IoIosCall size={20} />
                  </a>
                  <a href={`sms:${brideMother?.phone}`}>
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
