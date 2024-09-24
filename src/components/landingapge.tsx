import AboutUs from './subcomponents/AboutUs';
import Hero from './subcomponents/Hero';
import ProductDetails from './subcomponents/ProductDetails';
import SaleDetails from './subcomponents/SaleDetails';
import Stats from './subcomponents/Stats';
import WhyChooseUs from './subcomponents/WhyChooseUs';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Stats />
      <WhyChooseUs />
      <SaleDetails />
      <ProductDetails />
    </>
  );
};

export default LandingPage;
