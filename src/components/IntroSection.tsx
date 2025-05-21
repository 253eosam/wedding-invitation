import {
  contents,
  groom,
  groomParents,
  bride,
  brideParents,
  contacts,
} from "@/assets/DB.json";

export default function IntroSection() {
  return (
    <section>
      <h1>
        <p>INVITATION</p>
        <p>소중한 분들을 초대합니다.</p>
      </h1>
      <div className="whitespace-pre">
        {contents.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
      <div>
        <img src="https://placehold.co/360x240" alt="" />
      </div>
      <div>
        <p>
          {groomParents.dad} {groomParents.mom}의 장남 {groom}
        </p>
        <p>
          {brideParents.dad} {brideParents.mom}의 차녀 {bride}
        </p>
      </div>
      <button>연락하기</button>

      <div>
        <h2>
          <p>CONTACT</p>
          <p>연락하기</p>
        </h2>
        <div>
          <p>
            신랑측<p>GROOM</p>
          </p>
        </div>
      </div>
    </section>
  );
}
