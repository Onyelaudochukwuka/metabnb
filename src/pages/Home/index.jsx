import React from 'react';

import { Cta, Hero, Places, Sponsors } from '../../components';
import Layout from '../../components/molecules/Layout';

import style from './index.module.scss';
const Home = () => (
  <Layout className={style.Home}>
    <Hero />
    <Sponsors />
    <Places />
    <Cta />
  </Layout>
);

export default Home;
