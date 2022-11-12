import React from 'react';

import { Navbar, Footer } from '..';

import style from './index.module.scss';
// eslint-disable-next-line
const Layout = ({children, ...props}) => {
  return (
    <section
      {...props}
      className={style.Layout}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
