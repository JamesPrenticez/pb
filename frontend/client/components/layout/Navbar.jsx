import React from 'react'

import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header>
      <nav className='flex items-center justify-between bg-theme-tertiary text-white font-medium'>
        <div className='space-x-2'>
          <a href="/">Home</a>
          <a href="/customers">Customers</a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  )
}