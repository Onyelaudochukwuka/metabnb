import React from 'react';

import { Cta, Hero, Navbar, Places, Sponsors } from '../../components';

import style from './index.module.scss';

const Home = () => (
  <section className={style.Home}>
    <Navbar />
    <Hero />
    <Sponsors />
    <Places />
    <Cta />
  </section>
);

export default Home;
