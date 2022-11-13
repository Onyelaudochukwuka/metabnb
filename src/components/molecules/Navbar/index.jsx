import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Logo } from '../../../assets';

import style from './index.module.scss';
// eslint-disable-next-line
const navLinks = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Place to stay',
    to: '/place-to-stay',
  },
  {
    text: 'NFTs',
    to: '/nfts',
  },
  {
    text: 'Community',
    to: '/community',
  },
];
const Navbar = ({ openPopUp, account }) => {
  return (
    <section className={style.Navbar}>
      <Logo className={style.Navbar__Logo} />
      <div className={style.Navbar__links}>
        {navLinks.map(({ text, to }) => (
          <NavLink to={to} key={text} className={style.Navbar__links__link}>
            {text}
          </NavLink>
        ))}
      </div>
      {
        !account
          ? <span className={style.Navbar__openWallet} onClick={openPopUp}>
            Connect wallet
          </span>
          : <div>
            <span className={`${style.Navbar__openWallet} ${style.Navbar__openWallet__wallet}`}>{account}</span>
          </div>
      }
    </section>
  );
};

Navbar.propTypes = {
  openPopUp: PropTypes.func,
  account: PropTypes.string,
};

export default Navbar;
