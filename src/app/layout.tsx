import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "@/app/globals.css";
import { title, description } from "@/assets/DB.json";

const CrimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title,
  description,
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={` ${CrimsonPro.variable} antialiased bg-[#efefef]`}>
        <main className="w-[425px] bg-[#fafafa] mx-auto" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
