import React from 'react';
import CountUp from 'react-countup';

import {ContentBlock} from '../index';
import {formatMoney} from '../../utils';

const DiscountInfo = ({showDescription = true, animateClass}) => (
  <ContentBlock animateClass={animateClass}>
    <div className="discount__info">
      <div className="discount__percent">
        <CountUp start={0} end={10} duration={3} />
        <span className="discount__percent-icon">%</span>
      </div>
      <div className="discount__name">Скидка</div>
      <div className="discount__cash">{formatMoney(12760)}</div>
      <div className="discount__name">Баланс</div>
      {showDescription && (
        <div className="discount__description">
          До следующей скидки <span>{formatMoney(15000)}</span>
        </div>
      )}
    </div>
  </ContentBlock>
);

export default DiscountInfo;
