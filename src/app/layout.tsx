import type { Metadata, Viewport } from 'next'
import '@/app/globals.css'
import { config } from '@/models'

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  robots: 'noindex, nofollow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#fafafa',
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
        <meta property="og:title" content={config.meta.title} />
        <meta property="og:description" content={config.meta.description} />
        <meta property="og:image" content={config.meta.thumbnailImage} />
        <meta property="og:url" content={config.meta.url} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.meta.title} />
        <meta name="twitter:description" content={config.meta.description} />
        <meta name="twitter:image" content={config.meta.thumbnailImage} />
      </head>
      <body className="antialiased bg-[#efefef] overflow-hidden">
        <main
          className="max-w-[425px] w-full bg-[#fafafa] mx-auto relative"
          role="main"
        >
          {children}
        </main>
      </body>
    </html>
  )
}
