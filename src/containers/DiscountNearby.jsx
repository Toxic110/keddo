import React from 'react';
import {formatMoney} from '../utils';
import {DiscountNearbyItem} from '../components';

import classNames from 'classnames';

import avatar1 from 'Assets/images/ava-1.jpeg';
import avatar2 from 'Assets/images/ava-2.jpeg';
import avatar3 from 'Assets/images/ava-3.jpeg';
import avatar4 from 'Assets/images/ava-4.jpeg';
import avatar5 from 'Assets/images/ava-5.jpeg';

const users = [
  {avatar: avatar1, name: 'Евгений (Вы)', positionLeft: 22.4, positionTop: 10, delay: 2},
  {avatar: avatar2, name: 'Даша', positionLeft: 76.5, positionTop: 20, delay: 4},
  {avatar: avatar3, name: 'Сергей', positionLeft: 8.5, positionTop: 50, delay: 3},
  {avatar: avatar4, name: 'Василий', positionLeft: 71.2, positionTop: 71.6, delay: 1},
  {avatar: avatar5, name: 'Александр', positionLeft: 19.4, positionTop: 105, delay: 5}
];

const DiscountNearby = ({animateClass}) => (
  <div className={classNames('discount-nearby animate__animated', animateClass)}>
    {users.map((item, index) => (
      <DiscountNearbyItem
        key={index}
        userAvatar={item.avatar}
        userName={item.name}
        positionLeft={item.positionLeft}
        positionTop={item.positionTop}
        animateClass={`animate__delay-${item.delay}s`}
        animationDuration={item.delay}
      />
    ))}
    <div className="discount-nearby__pulse discount-nearby__pulse--level-1">
      <div className="discount-nearby__pulse discount-nearby__pulse--level-2">
        <div className="discount-nearby__pulse discount-nearby__pulse--level-3">
          <div className="discount-nearby__cash">{formatMoney(12720)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default DiscountNearby;
