import type { Data } from '@/models/model'

export default {
  meta: {
    title: '이성준, 김주희 결혼합니다',
    description:
      '2025년 11월 9일 일요일 오후 2시\n대전 BMK 웨딩컨벤션 아스틴홀',
    url: 'https://253eosam.github.io/wedding-invitation/',
    thumbnail:
      'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation/images/19-h2.jpg',
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
      phone: '01082623777',
      account: {
        bank: '신한은행',
        accountNumber: '110-414-698540',
        bankIdentity: '이성준',
      },
    },
    {
      gender: 'groom',
      name: '이호상',
      relation: 'father',
      phone: '010-7252-9110',
      account: {
        bank: 'IM뱅크',
        accountNumber: '173-07-105277-001',
        bankIdentity: '번창기업(이호상)',
      },
    },
    {
      gender: 'groom',
      name: '권정자',
      relation: 'mother',
      phone: '010-9882-9110',
      account: {
        bank: 'IM뱅크',
        accountNumber: '097-08-004623',
        bankIdentity: '권정자',
      },
    },
    {
      gender: 'bride',
      name: '김주희',
      relation: 'self',
      phone: '010-6412-3317',
      account: {
        bank: '우리은행',
        accountNumber: '1002-160-599486',
        bankIdentity: '김주희',
      },
    },
    {
      gender: 'bride',
      name: '김형준',
      relation: 'father',
      phone: '010-3427-3319',
      account: {
        bank: '국민',
        accountNumber: '451-21-1294-665',
        bankIdentity: '김형준',
      },
    },
    {
      gender: 'bride',
      name: '손유진',
      relation: 'mother',
      phone: '010-3264-3318',
      account: {
        bank: '농협',
        accountNumber: '453026-56-124036',
        bankIdentity: '손유진',
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
  bgm: 'https://ljnchackdhfxulottnzx.supabase.co/storage/v1/object/public/wedding-invitation//wedding-bgm.mp3',
} satisfies Data
