import React, { useState } from 'react';

import { Navbar, Footer, PopUp } from '../..';

import style from './index.module.scss';
// eslint-disable-next-line
const Layout = ({ children, ...props }) => {
  const [popUp, setPopUp] = useState(true);
  return (
    <section {...props} className={style.Layout}>
      <Navbar openPopUp={() => setPopUp((props) => !props)} />
      <PopUp {...{ popUp, toggle: () => setPopUp((props) => !props) }} />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
