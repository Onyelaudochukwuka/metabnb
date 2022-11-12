import React from 'react';

import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

import style from './index.module.scss';

const NavLink = ({ to, children, className, ...props }) => (
  <Link
    to={to}
    className={(active) => `${style.active} ${style.NavLink}`}
    {...props}
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  children: '',
  className: '',
  to: '/',
};

export default NavLink;
