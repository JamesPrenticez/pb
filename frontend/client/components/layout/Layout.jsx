import React, { Children } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <Navbar />

    <main className="min-h-screen bg-theme-primary text-theme-secondary">
      {/* <Sidebar /> */}
      {children}
    </main>

    <Footer />
    </>
  )
}