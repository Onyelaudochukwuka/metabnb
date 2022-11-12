import React from 'react';

import PropTypes from 'prop-types';

import { Close } from '../../../assets';
import { Wallet } from '../../atoms';

import style from './index.module.scss';

const PopUp = ({ popup, toggle }) => {
  return (
    <section className={`${style.PopUp} ${popup ? style.show : style.hide}`}>
      <div className={style.PopUp__container}>
        <header>
          <h3>Connect Wallet</h3>
          <Close className={style.PopUp__container__close} onClick={toggle} />
        </header>
        <div className={style.PopUp__container__wallets}>
          <p>Choose your preferred wallet:</p>
          <div className={style.PopUp__container__wallets__links}>
            <Wallet wallet="Metamask" />
            <Wallet wallet="WalletConnect" />
          </div>
        </div>
      </div>
    </section>
  );
};

PopUp.propTypes = {
  popup: PropTypes.bool,
  toggle: PropTypes.func,
};
export default PopUp;
