import React, {useState} from 'react';
import {ContentBlock, DiscountFamilyItem} from '../components';
import {UiKitButton} from '../uikit';
import {scrollToBottom} from '../utils/scroll';

import avatar1 from 'Assets/images/ava-1.jpeg';
import avatar2 from 'Assets/images/ava-2.jpeg';
import avatar3 from 'Assets/images/ava-3.jpeg';
import avatar4 from 'Assets/images/ava-4.jpeg';
import avatar5 from 'Assets/images/ava-5.jpeg';

const family = [
  {
    avatar: avatar1,
    name: 'Евгений Назаров (Вы)',
    role: 'Администратор семьи',
    generalCash: 18322,
    level: 3,
    cash: 2131,
    date: '21.03.2019'
  },
  {
    avatar: avatar2,
    name: 'Даша Артюхова',
    role: 'Находится в вашем семейном круге',
    generalCash: 1822,
    level: 2,
    cash: 2131,
    date: '21.03.2019'
  },
  {
    avatar: avatar3,
    name: 'Александр Чурин',
    role: 'Находится в вашем семейном круге',
    generalCash: 18322,
    level: 3,
    cash: 2131,
    date: '21.03.2019'
  },
  {
    avatar: avatar4,
    name: 'Евгений Назаров',
    role: 'Находится в вашем семейном круге',
    generalCash: 18322,
    level: 3,
    cash: 2131,
    date: '21.03.2019'
  },
  {
    avatar: avatar5,
    name: 'Евгений Назаров',
    role: 'Находится в вашем семейном круге',
    generalCash: 18322,
    level: 3,
    cash: 2131,
    date: '21.03.2019'
  }
];

const DiscountFamily = ({animateClass}) => {
  const [discountFamilyItems, setDiscountFamilyItems] = useState(family);
  const [discountFamilyItemsShow, setDiscountFamilyItemsShow] = useState(3);

  const setShowDiscountFamilyItems = () => {
    setDiscountFamilyItemsShow(discountFamilyItems.length);
    scrollToBottom();
  };
  return (
    <ContentBlock animateClass={animateClass} style={{marginTop: 0}}>
      <h2 className="content-title">Семейный круг</h2>
      <div className="discount-family__list">
        {discountFamilyItems.slice(0, discountFamilyItemsShow).map((item, index) => (
          <DiscountFamilyItem
            key={index}
            familyAvatar={item.avatar}
            familyName={item.name}
            familyRole={item.role}
            familyGeneralCash={item.generalCash}
            familyLevel={item.level}
            familyCash={item.cash}
            familyDate={item.date}
          />
        ))}
        {discountFamilyItemsShow < discountFamilyItems.length && (
          <UiKitButton
            type="button"
            text="Весь список"
            className="btn-black bonus-history__btn"
            onClick={setShowDiscountFamilyItems}
          />
        )}
      </div>
    </ContentBlock>
  );
};

export default DiscountFamily;
