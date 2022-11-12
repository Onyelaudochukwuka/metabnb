import React from 'react';
import style from './index.module.scss';
import { NavLink as Link } from 'react-router-dom';
// eslint-disable-next-line
const NavLink = ({to, children, className, ...props}) => {
  return (
    <Link to={to} className={(active) => `${style.active} ${style.NavLink}`} {...props} >
      {children}
    </Link>
  );
};

export default NavLink;
