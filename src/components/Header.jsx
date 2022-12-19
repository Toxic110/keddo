import React from 'react';
import logo from 'Assets/images/logo.svg';
import {AppLink} from './index';

const Header = () => (
  <AppLink to="/">
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  </AppLink>
);

export default Header;
