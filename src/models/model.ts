export interface WeddingConfig {
  meta: MetaConfig
  weddingDate: WeddingDate
  couple: CoupleConfig
  intro: IntroConfig
  invitation: InvitationConfig
  mainImage: string
  gallery: GalleryItem[]
  map: MapConfig
  charterBus: CharterBusConfig | null
  account: AccountSectionConfig
  bgm: string
}

export interface MetaConfig {
  title: string
  description: string
  url: string
  thumbnailImage: string
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

export interface AccountInfo {
  bank: string
  accountNumber: string
  bankIdentity: string
}

export interface FamilyMember {
  name: string
  phone: string
  account: AccountInfo
}

export interface CouplePersonConfig extends FamilyMember {
  relation: string
  father: FamilyMember
  mother: FamilyMember
}

export interface CoupleConfig {
  groom: CouplePersonConfig
  bride: CouplePersonConfig
}

export interface IntroConfig {
  titleText: string
  coupleText: string
  image: string
}

export interface InvitationConfig {
  messages: string[]
  images: string[]
}

export interface GalleryItem {
  src: string
  position: 'object-center' | 'object-bottom'
}

export interface MapDirectionsConfig {
  bus: {
    lines: string
    stop: string
  }
  subway: string
  car: string
}

export interface MapConfig {
  name: string
  address: string
  addressDetail: string
  tel: string
  position: {
    latitude: number
    longitude: number
  }
  naverMapLink: string
  directions: MapDirectionsConfig
}

export interface CharterBusConfig {
  side: 'groom' | 'bride'
  title: string
  stops: string[]
  notice: string
  vehicleInfo?: string
}

export interface AccountSectionConfig {
  title: string
  message: string
}
