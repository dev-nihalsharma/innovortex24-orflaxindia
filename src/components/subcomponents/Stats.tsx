const Stats = () => {
    return (
        <section className="bg-third py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Box 1 */}
                    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 flex items-center glass-card">
                        <div className="flex-shrink-0">
                            <img src="images/iso.png" alt="Icon 1" className="h-20 w-20" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-primary">Certification: ISO 9001 certified for quality assurance</h3>
                        </div>
                    </div>
                    
                    {/* Box 2 */}
                    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 flex items-center glass-card">
                        <div className="flex-shrink-0">
                            <img src="images/icon2.png" alt="Icon 2" className="h-20 w-20" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-primary">Global Reach: Trusted by over 1,000 industries in 50+ countries</h3>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 flex items-center glass-card">
                        <div className="flex-shrink-0">
                            <img src="images/icon3.png" alt="Icon 3" className="h-20 w-20" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-primary">Client Satisfaction: 98% customer satisfaction in the past year</h3>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 flex items-center glass-card">
                        <div className="flex-shrink-0">
                            <img src="images/icon4.webp" alt="Icon 4" className="h-20 w-20" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg text-primary font-semibold">Longevity: Rated for a lifespan of 25+ years</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
