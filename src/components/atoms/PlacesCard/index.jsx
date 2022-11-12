import React from 'react';

import style from './index.module.scss';

const PlacesCard = () => {
  return (
    <section className={style.PlacesCard}>
      <img src="/hero1.png" alt='places card' />
      <div><span>PlacesCard</span></div>
    </section>
  );
};

export default PlacesCard;
