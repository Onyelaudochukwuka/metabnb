import React, { useState } from 'react';

import { Navbar, Footer, PopUp } from '../..';

import style from './index.module.scss';
// eslint-disable-next-line
const Layout = ({ children, ...props }) => {
  const [popUp, setPopUp] = useState(false);
  return (
    <section {...props} className={style.Layout}>
      <Navbar openPopUp={() => setPopUp(true)} />
      <PopUp {...{ popUp, toggle: () => setPopUp((props) => !props) }} />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
