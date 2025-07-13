import type { Data } from '@/models/model'

export default {
  meta: {
    title: '이성준, 김주희 결혼합니다💛',
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
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: '',
      },
    },
    {
      gender: 'groom',
      name: '권정자',
      relation: 'mother',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: '',
      },
    },
    {
      gender: 'bride',
      name: '김주희',
      relation: 'self',
      phone: '',
      account: {
        bank: '',
        accountNumber: '',
        bankIdentity: '',
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
        bankIdentity: '',
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
        bankIdentity: '',
      },
    },
  ],
  images: {
    main: 'https://253eosam.github.io/wedding-invitation/images/thumbnail.png',
    invitation:
      'https://253eosam.github.io/wedding-invitation/images/thumbnail.png',
  },
  gallery: [
    {
      src: 'https://253eosam.github.io/wedding-invitation/images/thumbnail.png',
      height: 2,
    },
    {
      src: 'https://253eosam.github.io/wedding-invitation/images/thumbnail.png',
      height: 1,
    },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x300', height: 1 },
    { src: 'https://placehold.co/400x600', height: 2 },
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
