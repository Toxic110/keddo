import React from 'react';

import {LayoutDefault} from '../layouts';
import {DiscountInfo} from '../components';
import {DiscountFamily, DiscountNearby, NewLevelDiscountContainer} from '../containers';

const Discount = () => (
  <LayoutDefault>
    <DiscountInfo showDescription={false} animateClass="animate__bounceInUp" />
    <NewLevelDiscountContainer animateClass="animate__bounceInUp" />
    <DiscountNearby animateClass="animate__fadeIn animate__delay-1s" />
    <DiscountFamily animateClass="animate__backInUp" />
  </LayoutDefault>
);

export default Discount;
