import React, { useId } from 'react';

import PropTypes from 'prop-types';

import { Like, Star } from '../../../assets';

import style from './index.module.scss';

const PlacesCard = ({
  image,
  title,
  payment,
  distance,
  availability,
  stars,
}) => {
  const id = useId();
  const starsArr = Array(stars).fill(null);
  const nullStars = Array(5 - stars).fill(null);
  return (
    <section className={style.PlacesCard}>
      <img src="/hero1.png" alt="places card" />
      <Like className={style.PlacesCard__like} />
      <div className={style.PlacesCard__description}>
        <small>Desert king</small>
        <small>
          <b>1MBT per night</b>
        </small>
      </div>
      <div className={style.PlacesCard__description}>
        <small>2345km away</small>
        <small>available for 2weeks stay</small>
      </div>
      <div className={style.PlacesCard__stars}>
        {starsArr.map((_, i) => (
          <Star key={id + i} />
        ))}
        {nullStars.map((_, i) => (
          <Star key={id + i} fill="#002279" />
        ))}
      </div>
    </section>
  );
};

PlacesCard.defaultProps = {
  image: 'places1',
  title: 'Desert king',
  payment: '1MBT per night',
  distance: '2345km away',
  availability: 'available for 2weeks stay',
  stars: 5,
};
PlacesCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  payment: PropTypes.string,
  distance: PropTypes.string,
  availability: PropTypes.string,
  stars: PropTypes.number,
};

export default PlacesCard;
