import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Logo } from '../../../assets';
import { NavLink } from '../../atoms';

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
  const [dropDown, setDropDown] = useState(false);
  return (
    <nav className={style.Navbar}>
      <Logo className={style.Navbar__Logo} />
      <div className={`${style.Navbar__container} ${dropDown && style.Navbar__container__active}`}>
        <div className={style.Navbar__container__links}>
        {navLinks.map(({ text, to }) => (
          <NavLink to={to} key={text} className={style.Navbar__container__links__link}>
            {text}
          </NavLink>
        ))}
      </div>
      {
        !account
          ? <span className={style.Navbar__container__openWallet} onClick={openPopUp}>
            Connect wallet
          </span>
          : <div>
              <span className={`${style.Navbar__container__openWallet} ${style.Navbar__container__openWallet__wallet}`}>{account}</span>
          </div>
        }
      </div>
      <div className={`${style.Navbar__menuIcon} ${dropDown && style.Navbar__menuIcon__dropped}`} onClick={() => setDropDown(prop => !prop)}></div>
    </nav>
  );
};

Navbar.propTypes = {
  openPopUp: PropTypes.func,
  account: PropTypes.string,
};

export default Navbar;
