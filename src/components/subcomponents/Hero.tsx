"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";

const reviews = [
  "Orflax provides the best quality cables I've ever used!",
  "The customer service is exceptional; highly recommend!",
  "Their products are reliable and durable for any project.",
  "I trust Orflax for all my electrical needs.",
  "Innovative solutions that stand out in the market!"
];

const Hero = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className='relative h-screen flex items-center justify-between px-8 overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 700 500'
          className='w-full h-full'
        >
          <rect fill='transparent' width='800' height='800' />
          <g fill='none' stroke='#262626' strokeWidth='1'>
            <path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/>
            <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/>
            <path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/>
            <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/>
            <path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/>
          </g>
          <g fill='#262626'>
            <circle cx='769' cy='229' r='5'/>
            <circle cx='539' cy='269' r='5'/>
            <circle cx='603' cy='493' r='5'/>
            <circle cx='731' cy='737' r='5'/>
            <circle cx='520' cy='660' r='5'/>
            <circle cx='309' cy='538' r='5'/>
            <circle cx='295' cy='764' r='5'/>
            <circle cx='40' cy='599' r='5'/>
            <circle cx='102' cy='382' r='5'/>
            <circle cx='127' cy='80' r='5'/>
            <circle cx='370' cy='105' r='5'/>
            <circle cx='578' cy='42' r='5'/>
            <circle cx='237' cy='261' r='5'/>
            <circle cx='390' cy='382' r='5'/>
          </g>
        </svg>
      </div>

      {/* Right side: Image */}
      <div className='w-1/2 flex justify-center items-center relative z-10'>
        <img
          src='/images/hero1.png'
          alt='Orflax Product'
          className='w-full max-w-lg rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105'
        />
      </div>

      {/* Left side: Text content */}
      <div className='w-1/2 text-left text-white relative z-10'>
        <h2 className='text-4xl md:text-5xl p-2 text-primary font-bold mb-4'>
          World&apos;s Leading Cable Wire Industry
        </h2>
        {/* Review Section */}
        <div className='mt-4 p-4 rounded-full backdrop-filter backdrop-blur-md bg-white/20 border border-white/20 shadow-lg'>
          <p className='text-center text-lg text-white italic'>
          &quot;{reviews[currentReview]}&quot;
          </p>
        </div>
        <p className='text-lg mb-4 mt-4 leading-relaxed'>
          At Orflax, we specialize in high-quality cables and wires that power industries and homes. With 15 years of experience, we are committed to innovation and reliability, ensuring our products meet the highest standards.
        </p>
        <h1 className='text-6xl font-bold mt-6'>Orflax</h1>
        <Link
          href='/contact'
          className='mt-6 inline-block bg-primary rounded-full px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all transform hover:scale-105'
        >
          Contact Now
        </Link>
        
        
      </div>
    </section>
  );
};

export default Hero;
