import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hacker News V4.0',
  description: 'A Hacker News UI built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#EEEEEE' }}>{children}</body>
    </html>
  )
}
