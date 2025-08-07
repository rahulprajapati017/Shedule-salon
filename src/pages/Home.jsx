import React from 'react';

import { Hero ,UnequalSizeGallery ,
  CategorySection, ServiceMenu, NewToFresh, FAQSection } from '../index.js';

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
