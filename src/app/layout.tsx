import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedEduca',
  description: 'Biblioteca virtual medEduca',
  verification: {
    google: 'yNRqpT2pjXomYTBAWXz_1ZCPH5ld2j4MtPgnOMwCZ9c'
  }
}

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
