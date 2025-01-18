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
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

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
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div id='home'>
        <Header />
      </div>
      <div id='about'>
        <About isDarkMode={isDarkMode} />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='work'>
        <Work isDarkMode={isDarkMode} />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div>
        <Footer isDarkMode={isDarkMode} />
      </div>
      {/* Добавете други секции тук с уникални id атрибути */}
    </>
  )
}
