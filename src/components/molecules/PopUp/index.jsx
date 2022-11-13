import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Close } from '../../../assets';
import { Loader, Wallet } from '../../atoms';

import style from './index.module.scss';

const PopUp = ({ popUp, toggle, setAccount }) => {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    toggle();
  }
  return (
    <section className={`${style.PopUp} ${popUp ? style.show : style.hide}`}>
      <Loader show={isLoading} />
      <div className={style.PopUp__container}>
        <header>
          <h3>Connect Wallet</h3>
          <Close className={style.PopUp__container__close} onClick={toggle} />
        </header>
        <div className={style.PopUp__container__wallets}>
          <p>Choose your preferred wallet:</p>
          <div className={style.PopUp__container__wallets__links}>
            <Wallet wallet="Metamask" setAccount={setAccount} setLoading={(arg) => setIsLoading(arg)} />
            <Wallet wallet="WalletConnect" setAccount={setAccount} setLoading={(arg) => setIsLoading(arg)} />
          </div>
        </div>
      </div>
    </section>
  );
};

PopUp.propTypes = {
  popUp: PropTypes.bool,
  toggle: PropTypes.func,
  setAccount: PropTypes.func,
};
export default PopUp;
