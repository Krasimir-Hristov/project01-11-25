// Import necessary assets and data from the assets.data file
import { assets, ServiceData, serviceData } from '@/assets/assets.data'
import Image from 'next/image' // Import the Image component from next/image
import Link from 'next/link' // Import the Link component from next/link
import React from 'react' // Import the React library
import { motion } from 'motion/react'

// Define the Services component as a functional component
const Services = () => {
  return (
    // Container element for the services section
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      {/* // Subheading for the services section */}
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What we offer?
      </motion.h4>
      {/* // Main heading for the services section */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Our Services
      </motion.h2>
      {/* // Brief description of the services offered */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, quod, quas, doloremque quae nemo quibusdam voluptates
        dolorum quia quos aperiam.
      </motion.p>
      {/* // Grid container for the individual service cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto gap-6 my-10'
      >
        {/* // Map through the serviceData array and render a service card for each
        item */}
        {serviceData.map(
          ({ icon, title, description, link }: ServiceData, index: number) => (
            // Individual service card container
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
               hover:bg-lightHover hover:-translate-x-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
            >
              {/* // Service icon */}
              <Image src={icon} alt={title} className='w-10' />
              {/* // Service title */}
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
                {title}
              </h3>
              {/* // Service description */}
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                {description}
              </p>
              {/* // Link to learn more about the service */}
              <Link
                href={link}
                className='flex items-center gap-2 text-sm mt-5'
              >
                {/* // Right arrow icon for the link */}
                Read More
                <Image src={assets.right_arrow} alt='arrow' className='w-4' />
              </Link>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  )
}

// Export the Services component as the default export
export default Services
