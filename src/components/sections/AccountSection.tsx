import classNames from 'classnames'
import { IoIosArrowDown } from 'react-icons/io'
import { FiCopy } from 'react-icons/fi'
import { Section } from '@/components/Section'
import { Person } from '@/models/model'

export default function AccountSection({ families }: { families: Person[] }) {
  const title = '마음 전하실 곳'
  const content = `
    참석이 어려우신 분들을 위해
    계좌번호를 기재하였습니다.
    너그러운 마음으로 양해 부탁드립니다.
  `
  const { groomFamily, brideFamily } = {
    groomFamily: families.filter((person) => person.gender === 'groom'),
    brideFamily: families.filter((person) => person.gender === 'bride'),
  }

  return (
    <Section.Container>
      <Section.Title kor={title} eng="ACCOUNT" />

      <div className="flex flex-col gap-y-10 whitespace-pre font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {content}
      </div>

      <div className="flex flex-col gap-10">
        <details
          open
          className="shadow rounded-lg w-[310px] mx-auto group text-base"
        >
          <summary className="font-kor rounded-t-lg font-medium tracking-[2px] text-center list-none bg-[#f3f3f3] px-5 h-[50px] flex items-center justify-center">
            <p className="flex-1">신랑측 계좌번호</p>
            <IoIosArrowDown
              className={classNames('w-4 h-4', 'group-open:rotate-180')}
              color="#999"
            />
          </summary>
          <div className="font-noto text-[13px] text-[#333333] font-light">
            {groomFamily.map(({ account, name }, idx) => (
              <button
                key={name + idx}
                className="flex flex-row w-full gap-x-2 cursor-pointer flex-1 p-4"
                onClick={() => {
                  const copyContent = `${account.bank} ${account.accountNumber}`
                  navigator.clipboard.writeText(copyContent)
                  alert(
                    `${account.bank}: ${account.accountNumber} (${account.bankIdentity})  복사되었습니다.`
                  )
                }}
              >
                <div className="flex flex-col gap-x-2 cursor-pointer flex-1">
                  <div className="flex gap-x-2">
                    <p className="">{name}</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <p className="">{account.bank}</p>
                    <p className="">{account.accountNumber}</p>
                  </div>
                </div>
                <FiCopy className="w-4 h-4" />
              </button>
            ))}
          </div>
        </details>
        <details
          open
          className="shadow rounded-lg w-[310px] mx-auto group text-base"
        >
          <summary className="font-kor rounded-t-lg font-medium tracking-[2px] text-center list-none bg-[#f3f3f3] px-5 h-[50px] flex items-center justify-center">
            <p className="flex-1">신부측 계좌번호</p>
            <IoIosArrowDown
              className={classNames('w-4 h-4', 'group-open:rotate-180')}
              color="#999"
            />
          </summary>
          <div className="font-noto text-[13px] text-[#333333] font-light">
            {brideFamily.map(({ account, name }, idx) => (
              <button
                key={name + idx}
                className="flex flex-row w-full gap-x-2 cursor-pointer flex-1 p-4"
                onClick={() => {
                  const copyContent = `${account.bank} ${account.accountNumber}`
                  navigator.clipboard.writeText(copyContent)
                  alert(
                    `${account.bank}(${account.bankIdentity}) ${account.accountNumber} 복사되었습니다.`
                  )
                }}
              >
                <div className="flex flex-col gap-x-2 cursor-pointer flex-1">
                  <div className="flex gap-x-2">
                    <p className="">{name}</p>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <p className="">{account.bank}</p>
                    <p className="">{account.accountNumber}</p>
                  </div>
                </div>
                <FiCopy className="w-4 h-4" />
              </button>
            ))}
          </div>
        </details>
      </div>
    </Section.Container>
  )
}
