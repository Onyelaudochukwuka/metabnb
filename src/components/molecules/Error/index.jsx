import React from 'react';

import { Err } from '../../../assets';

import style from './index.module.scss';
// eslint-disable-next-line
const Error = () => {
  return (
    <section className={style.Error}>
      <div className={style.Error__container}>
        <Err />
        <p>Error Connecting to account</p>
      </div>
    </section>
  );
};

export default Error;
