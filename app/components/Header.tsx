import { assets } from '@/assets/assets.data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

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
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I m KRASIMIR HRISTOV{' '}
        <Image src={assets.hand_icon} alt='header' className='w-6' />{' '}
        {/* ✋ Hand icon next to the greeting text */}
      </motion.h3>

      {/* 📝 Main headline text with responsive font sizes */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo mb-6'
      >
        Building Modern Websites based in Germany!
      </motion.h1>

      {/* 📄 Description paragraph with limited width for better readability */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        I believe that great design and clean code go hand in hand. I am
        passionate about creating web solutions that not only look great but
        also provide an exceptional user experience. Excited to bring my skills,
        creativity, and dedication to your development team!
      </motion.p>

      {/* 🔗 Buttons section with two links: Contact Us and About Us */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
        {/* 📧 Contact Us button with white text on black background */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='min-w-[200px] h-12 px-8 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 dark:bg-transparent'
        >
          Contact Me{' '}
          <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />{' '}
          {/* ➡️ Right arrow icon */}
        </motion.a>

        {/* 🧾 About Us button with black text on white background */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={assets.cv_file.src} // Use .src to get the path as string
          download='CV_EN.png'
          className='min-w-[200px] h-12 px-8 border text-black border-gray-500 rounded-full bg-white font-Ovo dark:border-white/50 flex items-center justify-center gap-2'
        >
          Download CV{' '}
          <Image src={assets.download_icon} alt='download' className='w-3' />{' '}
        </motion.a>
      </div>
    </div>
  );
};

// ✅ Exporting the Header component for use in other parts of the application
export default Header;
