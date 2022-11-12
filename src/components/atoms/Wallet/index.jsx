import React from 'react';

import PropTypes from 'prop-types';

import { LeftArrow } from '../../../assets';

import style from './index.module.scss';
// eslint-disable-next-line
const Wallet = ({ wallet }) => {
  return (
    <section className={style.Wallet}>
      <span className={style.Wallet__container}>
        <img src={`/wallets/${wallet.toLowerCase()}.png`} />
        <span>{ wallet }</span>
      </span>
      <LeftArrow />
    </section>
  );
};

Wallet.propTypes = {
  wallet: PropTypes.string,
};
export default Wallet;
