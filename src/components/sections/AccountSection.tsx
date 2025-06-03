import { accounts } from '@/models/DB.json'
import classNames from 'classnames'
import { IoIosArrowDown } from 'react-icons/io'
import { FiCopy } from 'react-icons/fi'

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
        <details className="shadow rounded-lg w-[310px] mx-auto group text-base">
          <summary className="font-kor rounded-t-lg font-medium tracking-[2px] text-center list-none bg-[#f3f3f3] px-5 h-[50px] flex items-center justify-center">
            <p className="flex-1">신랑측 계좌번호</p>
            <IoIosArrowDown
              className={classNames('w-4 h-4', 'group-open:rotate-180')}
              color="#999"
            />
          </summary>
          <div className="font-noto text-[13px] text-[#333333] font-light">
            {Object.values(accounts.groom).map((account, idx) => (
              <div key={account.name + idx} className="p-4 flex">
                <button
                  className="flex flex-col gap-x-2 cursor-pointer flex-1"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${account.bank} ${account.account}`
                    )
                    alert('복사되었습니다.')
                  }}
                >
                  <div className="flex gap-x-2">
                    <FiCopy className="w-4 h-4" />

                    <p className="">{account.name}</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <p className="">{account.bank}</p>
                    <p className="">{account.account}</p>
                  </div>
                </button>
                <div className="w-[100px]">
                  <button className="w-full h-full bg-[#f79e9e] text-white font-kor font-medium tracking-[2px] rounded-lg">
                    카카오페이
                  </button>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
