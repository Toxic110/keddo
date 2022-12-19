import React from 'react';
import classNames from 'classnames';

const DiscountNearbyItem = ({
  animateClass,
  userAvatar,
  userName,
  positionLeft,
  positionTop,
  animationDuration
}) => (
  <div
    className={classNames('discount-nearby-item animate__animated animate__fadeIn', animateClass)}
    style={{left: `${positionLeft}vw`, top: `${positionTop}vw`}}>
    <div className="discount-nearby-item__avatar" style={{animationDelay: `${animationDuration}s`}}>
      <img src={userAvatar} alt="avatar" />
    </div>
    <div className="discount-nearby-item__name">{userName}</div>
  </div>
);

export default DiscountNearbyItem;
