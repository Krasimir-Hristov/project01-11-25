import { assets, workData, WorkItem } from '@/assets/assets.data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='projects'
      className='w-full px-6 md:px-[12%] py-20 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-xl font-Ovo text-gray-600 dark:text-gray-300'
      >
        Featured Projects
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl md:text-5xl font-Ovo mb-16'
      >
        My Latest Works
      </motion.h2>

      <div className='grid grid-cols-1 gap-16'>
        {workData.map((project: WorkItem, index: number) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            className='flex flex-col lg:flex-row gap-8 items-center'
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='w-full lg:w-1/2 aspect-video relative overflow-hidden rounded-xl shadow-lg'
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300' />
            </motion.div>

            {/* Project Info */}
            <div className='w-full lg:w-1/2 space-y-4'>
              <h3 className='text-2xl md:text-3xl font-Ovo'>{project.title}</h3>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                {project.description}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 dark:bg-white dark:text-black'
              >
                View Project
                <Image
                  src={assets.right_arrow_white}
                  alt='arrow'
                  className='w-4 dark:invert'
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mt-20'
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          href='#contact'
          className='inline-flex items-center gap-2 text-lg font-Ovo px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black'
        >
          Let&apos;s Work Together
          <Image
            src={assets.right_arrow}
            alt='arrow'
            className='w-4 dark:invert'
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Work;
