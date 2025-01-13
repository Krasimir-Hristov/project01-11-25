'use client'

import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'

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
      {/* Добавете други секции тук с уникални id атрибути */}
    </>
  )
}
