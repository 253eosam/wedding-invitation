export interface Data {
  meta: {
    title: string
    description: string
  }
  weddingDate: {
    year: number
    month: number
    day: number
    time: {
      amPm: 'am' | 'pm'
      hour: number
      minute: number
    }
  }

  // names: Names
  // contacts: Names
  // accounts: Accounts
  // contents: string[]
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
