import React, {useState} from 'react';
import {ContentBlock, BonusHistoryItem} from '../components';
import {UiKitButton} from '../uikit';
import {scrollToBottom} from '../utils/scroll';

const historyArray = [
  {date: '12.12.2012', cash: 500, description: true},
  {date: '12.12.2012', cash: 200, description: false},
  {date: '12.12.2012', cash: 300, description: true},
  {date: '12.12.2012', cash: 600, description: true},
  {date: '12.12.2012', cash: 500, description: false},
  {date: '12.12.2012', cash: 200, description: true},
  {date: '12.12.2012', cash: 100, description: true},
  {date: '12.12.2012', cash: 100, description: true},
  {date: '12.12.2012', cash: 100, description: false},
  {date: '12.12.2012', cash: 100, description: true}
];

const BonusHistory = ({animateClass}) => {
  const [bonusHistoryItems, setBonusHistoryItems] = useState(historyArray);
  const [bonusHistoryItemsShow, setBonusHistoryItemsShow] = useState(7);

  const setShowHistoryBonusItems = () => {
    setBonusHistoryItemsShow(bonusHistoryItems.length);
    scrollToBottom();
  };

  return (
    <ContentBlock animateClass={animateClass}>
      <h2 className="content-title">История операций</h2>
      <div className="bonus-history__container">
        {bonusHistoryItems.slice(0, bonusHistoryItemsShow).map((item, index) => (
          <BonusHistoryItem
            key={`${item.date}_${index}`}
            historyDate={item.date}
            historyCash={item.cash}
            historyDescription={item.description}
          />
        ))}
        {!(bonusHistoryItemsShow === bonusHistoryItems.length) && (
          <UiKitButton
            type="button"
            text="Показать еще"
            className="btn-black bonus-history__btn"
            onClick={setShowHistoryBonusItems}
          />
        )}
      </div>
    </ContentBlock>
  );
};

export default BonusHistory;
