import classNames from 'classnames'
import { IoIosArrowDown } from 'react-icons/io'
import { FiCopy } from 'react-icons/fi'
import type { AccountInfo } from '@/models/model'

interface AccountRow {
  name: string
  account: AccountInfo
}

export default function AccountAccordion({
  title,
  accounts,
  copyMessageFormatter,
}: {
  title: string
  accounts: AccountRow[]
  copyMessageFormatter?: (row: AccountRow) => string
}) {
  return (
    <details
      open
      className="shadow rounded-lg w-[310px] mx-auto group text-base"
    >
      <summary className="font-kor rounded-t-lg font-medium tracking-[2px] text-center list-none bg-[#f3f3f3] px-5 h-[50px] flex items-center justify-center">
        <p className="flex-1">{title}</p>
        <IoIosArrowDown
          className={classNames('w-4 h-4', 'group-open:rotate-180')}
          color="#999"
        />
      </summary>
      <div className="font-noto text-[13px] text-[#333333] font-light">
        {accounts.map((row, idx) => (
          <button
            key={`${row.name}-${idx}`}
            className="flex flex-row w-full gap-x-2 cursor-pointer flex-1 p-4"
            onClick={() => {
              const copyContent = `${row.account.bank} ${row.account.accountNumber}`
              navigator.clipboard.writeText(copyContent)

              const defaultMessage = `${row.account.bank}: ${row.account.accountNumber} (${row.account.bankIdentity}) 복사되었습니다.`
              alert(copyMessageFormatter?.(row) ?? defaultMessage)
            }}
          >
            <div className="flex flex-col gap-x-2 cursor-pointer flex-1">
              <div className="flex gap-x-2">
                <p>{row.name}</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <p>{row.account.bank}</p>
                <p>{row.account.accountNumber}</p>
              </div>
            </div>
            <FiCopy className="w-4 h-4" />
          </button>
        ))}
      </div>
    </details>
  )
}
