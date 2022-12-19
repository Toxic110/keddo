import React from 'react';
import CountUp from 'react-countup';

import {ContentBlock} from '../index';

const BonusInfo = ({animateClass}) => (
  <ContentBlock animateClass={animateClass}>
    <div className="bonus__info">
      <CountUp className="bonus__balls" start={0} end={2000} duration={3} />
      <div className="bonus__name">бонусов</div>
      <div className="bonus__description">Сгорают 22.05.2021</div>
    </div>
  </ContentBlock>
);

export default BonusInfo;
