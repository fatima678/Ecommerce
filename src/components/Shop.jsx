import React from 'react';
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';
import Offer from './Offers/Offer';
import NewCollection from './NewCollection/NewCollection';
import NewsLetter from './NewsLetter/NewsLetter';
import Footer  from './Footer/Footer';



const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
      
      
    </div>
  );
}

export default Shop;

