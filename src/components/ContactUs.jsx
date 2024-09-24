import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray text-white mt-10'>
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
      <section id='contact' className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col lg:flex-row gap-12'>
            <div className='lg:w-1/2'>
              <h2 className='text-6xl font-bold mb-4 mt-20 text-primary'>Contact Us</h2>
              <p className='text-lg mb-2'>
                <strong className='text-primary'>Address:</strong> B-42/15 Jhilmil Industrial Area, G.T.Road, Delhi 110 095
              </p>
              <p className='text-lg mb-2'>
                <strong className='text-primary'>Email:</strong>{' '}
                <a href='mailto:Connect@orflaxindia.com' className='text-blue-400 hover:underline'>
                  Connect@orflaxindia.com
                </a>
              </p>
              <p className='text-lg mb-2'>
                <strong className='text-primary'>Phone:</strong> +91 93134 93405 | +91 93136 66292 | +91 92051 93405
              </p>
              <p className='text-lg'>
                <strong className='text-primary'>Landline:</strong> 011-41523405
              </p>
            </div>
            <div className='lg:w-1/2'>
              <form className='bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-300'>
                <div className='mb-4'>
                  <label htmlFor='name' className='block text-lg mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full p-3 rounded bg-gray-500 text-white focus:outline-none focus:ring focus:ring-blue-500'
                    placeholder='Your Name'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='email' className='block text-lg mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full p-3 rounded bg-gray-500 text-white focus:outline-none focus:ring focus:ring-blue-500'
                    placeholder='Your Email'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='message' className='block text-lg mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='w-full p-3 rounded bg-gray-500 text-white focus:outline-none focus:ring focus:ring-blue-500'
                    placeholder='Your Message'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='mt-6 inline-block bg-primary text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-blue-800 transition-all'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-gray'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-8 text-primary'>Find Us on Google Maps</h2>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8394275921!2d77.09134469795018!3d28.6466774208027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc2a321ac9e5%3A0x404240b76b530f2b!2sJhilmil%20Industrial%20Area%2C%20Anand%20Vihar%2C%20Delhi%2C%20110092%2C%20India!5e0!3m2!1sen!2sus!4v1614708220077!5m2!1sen!2sus'
              width='600'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              className='w-full rounded-lg border-0'
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
