import React from 'react';

const SaleDetails = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray">
      <h2 className="text-5xl font-bold text-primary">Our Big Sale is Here!</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
        Don’t miss out on exclusive deals and discounts of up to <span className="font-semibold text-primary">50% off</span> on select items!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="images/product3.jpg" alt="Sale Item 2" className="w-full h-full object-contain"/>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="images/product2.avif" alt="Sale Item 2" className="w-full h-full object-contain"/>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="images/product1.avif" alt="Sale Item 3" className="w-full h-full object-contain"/>
        </div>
      </div>

      <button className="mt-8 h-15 font-bold bg-primary rounded-full text-white py-2 px-4 shadow-md hover:bg-blue-700 transition duration-300">
        Shop Now
      </button>
    </section>
  );
};

export default SaleDetails;
