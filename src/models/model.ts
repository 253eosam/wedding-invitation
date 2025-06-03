export interface Data {
  meta: Meta
  weddingDate: WeddingDate
  families: Person[]
}

export interface Meta {
  title: string
  description: string
}

export interface WeddingDate {
  year: number
  month: number
  day: number
  time: {
    amPm: 'am' | 'pm'
    hour: number
    minute: number
  }
}

export interface Person {
  gender: 'groom' | 'bride'
  name: string
  relation: 'self' | 'father' | 'mother'
  phone: string
  account: {
    bank: string
    accountNumber: string
    bankIdentity: string
  }
}
