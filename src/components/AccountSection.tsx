import { accounts } from '@/assets/DB.json'

export default function AccountSection() {
  return (
    <section>
      <h1 className="text-center mb-7.5">
        <p className="font-eng text-[13px] text-[#f79e9e] tracking-[3px] opacity-60">
          ACCOUNT
        </p>
        <p className="text-[#f79e9e] text-xl mt-1 font-kor">마음 전하실 곳</p>
      </h1>

      <div className="flex flex-col gap-y-10 whitespace-pre my-9 font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        <p>
          참석이 어려우신 분들을 위해
          <br />
          계좌번호를 기재하였습니다.
          <br />
          너그러운 마음으로 양해 부탁드립니다.
        </p>
      </div>

      <div>
        <details>
          <summary className="font-kor text-lg font-medium tracking-[2px]">
            신랑측 계좌번호
          </summary>
          <div>
            {Object.values(accounts.groom).map((account) => (
              <div key={account.name}>
                <button className="flex flex-row gap-x-2">
                  <div className="flex flex-row gap-x-2">
                    <p className="font-kor text-sm">{account.name}</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <p className="font-kor text-sm">{account.bank}</p>
                    <p className="font-kor text-sm">{account.account}</p>
                  </div>
                  <div>{/* kakaopay button */}</div>
                </button>
              </div>
            ))}
          </div>
        </details>
        <details>
          <summary>신부측 계좌번호</summary>
          <div>
            {Object.values(accounts.bride).map((account) => (
              <div key={account.name}>
                <p>{account.name}</p>
                <div className="flex flex-row gap-x-2">
                  <p>{account.bank}</p>
                  <p>{account.account}</p>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
