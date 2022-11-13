import React from 'react';

import PropTypes from 'prop-types';

import { Loading } from '../../../assets';

import style from './index.module.scss';

const Loader = ({ show }) => {
  return (
    <section className={`${style.Loader} ${show ? style.show : style.hide}`}>
      <Loading className={style.Loader__icon} />
    </section>
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;
