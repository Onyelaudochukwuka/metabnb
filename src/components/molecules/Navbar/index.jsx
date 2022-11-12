import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/icons/Logo';
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
const Navbar = () => {
  return (
    <section className={style.Navbar}>
      <Logo className={style.Navbar__Logo} />
      <div className={style.Navbar__links}>
        {
          navLinks.map(({ text, to }) => (
            <NavLink to={to} key={text}>
              {text}
            </NavLink>
          ))
        }
      </div>
      <span className={style.Navbar__Wallet}>
      </span>
    </section>
  );
};

export default Navbar;
