import { weddingDate, description, names } from "@/assets/DB.json";

export default function MainSection() {
  return (
    <section>
      <div>
        <h1>{`${weddingDate.year}/${weddingDate.month}/${weddingDate.day}`}</h1>
        <p>{weddingDate.dayOfWeek}</p>
      </div>
      <div>
        <img src="https://placehold.co/425x585" alt="메인 이미지" />
      </div>
      <div>
        <span>{names.groom.me}</span>
        <span>{names.bride.me}</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </section>
  );
}
