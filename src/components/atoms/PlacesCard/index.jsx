import React, { useId } from 'react';

import { Star } from '../../../assets';

import style from './index.module.scss';

const PlacesCard = () => {
  const id = useId();
  const stars = Array(5).fill(null);
  const nullStars = Array(5 - 5).fill(null);
  return (
    <section className={style.PlacesCard}>
      <img src="/hero1.png" alt='places card' />
      <div className={style.PlacesCard__description}><small>Desert king</small><small><b>1MBT per night</b></small></div>
      <div className={style.PlacesCard__description}><small>2345km away</small><small>available for 2weeks stay</small></div>
      <div className={style.PlacesCard__stars}>
        {stars.map((_, i) => (<Star key={id + i} />))}
        {nullStars.map((_, i) => (<Star key={id + i} fill="#002279" />))}
      </div>
    </section>
  );
};

export default PlacesCard;
