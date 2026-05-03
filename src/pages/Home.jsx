import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Steps from '../components/Steps';
import WhyUs from '../components/WhyUs';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Steps />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
