import React, { useState } from 'react';

import { Navbar, Footer, PopUp } from '../..';

import style from './index.module.scss';
// eslint-disable-next-line
const Layout = ({ children, ...props }) => {
  const [popUp, setPopUp] = useState(false);
  const [userAccount, setUserAccount] = useState(false);
  return (
    <section {...props} className={style.Layout}>
      <Navbar openPopUp={() => setPopUp(true)} account={userAccount} />
      <PopUp {...{ popUp, toggle: () => setPopUp((props) => !props), setAccount: (arg) => setUserAccount(arg) }} />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
