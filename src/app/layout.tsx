import type { Metadata } from 'next'
import { Crimson_Pro, Gowun_Dodum, Noto_Sans_KR } from 'next/font/google'
import '@/app/globals.css'
import { data } from '@/models'

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

const NotoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
})

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* open graph */}
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:image" content={data.meta.thumbnail} />
        <meta property="og:url" content={data.meta.url} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.meta.title} />
        <meta name="twitter:description" content={data.meta.description} />
        <meta name="twitter:image" content={data.meta.thumbnail} />
      </head>
      <body
        className={`${CrimsonPro.variable} ${GowunDodum.variable} ${NotoSansKR.variable} antialiased bg-[#efefef]`}
      >
        <main className="max-w-[425px] w-full bg-[#fafafa] mx-auto" role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
