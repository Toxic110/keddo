import React from 'react';

import {ContentBlock} from './index';
import barCodeImg from 'Assets/images/barcode.png';

const Barcode = ({animateClass}) => (
  <ContentBlock animateClass={animateClass}>
    <h2 className="content-title">Ваша карта</h2>
    <div className="barcode__img">
      <img src={barCodeImg} alt="barcode" />
    </div>
    <div className="barcode__name">KD 076 8990</div>
  </ContentBlock>
);

export default Barcode;
