

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Metadata } from "next"
import localFont from 'next/font/local'
import { cn } from "@workspace/ui/lib/utils"


export const metadata: Metadata = {
  title: { default: 'MTN - Odogwu', template: '%s - MTN Odogwu' },
  description: 'Welcome to the MTN Odogwu.',
}


const mtnBrighterSans = localFont({
  variable: '--mtn-brighter-sans',
  src: [
    {
      path: './fonts/MTNBrighterSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/MTNBrighterSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MTNBrighterSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MTNBrighterSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MTNBrighterSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MTNBrighterSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(mtnBrighterSans.variable, 'antialiased')}>
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/img/mtn-logo-yellow.svg" />
      </head>
      <body
        className={cn(mtnBrighterSans.variable, 'antialiased')}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
