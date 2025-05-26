import { weddingDate, description, names } from '@/assets/DB.json'

export default function MainSection() {
  return (
    <section>
      <div className="flex flex-col items-center font-crimson mt-10 gap-1 text-[#49413a]">
        <h1 className="text-[30px]">{`${weddingDate.year} / ${String(weddingDate.month).padStart(2, '0')} / ${weddingDate.day}`}</h1>
        <p className="text-base uppercase tracking-[2px]">
          {weddingDate.dayOfWeek}
        </p>
      </div>
      <div className="my-15">
        <img
          src="https://placehold.co/425x585"
          alt="메인 이미지"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center gap-y-5 font-gowun">
        <div className="flex flex-row gap-2.5 text-lg">
          <span>{names.groom.me}</span>
          <span>·</span>
          <span>{names.bride.me}</span>
        </div>
        <p className="whitespace-pre text-center text-base text-[#544f4f]">
          {description}
        </p>
      </div>
    </section>
  )
}
