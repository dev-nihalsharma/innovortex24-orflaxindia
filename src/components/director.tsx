import React from 'react';

const faqs = [
  {
    question: 'What are the core values of Orflax?',
    answer: 'Our core values are integrity, innovation, and customer satisfaction. We prioritize delivering high-quality products and services that meet and exceed customer expectations.'
  },
  {
    question: 'How does Orflax ensure product quality?',
    answer: 'We follow stringent quality control measures at every stage of production. Our products are tested rigorously to ensure they meet international standards.'
  },
  {
    question: 'What services does Orflax offer?',
    answer: 'Orflax specializes in manufacturing a wide range of wires and cables, catering to various industries including construction, automotive, and telecommunications.'
  },
  {
    question: 'How can I become a distributor for Orflax?',
    answer: 'To become a distributor, you can reach out to our sales team through the contact page on our website. We are always looking for reliable partners to expand our global reach.'
  }
];

const DirectorsMessage = () => {
  return (

    
    <div className="bg-gray text-white min-h-screen py-16 mt-10">
      <div className='absolute inset-0 -z-10 pointer-events-none'>
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
      <div className="container mx-auto px-6 mt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Welcome To Orflax Family</h1>
          <p className="text-xl text-gray-300">
            Join us on our journey towards innovation, excellence, and enduring customer relationships.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/3">
            <img
              src="https://img.freepik.com/premium-vector/professional-vector-icon-business-illustration-line-symbol-management-set-people-concept_1013341-352376.jpg"
              alt="Director"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="lg:w-2/3 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-primary">Director One</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
            &quot;Orflax India has always stood for excellence, innovation, and integrity. Since our inception,
              we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer
              satisfaction. Today, I am proud to say that we have not only met but exceeded our goals,
              becoming a trusted name in the field of wires and cables manufacturing.&quot;
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
            &quot;We believe that our employees, customers, and partners are the pillars of our success. Together,
              we will continue to create a future that is bright and full of opportunities.&quot;
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-20">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-primary">Director Two</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
            &quot;Orflax India has always stood for excellence, innovation, and integrity. Since our inception,
              we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer
              satisfaction. Today, I am proud to say that we have not only met but exceeded our goals,
              becoming a trusted name in the field of wires and cables manufacturing.&quot;
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
            &quot;We believe that our employees, customers, and partners are the pillars of our success. Together,
              we will continue to create a future that is bright and full of opportunities.&quot;
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src="https://img.freepik.com/premium-vector/professional-vector-icon-business-illustration-line-symbol-management-set-people-concept_1013341-352376.jpg"
              alt="Director"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* FAQ Section with Glassmorphism */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md border border-white border-opacity-30">
                <h3 className="text-2xl font-semibold text-primary mb-4">{faq.question}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;
