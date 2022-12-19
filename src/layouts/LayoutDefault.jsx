import React from 'react';
import {Header} from '../components';

const LayoutDefault = props => {
  const {children} = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LayoutDefault;
