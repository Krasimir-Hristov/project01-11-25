import { assets } from '@/assets/assets.data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      {/* Промяна тук */}
      <div className='mt-0 sm:mt-2 md:mt-4 lg:mt-12 xl:mt-16'>
        <Image
          src={assets.header_Image}
          alt='header'
          className='w-56 sm:w-72 md:w-96 lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto'
        />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! We are TEST COMPANY{' '}
        <Image src={assets.hand_icon} alt='header' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Test text based somewhere in the world
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        pellentesque, mauris nec interdum ultrices, erat quam lacinia turpis, eu
        luctus nunc eros sed ipsum.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <Link
          href='/contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          Contact Us{' '}
          <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </Link>

        <Link
          href='/about'
          className='px-10 py-3 border border-black rounded-full text-black flex items-center gap-2'
        >
          About Us{' '}
          <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </Link>
      </div>
    </div>
  )
}

export default Header
