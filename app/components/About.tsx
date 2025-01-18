import { assets, InfoItem, infoList, toolsData } from '@/assets/assets.data'
import Image from 'next/image'
import React from 'react'

interface AboutProps {
  isDarkMode: boolean
}
const About = ({ isDarkMode }: AboutProps) => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
      {/* Introduction section */}
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Us</h2>

      {/* Main content section */}
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Company image */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt='company'
            className='w-full rounded-3xl'
          />
        </div>
        <div className='flex-1'>
          {/* Company description */}
          <p className='mb-10 max-w-2xl font-Ovo'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quod, quas, doloremque quae nemo quibusdam voluptates
            dolorum quia quos aperiam. Quisquam voluptatem, quod, quas,
            doloremque quae nemo quibusdam voluptates dolorum quia quos aperiam.
          </p>

          {/* Info list section */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(
              (
                { icon, title, iconDark, description }: InfoItem,
                index: number
              ) => (
                <li
                  key={index}
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                >
                  {/* Info item icon */}
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className='w-7 mt-3'
                  />
                  {/* Info item title */}
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>
                    {title}
                  </h3>
                  {/* Info item description */}
                  <p className='text-gray-600 text-sm dark:text-white/80'>
                    {description}
                  </p>
                </li>
              )
            )}
          </ul>

          {/* Tools section */}
          <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
            Tools we use
          </h4>

          {/* Tools list */}
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500'
              >
                {/* Tool icon */}
                <Image src={tool} alt={String(tool)} className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
