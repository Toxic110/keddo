import React from 'react';
import classNames from 'classnames';

const BonusHistoryItem = ({historyDate, historyCash, historyDescription}) => (
  <div className="bonus-history__item animate__animated animate__bounceIn">
    <div className="bonus-history__col">
      <div className="bonus-history__date">{historyDate}</div>
      <div className="bonus-history__description">
        {historyDescription ? 'Начисление бонусов' : 'Списание бонусов'}
      </div>
    </div>
    <div className="bonus-history__col">
      <div
        className={classNames(
          'bonus-history__cash',
          historyDescription ? 'bonus-history__cash--plus' : 'bonus-history__cash--minus'
        )}>
        {historyDescription ? '+' : '-'}&nbsp;
        {historyCash}
      </div>
    </div>
  </div>
);

export default BonusHistoryItem;
