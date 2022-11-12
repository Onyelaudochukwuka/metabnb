import React from 'react';

import { Navbar, Footer } from '..';

import style from './index.module.scss';
// eslint-disable-next-line
const Layout = () => {
  return (
    <section className={style.Layout}>
      <Navbar />
      <Footer />
    </section>
  );
};

export default Layout;
