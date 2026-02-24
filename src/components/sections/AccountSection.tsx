import { Section } from '@/components/Section'
import AccountAccordion from '@/components/common/AccountAccordion'
import type {
  AccountSectionConfig,
  CoupleConfig,
  FamilyMember,
} from '@/models/model'

const toAccountList = (person: {
  name: string
  account: FamilyMember['account']
  father: FamilyMember
  mother: FamilyMember
}) => [person, person.father, person.mother]

export default function AccountSection({
  accountConfig,
  couple,
}: {
  accountConfig: AccountSectionConfig
  couple: CoupleConfig
}) {
  const groomFamily = toAccountList(couple.groom)
  const brideFamily = toAccountList(couple.bride)

  return (
    <Section.Container>
      <Section.Title kor={accountConfig.title} eng="ACCOUNT" />

      <div className="flex flex-col gap-y-10 whitespace-pre-line font-gowun text-[#585858] text-[15px] text-center leading-[30px]">
        {accountConfig.message}
      </div>

      <div className="flex flex-col gap-10">
        <AccountAccordion
          title="신랑측 계좌번호"
          accounts={groomFamily}
          copyMessageFormatter={({ account }) =>
            `${account.bank}: ${account.accountNumber} (${account.bankIdentity})  복사되었습니다.`
          }
        />
        <AccountAccordion
          title="신부측 계좌번호"
          accounts={brideFamily}
          copyMessageFormatter={({ account }) =>
            `${account.bank}(${account.bankIdentity}) ${account.accountNumber} 복사되었습니다.`
          }
        />
      </div>
    </Section.Container>
  )
}
