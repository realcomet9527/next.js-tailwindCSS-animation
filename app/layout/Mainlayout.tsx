
import type { Metadata } from 'next'
import { Navbar } from '../component'

export const metadata: Metadata = {
  title: 'Scrolling Web',
  description: 'Generated by create next app',
}

export default function Mainlayout({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
