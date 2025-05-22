import { names, contents, contacts } from "@/assets/DB.json";

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
          {names.groom.dad} {names.groom.mom}의 장남 {names.groom.me}
        </p>
        <p>
          {names.bride.dad} {names.bride.mom}의 차녀 {names.bride.me}
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
            신랑측<span>GROOM</span>
          </p>
          <ul>
            {Object.values(contacts.groom).map((contact) => (
              <li key={contact}>{contact}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
