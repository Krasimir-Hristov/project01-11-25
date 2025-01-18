import { assets, NavLink, navLinks } from '@/assets/assets.data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { DarkModeNavbarProps } from '../types/darkMode'

const Navbar = ({ isDarkMode, setIsDarkMode }: DarkModeNavbarProps) => {
  // State to handle the opening/closing of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Background image behind the navigation */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        {/* Logo link */}
        <Link href='/'>
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt='logo'
            className='w-12 sm:w-20 cursor-pointer mr-14 rounded-full'
          />
        </Link>

        {/* Navigation links for desktop view */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'bg-white shadow-sm bg-opacity-50 dark:border dark:white/50 dark:bg-transparent'
          } `}
        >
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <Link href={link.href} className='font-Ovo'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Additional buttons and links */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=''
              className='w-6'
            />
          </button>
          <Link
            href='#contact'
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt='arrow'
              className='w-3'
            />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className='md:hidden ml-4'>
          {isMenuOpen ? (
            <Image src={assets.close_black} alt='Close Menu' className='w-6' />
          ) : (
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt='Open Menu'
              className='w-6'
            />
          )}
        </button>
      </nav>

      {/* Overlay background when the mobile menu is open */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-rosa-50 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out z-50 flex flex-col justify-center items-center  dark:bg-darkHover dark:text-white`}
      >
        {/* Close button for the mobile menu */}
        <button onClick={toggleMenu} className='absolute top-4 right-4'>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt='Close Menu'
            className='w-6'
          />
        </button>

        {/* Navigation links in the mobile menu */}
        <ul className='flex flex-col items-center'>
          {navLinks.map((link: NavLink) => (
            <li key={link.href} className='mb-4'>
              <Link
                href={link.href}
                className='font-Ovo font-extrabold'
                onClick={closeMenu}
              >
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
