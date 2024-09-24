'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=' bg-black fixed text-white top-0 w-full p-4 shadow-lg z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <p>
          <Link href='/' className='text-4xl font-extrabold text-gray-400 tracking-wide text-primary'>
            OIPL
          </Link>
        </p>

        {/* Desktop Navbar Links */}
        <ul className='hidden md:flex space-x-8 items-center'>
          <li>
            <Link
              href='/'
              className='text-lg font-medium text-third hover:shadow-lg hover:font-bold hover:text-white transition-all duration-400'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='text-lg font-medium text-third hover:text-white hover:font-bold transition-colors duration-400'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-lg font-medium text-third hover:text-white hover:font-bold transition-colors duration-400'
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href='/directors-message'
              className='text-lg font-medium text-third hover:text-white hover:font-bold transition-colors duration-400'
            >
              Directors Page
            </Link>
          </li>
          <li>
            <Link
              href='/gallery'
              className='text-lg font-medium text-third hover:text-white hover:font-bold transition-colors duration-400'
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href='/products'
              className='text-lg font-medium text-third hover:text-white hover:font-bold transition-colors duration-400'
            >
              Products
            </Link>
          </li>
        </ul>
        <a
          href='tel:+1234567890'
          className='bg-primary text-secondary px-6 py-2 rounded-full border border-secondary hover:bg-lightyellow hover:text-green transition-all duration-400 hidden md:block'
        >
          Call Now
        </a>

        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-gray-400 text-3xl'>
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden mt-4 bg-gray-800 shadow-lg p-4'>
          <ul className='flex flex-col space-y-4'>
            <li>
              <Link href='/' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                About
              </Link>
            </li>
            <li>
              <Link href='/contact' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                Contact
              </Link>
            </li>
            <li>
              <Link href='/directors-message' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                Directors Page
              </Link>
            </li>
            <li>
              <Link href='/gallery' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                Gallery
              </Link>
            </li>
            <li>
              <Link href='/products' className='text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300'>
                Products
              </Link>
            </li>
            <li>
              <a
                href='tel:+1234567890'
                className='bg-third text-secondary px-6 py-2 rounded-full border border-secondary hover:bg-secondary hover:text-white transition-all duration-300 text-center'
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
