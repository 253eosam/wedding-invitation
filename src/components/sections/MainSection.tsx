import { Data } from '@/models/model'
import dayjs from 'dayjs'

export default function MainSection({ meta, weddingDate, families }: Data) {
  const { year, month, day, time } = weddingDate
  const marryDate = dayjs(
    `${year}/${month}/${day} ${time.hour}:${time.minute}`,
    'YYYY/MM/DD hh:mm'
  )

  const groom = families.find(
    (p) => p.gender === 'groom' && p.relation === 'self'
  )
  const bride = families.find(
    (p) => p.gender === 'bride' && p.relation === 'self'
  )

  return (
    <section>
      <div className="flex flex-col items-center font-crimson gap-1 text-[#49413a]">
        <h1 className="text-[30px] tracking-[-0.2]">
          {marryDate.format('YYYY / MM / DD')}
        </h1>
        <p className="text-base uppercase tracking-[2px]">
          {marryDate.format('dddd')}
        </p>
      </div>
      <div className="my-15">
        <img
          src="https://placehold.co/425x585"
          alt="메인 이미지"
          className="rounded-2xl"
          width={425}
          height={585}
        />
      </div>
      <div className="flex flex-col items-center gap-y-5 font-gowun">
        <div className="flex flex-row gap-2.5 text-lg tracking-[1]">
          <span>{groom?.name}</span>
          <span>·</span>
          <span>{bride?.name}</span>
        </div>
        <p className="whitespace-pre text-center text-base text-[#544f4f] leading-7">
          {meta.description}
        </p>
      </div>
    </section>
  )
}
