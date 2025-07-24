import type { Data } from '@/models/model'

export default {
  meta: {
    title: '이성준, 김주희 결혼합니다',
    description:
      '2025년 11월 9일 일요일 오후 2시\n대전 BMK 웨딩컨벤션 아스틴홀',
    url: 'https://253eosam.github.io/wedding-invitation/',
    thumbnail:
      'https://253eosam.github.io/wedding-invitation/images/thumbnail.png',
  },
  weddingDate: {
    year: 2025,
    month: 11,
    day: 9,
    time: {
      amPm: 'pm',
      hour: 2,
      minute: 0,
    },
  },
  families: [
    {
      gender: 'groom',
      name: '이성준',
      relation: 'self',
      phone: '010-****-****',
      account: {
        bank: '신한은행',
        accountNumber: '***-***-******',
        bankIdentity: '예금주',
      },
    },
    {
      gender: 'groom',
      name: '이호상',
      relation: 'father',
      phone: '010-****-****',
      account: {
        bank: 'IM뱅크',
        accountNumber: '***-**-******-***',
        bankIdentity: '예금주',
      },
    },
    {
      gender: 'groom',
      name: '권정자',
      relation: 'mother',
      phone: '010-****-****',
      account: {
        bank: 'IM뱅크',
        accountNumber: '***-**-******',
        bankIdentity: '예금주',
      },
    },
    {
      gender: 'bride',
      name: '김주희',
      relation: 'self',
      phone: '010-****-****',
      account: {
        bank: '우리은행',
        accountNumber: '****-***-******',
        bankIdentity: '예금주',
      },
    },
    {
      gender: 'bride',
      name: '김형준',
      relation: 'father',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: '예금주',
      },
    },
    {
      gender: 'bride',
      name: '손유진',
      relation: 'mother',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: '예금주',
      },
    },
  ],
  images: {
    main: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/19-h2.jpg',
    invitation: [
      'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/20-h2.jpg',
      'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/21-h2.jpg',
    ],
  },
  gallery: [
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/4-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/2-h1.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/3-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/8-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/24-h2.jpg',
      position: 'object-bottom',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/7-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/26-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/18-h2.jpg',
      position: 'object-center',
    },
    {
      src: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/23-h2.jpg',
      position: 'object-center',
    },
  ],
  map: {
    name: 'BMK웨딩홀',
    address: '대전 중구 서문로 133',
    addressDetail: 'BMK 웨딩홀 4층, 아스틴홀',
    tel: '042-334-1000',
    position: {
      latitude: 36.31983198404643,
      longitude: 127.40508053198738,
    },
    link: 'https://naver.me/58NdrkXq',
  },
} satisfies Data
