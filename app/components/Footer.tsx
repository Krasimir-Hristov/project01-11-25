import { assets, FooterLink, footerLinks } from '@/assets/assets.data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image
          src={assets.logo}
          alt='logo'
          className='w-36 mx-auto mb-2 rounded-full'
        />
        <div className='flex w-max items-center gap-2 mx-auto '>
          <Image src={assets.mail_icon} alt='logo' className='w-6 ' />
          testuser@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Test Company. All right reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          {footerLinks.map(({ href, label }: FooterLink, index) => (
            <li>
              <Link target='_blank' key={index} href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
