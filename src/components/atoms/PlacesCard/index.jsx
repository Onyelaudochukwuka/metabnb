import React from 'react';

import style from './index.module.scss';

const PlacesCard = () => {
  return (
    <section className={style.PlacesCard}>
      <img src="/hero1.png" alt='places card' />
      <div className={style.PlacesCard__description}><small>Desert king</small><small><b>1MBT per night</b></small></div>
      <div className={style.PlacesCard__description}><small>2345km away</small><small><b>available for 2weeks stay</b></small></div>

    </section>
  );
};

export default PlacesCard;
