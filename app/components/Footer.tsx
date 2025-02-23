import { FooterLink, footerLinks } from '@/assets/assets.data';
import Link from 'next/link';
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center space-y-3'>
        <Link
          href='/'
          className='font-extrabold border border-black rounded-sm p-1'
        >
          KRASIMIR | HRISTOV
        </Link>
        <a
          href='tel:+4917674929842'
          className='flex w-max items-center gap-2 mx-auto hover:text-blue-600 transition-colors'
        >
          <Phone className='w-5 h-5' />
          +49 173 3079213
        </a>
        <a
          href='mailto:krasimir.xristov@gmail.com'
          className='flex w-max items-center gap-2 mx-auto hover:text-blue-600 transition-colors'
        >
          <Mail className='w-5 h-5' />
          krasimir.xristov@gmail.com
        </a>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Test Company.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          {footerLinks.map(({ href, label }: FooterLink, index) => (
            <li key={index}>
              <Link target='_blank' href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
