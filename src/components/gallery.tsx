"use client";

import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const images = [
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-11.15.49-PM-1024x523.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-11.05.49-PM-1024x520.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-10.59.00-PM-1024x779.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/img1-1024x363.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-23-at-6.28.40-PM.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-10.26.14-PM-1024x620.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.50.51-PM-2.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.50.48-PM-e1692694437805.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.46.24-PM-1152x1536.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.44.56-PM-1-1024x1024.jpeg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(images[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [activeIndex]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setActiveImage(images[index]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  const showNextImage = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
    setActiveImage(images[newIndex]);
  };

  const showPreviousImage = () => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
    setActiveImage(images[newIndex]);
  };

  return (
    <div className="bg-gray text-white min-h-screen py-16">
      <div className='absolute -z-50 inset-0 pointer-events-none'>
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
      <div className="container mx-auto px-6">
        <h1 className="text-5xl text-primary font-bold text-center mb-3 mt-8">Gallery</h1>
        <p className='text-center text-lg mb-6'>A Glimpse into our World...</p>
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(activeIndex % images.length) * 33.33}%)` }}>
            {images.map((image, index) => (
              <div
                key={index}
                className="w-1/3 h-100 mx-2 flex-shrink-0 relative cursor-pointer" 
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute left-0 ml-4 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors z-50"
            onClick={showPreviousImage}
          >
            &lsaquo;
          </button>
          <div className="relative">
            <img
              src={activeImage || ""}
              alt="Enlarged view"
              className="max-w-full max-h-full rounded-lg shadow-lg transform transition-transform duration-300"
            />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
          <button
            className="absolute right-0 mr-4 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors z-50"
            onClick={showNextImage}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
