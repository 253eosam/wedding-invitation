import type { Metadata } from 'next'
import { Crimson_Pro, Gowun_Dodum } from 'next/font/google'
import '@/app/globals.css'
import { title, description } from '@/assets/DB.json'

const CrimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  display: 'swap',
})

const GowunDodum = Gowun_Dodum({
  variable: '--font-gowun-dodum',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title,
  description,
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${CrimsonPro.variable} ${GowunDodum.variable} antialiased bg-[#efefef]`}
      >
        <main className="max-w-[425px] w-full bg-[#fafafa] mx-auto" role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
