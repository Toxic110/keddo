import React from 'react';
import {Line} from 'rc-progress';
import {formatMoney} from '../../utils';
import {ContentBlock} from '../index';

const NewLevelDiscount = ({animateClass, progressBar}) => (
  <ContentBlock animateClass={animateClass}>
    <div className="new-level-discount">
      <div className="new-level-discount__title">
        До следующего уровня скидки, вам
        <br />
        необходимо <span>{formatMoney(15000)}</span>
      </div>
      <div className="new-level-discount__progress">
        <Line
          percent={progressBar}
          strokeWidth="2.8"
          trailWidth="2.8"
          trailColor="#fff"
          strokeColor="#000"
          className="new-level-discount__progress-bar"
        />
        <div className="new-level-discount__progress-info">
          <div className="new-level-discount__progress-start">{formatMoney(15000)}</div>
          <div className="new-level-discount__progress-end">{formatMoney(45000)}</div>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default NewLevelDiscount;
