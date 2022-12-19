import React, {useState, useEffect} from 'react';
import {NewLevelDiscount} from '../components';
import {getAuthToken} from '../api/config';

const NewLevelDiscountContainer = ({animateClass}) => {
  console.log(getAuthToken('user1', '123456'));
  const [progressBar, setProgressBar] = useState(0);

  const handleSetProgressBar = () => {
    setProgressBar(50);
  };

  useEffect(() => {
    setTimeout(handleSetProgressBar, 1000);
  }, []);

  return <NewLevelDiscount progressBar={progressBar} animateClass={animateClass} />;
};

export default NewLevelDiscountContainer;
