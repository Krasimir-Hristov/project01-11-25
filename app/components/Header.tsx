import { assets } from '@/assets/assets.data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

// ✅ Header component definition

const Header = () => {
  return (
    // 🖼️ Main container for the header section with flexbox centering and responsive width
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      {/* 🖼️ Image section for the header image with responsive margins and sizes */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <div className='mt-0 sm:mt-2 md:mt-4 lg:mt-12 xl:mt-16'>
          <Image
            src={assets.header_Image} // 📁 Path to the header image from the assets object
            alt='header' // 📝 Alternative text for accessibility
            className='w-56 sm:w-72 md:w-96 lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto' // 📐 Responsive width classes for different screen sizes
          />
        </div>
      </motion.div>

      {/* 👋 Greeting text with an icon */}
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! We are TEST COMPANY{' '}
        <Image src={assets.hand_icon} alt='header' className='w-6' />{' '}
        {/* ✋ Hand icon next to the greeting text */}
      </h3>

      {/* 📝 Main headline text with responsive font sizes */}
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Test text based somewhere in the world
      </h1>

      {/* 📄 Description paragraph with limited width for better readability */}
      <p className='max-w-2xl mx-auto font-Ovo'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        pellentesque, mauris nec interdum ultrices, erat quam lacinia turpis, eu
        luctus nunc eros sed ipsum.
      </p>

      {/* 🔗 Buttons section with two links: Contact Us and About Us */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        {/* 📧 Contact Us button with white text on black background */}
        <Link
          href='/contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Contact Us{' '}
          <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />{' '}
          {/* ➡️ Right arrow icon */}
        </Link>

        {/* 🧾 About Us button with black text on white background */}
        <Link
          href='#about'
          className='hidden lg:flex items-center gap-3 px-10 py-2.5 border text-black border-gray-500 rounded-full ml-4 bg-white font-Ovo dark:border-white/50'
        >
          About Us <Image src={assets.arrow_icon} alt='arrow' className='w-3' />{' '}
          {/* ➡️ Right arrow icon */}
        </Link>
      </div>
    </div>
  )
}

// ✅ Exporting the Header component for use in other parts of the application
export default Header
