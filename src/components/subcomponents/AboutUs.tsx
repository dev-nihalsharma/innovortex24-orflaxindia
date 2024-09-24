import Link from "next/link";
const AboutUs = () => {
    return (
      <section className="py-20 px-6 bg-third">
        
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center px-6 md:px-12 lg:px-20"> {/* Increased padding */}
          
          {/* Text Section */}
          <div className="md:w-1/2 mb-3 md:mb-0 md:pr-6">
            <div className="text-left">
              <h1 className="text-5xl font-bold text-secondary">
                About <span className="text-primary">Us</span>
              </h1>
              <p className="mt-4 text-lg text-secondary">
                <span className="text-gray-900 font-extrabold text-2xl">15 Long Years:</span> ORFLAX INDIA PVT LTD is dedicated to excel in the research, development, and production of wires and cables for electrical and other electronic applications.
              </p>
              <p className="mt-4 text-lg font-bold text-secondary">
                We are a North India-based business group with a wide range of copper and aluminium wires & cables.
              </p>
              <Link 
                href="/about" 
                className="mt-6 inline-block bg-primary text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
  
          {/* Video Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <video
              className="rounded-lg shadow-lg w-full"
              controls={false} autoPlay={true} loop={true} muted={true}
              src="/images/about.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  