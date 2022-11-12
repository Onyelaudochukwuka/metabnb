import React from 'react';
import { Hero, Navbar, Places, Sponsors } from '../../components';
import style from './index.module.scss';
// eslint-disable-next-line
const Home = () => {
  return (
    <section className={style.Home}>
      <Navbar />
      <Hero />
      <Sponsors />
      <Places />
    </section>
  );
};

export default Home;
