'use client'

import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  }, [isDarkMode])
  return (
    <>
      <Navbar />
      <div id='home'>
        <Header />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='work'>
        <Work />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      {/* Добавете други секции тук с уникални id атрибути */}
    </>
  )
}
