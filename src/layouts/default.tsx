import Header from 'components/Header'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function DefaultLayout({children}: Props) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
