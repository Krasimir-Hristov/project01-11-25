'use client'

import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'

export default function Home() {
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
      {/* Добавете други секции тук с уникални id атрибути */}
    </>
  )
}
