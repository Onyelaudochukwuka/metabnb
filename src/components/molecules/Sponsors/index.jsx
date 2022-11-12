import React from 'react';
import { MBToken, Metamask, OpenSea } from '../../../assets';
import style from './index.module.scss';
// eslint-disable-next-line
const Sponsors = () => {
  return (
    <section className={style.Sponsors}>
      <MBToken />
      <Metamask />
      <OpenSea />
    </section>
  );
};

export default Sponsors;
