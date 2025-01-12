import { assets, NavLink, navLinks } from '@/assets/assets.data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
  // Дефиниране на състоянието за отваряне/затваряне на менюто
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Функция за превключване на състоянието на менюто
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Фонова картинка зад навигацията */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Основна навигация */}
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        {/* Лого на сайта */}
        <Link href='/'>
          <Image
            src={assets.logo}
            alt='logo'
            className='w-28 cursor-pointer mr-14'
          />
        </Link>

        {/* Линкове за навигация за десктоп */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <Link href={link.href} className='font-Ovo'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Допълнителни бутони и линкове */}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button>
          <Link
            href='/contacts'
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt='arrow' className='w-3' />
          </Link>
        </div>

        {/* Бутон за отваряне/затваряне на мобилното меню */}
        <button onClick={toggleMenu} className='md:hidden ml-4'>
          {isMenuOpen ? (
            <Image src={assets.close_black} alt='Close Menu' className='w-6' />
          ) : (
            <Image src={assets.menu_black} alt='Open Menu' className='w-6' />
          )}
        </button>
      </nav>

      {/* Полупрозрачен фон зад менюто, когато е отворено */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleMenu}
        ></div>
      )}

      {/* Мобилно меню */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-rosa-50 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out z-50 flex flex-col justify-center items-center`}
      >
        {/* Бутон за затваряне на мобилното меню */}
        <button onClick={toggleMenu} className='absolute top-4 right-4'>
          <Image src={assets.close_black} alt='Close Menu' className='w-6' />
        </button>
        {/* Линкове за навигация в мобилното меню */}
        <ul className='flex flex-col items-center'>
          {navLinks.map((link: NavLink) => (
            <li key={link.href} className='mb-4'>
              <Link href={link.href} className='font-Ovo font-extrabold'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
