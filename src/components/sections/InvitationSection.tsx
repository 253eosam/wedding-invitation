import { useState } from 'react'
import { IoCall } from 'react-icons/io5'
import { Section } from '@/components/Section'
import ContactDialog from '@/components/common/ContactDialog'
import ImagePair from '@/components/common/ImagePair'
import type { CoupleConfig, InvitationConfig } from '@/models/model'

export default function InvitationSection({
  invitation,
  couple,
}: {
  invitation: InvitationConfig
  couple: CoupleConfig
}) {
  const [open, setOpen] = useState(false)
  const groomSelf = couple.groom
  const groomFather = couple.groom.father
  const groomMother = couple.groom.mother
  const brideSelf = couple.bride
  const brideFather = couple.bride.father
  const brideMother = couple.bride.mother

  return (
    <Section.Container className="flex flex-col items-center">
      <Section.Title kor="소중한 분들을 초대합니다." eng="INVITATION" />
      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {invitation.messages.map((message) => (
          <Section.Typography key={message}>{message}</Section.Typography>
        ))}
      </div>

      <ImagePair images={invitation.images} altPrefix="초대 이미지" />
      <div className="font-gowun mt-6 mb-4 text-[#444]">
        <p className="flex gap-0.5">
          {groomFather.name}
          <span className="text-[#777]">·</span>
          {groomMother.name}
          <span className="text-[#777] mr-1">의 {groomSelf.relation} </span>
          {groomSelf.name}
        </p>
        <p className="flex gap-0.5">
          {brideFather.name}
          <span className="text-[#777]">·</span>
          {brideMother.name}
          <span className="text-[#777] mr-1">의 {brideSelf.relation} </span>
          {brideSelf.name}
        </p>
      </div>
      <Section.Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2"
      >
        <IoCall size={16} />
        연락하기
      </Section.Button>

      <ContactDialog
        open={open}
        onClose={() => setOpen(false)}
        groom={{
          self: groomSelf,
          father: groomFather,
          mother: groomMother,
        }}
        bride={{
          self: brideSelf,
          father: brideFather,
          mother: brideMother,
        }}
      />
    </Section.Container>
  )
}
