import { names, contents, contacts } from "@/assets/DB.json";
import { useState } from "react";
import FullScreenDialog from "@/components/FullDialog";

export default function IntroSection() {
  const [open, setOpen] = useState(false);

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
        <h1 className="text-2xl font-bold">전체화면 다이얼로그</h1>
        <p className="mt-4">여기에 원하는 내용을 넣으세요.</p>
      </FullScreenDialog>
      {/* <div>
        <h2>
          <p>CONTACT</p>
          <p>연락하기</p>
        </h2>
        <div>
          <p>
            신랑측<span>GROOM</span>
          </p>
          <ul>
            {Object.values(contacts.groom).map((contact, i) => (
              <li key={i}>{contact}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
