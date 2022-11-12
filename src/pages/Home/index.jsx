import React from 'react';
import { Hero, Navbar, Sponsors } from '../../components';
import style from './index.module.scss';
// eslint-disable-next-line
const Home = () => {
  return (
    <section className={style.Home}>
      <Navbar />
      <Hero />
      <Sponsors />
    </section>
  );
};

// mastery by robert hilm
export default Home;
