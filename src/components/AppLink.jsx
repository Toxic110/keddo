import React from 'react';
import {NavLink} from 'react-router-dom';

const AppLink = props => {
  const {to, className, children} = props;

  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default AppLink;
