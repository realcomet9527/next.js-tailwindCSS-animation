'use client'
import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import ReduxProvider from '@/lib/store/ReduxProvider'
import fetchData from './admin/MetaFunction'

// let ttle:any = ''
let ttle = 'nomADZ Digital : Best Digital Marketing Company 2023 | Expert Digital Marketing Strategies for Online Growth | SEO, Social Media, Branding'
let desp = "nomADZ digital is leading digital marketing company offers you social media marketing, SEO, influencer marketing,Media buying and more"



// export const metadata: Metadata = {
//   title: ttle,
//   description: desp,
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // React.useEffect(() => {
  //   ttle = fetch('http://localhost:4000/meta').then((res) => res.json()).then((item) => item.title)
  // },[])
  return (
    <html>
      <head>
        <title>{ttle || 'My Next.js App'}</title>
        <meta name="description" content={desp || 'Next.js app description'} />
      </head>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
