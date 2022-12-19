import React from 'react';

import classNames from 'classnames';
import {formatMoney} from '../../utils';

const DiscountFamilyItem = ({
  animateClass,
  familyAvatar,
  familyName,
  familyRole,
  familyGeneralCash,
  familyLevel,
  familyCash,
  familyDate
}) => (
  <div
    className={classNames(
      'discount-family__item animate__animated animate__bounceIn',
      animateClass
    )}>
    <div className="discount-family__item-head">
      <div className="discount-family__item-avatar">
        <img src={familyAvatar} alt="avatar" />
      </div>
      <div className="discount-family__item-description">
        <div className="discount-family__item-name">{familyName}</div>
        <div className="discount-family__item-role">{familyRole}</div>
      </div>
    </div>
    <div className="discount-family__item-body">
      <div className="discount-family__item-text">Общий взнос в семейный круг</div>
      <div className="discount-family__item-general-cash">{formatMoney(familyGeneralCash)}</div>
    </div>
    <div className="discount-family__item-footer">
      <div className="discount-family__item-level">Уровень {familyLevel}</div>
      <div className="discount-family__item-cash">{formatMoney(familyCash)}</div>
      <div className="discount-family__item-date">В кругу с : {familyDate}</div>
    </div>
  </div>
);

export default DiscountFamilyItem;
