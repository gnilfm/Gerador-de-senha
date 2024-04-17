import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerador de senha',
  description: 'Uma aplicacão que gera senhas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= 'bg-gradient-to-r from-slate-900 to-slate-700 w-screen h-screen'>{children}</body>
    </html>
  )
}
