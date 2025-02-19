import { techStackData } from '@/assets/assets.data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Technologies I Work With
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Tech Stack
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Leveraging modern web technologies to build fast, responsive, and
        user-friendly applications. Each tool in my stack is carefully chosen to
        provide the best development experience and end-user satisfaction.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'
      >
        {techStackData.map((tech, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer
             hover:bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900
             hover:-translate-y-1 duration-500'
          >
            <div className='flex items-center gap-4 mb-4'>
              <Image
                src={tech.icon}
                alt={tech.title}
                width={40}
                height={40}
                className='w-10'
              />
              <h3 className='text-xl font-semibold text-gray-700 dark:text-white'>
                {tech.title}
              </h3>
            </div>
            <p className='text-sm text-gray-600 leading-relaxed dark:text-white/80'>
              {tech.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
