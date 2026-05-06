import React from 'react'
import { archivoBlack, jetbrainsMono, spaceGrotesk } from './fonts'
import './styles.css'

export const metadata = {
  description: 'AI-powered marketing systems that compound month over month.',
  title: 'AIxGrowth',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${archivoBlack.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
