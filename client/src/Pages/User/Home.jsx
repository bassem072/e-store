import React from 'react';
import Intro from '../../Components/ui/Home/Intro';
import Boxes from '../../Components/ui/Home/Boxes';
import MostPopular from '../../Components/ui/Home/MostPopular';
import NewFeaturedOffers from '../../Components/ui/Home/NewFeaturedOffers';
import FeaturedProducts from '../../Components/ui/Home/FeaturedProducts';
import CustomerSays from '../../Components/ui/Home/CustomerSays';
import Clients from '../../Components/ui/Home/Clients';
import LatestNews from '../../Components/ui/Home/LatestNews';

export default function Home() {

  return (
    <div className="w-5/6 md:w-[93%] lg:w-[95%] xl:w-5/6 flex flex-col gap-10 pb-10">
      <Intro />
      <Boxes />
      <MostPopular />
      <NewFeaturedOffers />
      <FeaturedProducts />
      <CustomerSays />
      <Clients />
      <LatestNews />
    </div>
  );
}
