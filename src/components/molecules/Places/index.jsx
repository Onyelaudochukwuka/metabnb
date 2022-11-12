import React from 'react';

import { PlacesCard } from '../../atoms';

import style from './index.module.scss';

const Places = () => {
  return (
    <section className={style.Places}>
      <h2>Inspiration for your next adventure</h2>
      <PlacesCard />
    </section>
  );
};

export default Places;
