import React from 'react';

import PropTypes from 'prop-types';

import { LeftArrow } from '../../../assets';

import style from './index.module.scss';
// eslint-disable-next-line
const Wallet = ({ wallet, setAccount, setLoading, setError }) => {
  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      });
    }, 5000);
    if (wallet === 'Metamask') {
      if (window.ethereum) {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((res) => {
            setAccount(res[0]);
            setLoading(false);
          })
          .catch((err) => {
            // eslint-disable-next-line
            console.log(err, 'error');
            setLoading(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          });
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <section className={style.Wallet} onClick={handleConnect}>
      <span className={style.Wallet__container}>
        <img src={`/wallets/${wallet.toLowerCase()}.png`} />
        <span>{wallet}</span>
      </span>
      <LeftArrow />
    </section>
  );
};

Wallet.propTypes = {
  wallet: PropTypes.string,
  setAccount: PropTypes.func,
  setLoading: PropTypes.func,
  setError: PropTypes.func,
};
export default Wallet;
