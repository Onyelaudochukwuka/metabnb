import React from 'react';

import { Close } from '../../../assets';

import style from './index.module.scss';

const PopUp = () => {
  return (
    <section className={style.PopUp}>
      <div className={style.PopUp__container}>
        <header>
          <h3>Connect Wallet</h3>
          <Close />
        </header>
        <div className={style.PopUp__container__wallets}>
          <p>Choose your preferred wallet:</p>
        </div>
      </div>
    </section>
  );
};

export default PopUp;
