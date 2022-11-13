import React from 'react';

import { Cta, Hero, Places, Sponsors } from '../../components';
import Layout from '../../components/molecules/Layout';

import style from './index.module.scss';
const Home = () => (
  <section className={style.Home}>
    <Layout>
      <Hero />
      <Sponsors />
      <Places />
      <Cta />
    </Layout>
  </section>
);

export default Home;
