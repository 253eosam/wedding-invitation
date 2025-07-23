export interface Data {
  meta: Meta
  weddingDate: WeddingDate
  families: Person[]
  images: OtherSectionImage
  gallery: string[]
  map: MapInfo
}

export interface OtherSectionImage {
  main: string
  invitation: string
}

export interface Meta {
  title: string
  description: string
  url: string
  thumbnail: string
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
export interface MapInfo {
  name: string
  address: string
  addressDetail: string
  tel: string
  position: {
    latitude: number
    longitude: number
  }
  link: string
}
