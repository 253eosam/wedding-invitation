import {
  weddingDate,
  weddingWeek,
  groom,
  bride,
  description,
} from "@/assets/DB.json";

export default function MainSection() {
  return (
    <section>
      <div>
        <h1>{weddingDate}</h1>
        <p>{weddingWeek}</p>
      </div>
      <div>
        <img src="https://placehold.co/425x585" alt="메인 이미지" />
      </div>
      <div>
        <span>{groom}</span>
        <span>{bride}</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </section>
  );
}
