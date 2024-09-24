const WhyChooseUs = () => {
    return (
      <section className="py-20 px-6 bg-third text-center">
        <h2 className="text-5xl font-bold text-secondary">Why <span className="text-primary">Choose</span> Us?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-500">
          We offer the best quality and service, with years of experience and a commitment to excellence.
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Point 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-primary">PERFORMANCE AND RELIABILITY</h3>
            <p className="mt-4 text-gray-700">
              Human Capital leverages research, analytics, and industry insights to help design and execute critical programs from business-driven HR to innovative talent, leadership, and change programs.
            </p>
          </div>
  
          {/* Point 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-primary">BEST QUALITY</h3>
            <p className="mt-4 text-gray-700">
              Works with senior executives to help them solve their toughest and most complex problems by bringing an approach to executable strategy that combines deep industry knowledge and insight.
            </p>
          </div>
  
          {/* Point 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-primary">TECHNOLOGICAL DEVELOPMENT</h3>
            <p className="mt-4 text-gray-700">
              Delivers solutions that help drive transformation, improve productivity, and streamline business operations. Our practical, innovative solutions are linked to measurable goals to help our clients.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  