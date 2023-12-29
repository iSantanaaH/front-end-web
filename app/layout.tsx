import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Front-end Developer',
  description: 'Este é o meu portfólio como devesenvolver Front-end Jr.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
