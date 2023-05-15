import './globals.css'
import { DM_Sans } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Expense Chart',
  description: 'From frontend mentor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
