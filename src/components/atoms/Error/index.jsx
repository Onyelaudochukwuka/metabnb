import React from 'react';

import PropTypes from 'prop-types';

import { Err } from '../../../assets';

import style from './index.module.scss';
// eslint-disable-next-line
const Error = ({ error }) => {
  return (
    <section className={`${style.Error}  ${error ? style.show : style.hide}`}>
      <div className={style.Error__container}>
        <Err className={style.Error__container__icon} />
        <p>Error Connecting to account</p>
      </div>
    </section>
  );
};
Error.propTypes = {
  error: PropTypes.bool,
};

export default Error;
