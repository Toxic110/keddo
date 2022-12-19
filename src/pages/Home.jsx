import React from 'react';

import {LayoutDefault} from '../layouts';
import {AppLink, Barcode, BonusInfo, DiscountInfo, LoyaltyInfo} from '../components';

const Home = () => (
  <LayoutDefault>
    <Barcode animateClass="animate__bounceInLeft" />
    <AppLink to="/bonus" className="home-link">
      <BonusInfo animateClass="animate__bounceInRight" />
    </AppLink>
    <AppLink to="/discount" className="home-link">
      <DiscountInfo animateClass="animate__bounceInUp" />
    </AppLink>
    <LoyaltyInfo />
  </LayoutDefault>
);

export default Home;
