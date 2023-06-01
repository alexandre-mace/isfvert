import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISF Vert',
  description: 'Calculez votre ISF Vert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="https://em-content.zobj.net/thumbs/240/apple/354/large-green-circle_1f7e2.png" sizes="any" />
      {children}
      </body>
    </html>
  )
}
