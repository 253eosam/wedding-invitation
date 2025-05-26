import { accounts } from '@/assets/DB.json'

export default function AccountSection() {
  return (
    <section>
      <h1>
        <p>ACCOUNT</p>
        <p>마음 전하실 곳</p>
      </h1>
      <div>
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </div>

      <div>
        <details>
          <summary>신랑측 계좌번호</summary>
          <div>
            {Object.values(accounts.groom).map((account) => (
              <div key={account.name}>
                <p>{account.name}</p>
                <div>
                  <p>{account.bank}</p>
                  <p>{account.account}</p>
                </div>
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
                <div>
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
