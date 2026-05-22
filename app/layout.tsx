import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DumpGo Solo — Jasa Pengiriman Pasir & Material Bangunan Solo Raya',
  description:
    'DumpGo Solo melayani pengiriman pasir, batu sungai, batu split, tanah urug, dan sirtu ke seluruh area Solo Raya. Fast respon WhatsApp, harga transparan, langsung ke lokasi.',
  keywords:
    'pengiriman pasir Solo, material bangunan Solo Raya, dump truck Solo, DumpGo Solo, pasir bangunan Sukoharjo, batu split Karanganyar',
  openGraph: {
    title: 'DumpGo Solo — Jasa Pengiriman Material Bangunan Solo Raya',
    description:
      'Pengiriman cepat material bangunan ke seluruh area Solo Raya. Pesan lewat WA, kami antar ke lokasi.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
