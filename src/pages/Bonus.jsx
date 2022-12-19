import React from 'react';

import {LayoutDefault} from '../layouts';
import {BonusInfo} from '../components';
import BonusHistory from '../containers/BonusHistory';

const Bonus = () => (
  <LayoutDefault>
    <BonusInfo animateClass="animate__bounceInUp" />
    <BonusHistory animateClass="animate__bounceInUp" />
  </LayoutDefault>
);

export default Bonus;
