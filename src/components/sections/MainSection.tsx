import type { CoupleConfig, MetaConfig, WeddingDate } from '@/models/model'
import dayjs from 'dayjs'
import Picture from '../ui/picture'

export default function MainSection({
  meta,
  weddingDate,
  couple,
  mainImage,
}: {
  meta: MetaConfig
  weddingDate: WeddingDate
  couple: CoupleConfig
  mainImage: string
}) {
  const { year, month, day, time } = weddingDate
  const marryDate = dayjs(
    `${year}/${month}/${day} ${time.hour}:${time.minute}`,
    'YYYY/MM/DD hh:mm'
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
        <Picture
          src={mainImage}
          alt="메인 이미지"
          className="rounded-2xl w-[425px] h-[585px] object-cover object-bottom"
          width={425}
          height={585}
        />
      </div>
      <div className="flex flex-col items-center gap-y-5 font-gowun">
        <div className="flex flex-row gap-2.5 text-lg tracking-[1]">
          <span>{couple.groom.name}</span>
          <span>·</span>
          <span>{couple.bride.name}</span>
        </div>
        <p className="whitespace-pre text-center text-base text-[#544f4f] leading-7">
          {meta.description}
        </p>
      </div>
    </section>
  )
}
