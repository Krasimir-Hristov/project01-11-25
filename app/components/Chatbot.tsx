import { assets } from '@/assets/assets.data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Chatbot = () => {
  return (
    <div>
      {/* // 🖼️ Main container for the header section with flexbox centering and
      responsive width */}
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        {/* 🖼️ Image section for the header image with responsive margins and sizes */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <div className='mt-0 sm:mt-2 md:mt-4 lg:mt-12 xl:mt-16'>
            <Image
              src={assets.chatbot}
              alt='chatbot assistant'
              className='w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto' // Wider sizes for all breakpoints
            />
          </div>
        </motion.div>

        {/* 📝 Main headline text with responsive font sizes */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo mb-6'
        >
          Got a question? Ask my AI assistant!
        </motion.h1>

        {/* 📄 Description paragraph with limited width for better readability */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='max-w-2xl mx-auto font-Ovo'
        >
          You can ask my AI assistant anything about me – the technologies I
          use, how to contact me, or details about the projects I've worked on.
          The assistant responds in any language you ask and is here to help you
          anytime – just click the icon in the bottom-right corner!
        </motion.p>
      </div>
    </div>
  );
};

export default Chatbot;
