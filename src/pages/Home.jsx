import React from 'react';

import { Hero ,Hero2, Footer ,Services , TopSalon ,UnequalSizeGallery ,
  CategorySection, GetInTouch , ServiceMenu, SalonTypes, NewToFresh, FAQSection } from '../index.js';

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceMenu />
      <NewToFresh />
      <CategorySection />
      <UnequalSizeGallery />
      <FAQSection />
      {/* <GetInTouch /> */}
   
    </>
  );
};

export default Home;
