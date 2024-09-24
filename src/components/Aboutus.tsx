import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className='bg-gray text-white relative overflow-hidden'>
      <div className='absolute inset-0 -z-50 pointer-events-none'>
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
      <section id='about' className='py-16 mt-10'>
        <div className='container mx-auto px-6'>
          <h2 className='text-center text-5xl font-bold text-primary mb-10'>About Us</h2>
          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {['nabout1.jpg', 'nabout2.webp', 'nabout3.jpg', 'nabout4.avif'].map((img, index) => (
              <img
                key={index}
                src={`/images/${img}`}
                alt={`About Image ${index + 1}`}
                className='w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105'
              />
            ))}
          </div>
        </div>
      </section>
      <section className='py-16 bg-gray'>
        <div className='container mx-auto px-6'>
          <div className='bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg p-8 shadow-lg'>
            <p className='mt-4 text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed'>
              ORFLAX INDIA PVT LTD has emerged as one of the leading manufacturers and suppliers of electric wires & cables under the brand name of “ORFLAX”. We are an ISO 9001-2015 certified company, having earned this recognition in a short time. We specialize in Power & Control Cables, LT XLPE/PVC Cables, Lighting Cables (House Wiring), Insulated Electrical Cables, PVC Electrical Cables, and various industrial cables.
            </p>
            <p className='mt-4 text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed'>
              We introduce Triple Layer Coating in various items specific to multi-strand wire and submersible wire. For the past 15 years, ORFLAX INDIA PVT LTD has excelled in the research, development, and production of wires and cables for electrical and electronic applications. Our products meet IS specifications and can be customized to client specifications.
            </p>
            <p className='mt-4 text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed'>
              Our wires & cables match the highest international standards for quality and dependability. Each cable undergoes rigorous quality checks at every stage, from raw material procurement to manufacturing and dispatch.
            </p>
            <p className='mt-4 text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed'>
              Based in North India, we offer a wide range of copper and aluminum wires & cables.
            </p>
          </div>
        </div>
        <h1 className='font-bold text-3xl mt-10 mb-5 flex justify-center'>Need Help With Easier Industrial Solutions? We Are Experts!</h1>
        <div className='flex justify-center'>
        <Link
          href='/contact'
          className='mt-6 inline-block center bg-primary rounded-full px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all transform hover:scale-105'
        >
          Contact Now
        </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
