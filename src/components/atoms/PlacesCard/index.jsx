import React, { useId, useState } from 'react';

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
  relativeUrl,
}) => {
  const id = useId();
  const starsArr = Array(stars).fill(null);
  const nullStars = Array(5 - stars).fill(null);
  const [liked, setLiked] = useState(false);
  return (
    <section className={style.PlacesCard}>
      <img src={`/${relativeUrl ?? 'places'}/${image}.png`} alt="places card" />
      <Like
        className={style.PlacesCard__like}
        fill={liked ? 'red' : '#D7D7D7'}
        onClick={() => setLiked((prop) => !prop)}
      />
      <div className={style.PlacesCard__description}>
        <small>{title}</small>
        <small>
          <b>{payment}</b>
        </small>
      </div>
      <div
        className={`${style.PlacesCard__description} ${style.PlacesCard__info}`}
      >
        <small>{distance}</small>
        <small>{availability}</small>
      </div>
      <div className={style.PlacesCard__stars}>
        {starsArr.map((_, i) => (
          <Star key={id + i} />
        ))}
        {nullStars.map((_, i) => (
          <Star key={id + i} fill="#e96eb5" />
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
  relativeUrl: PropTypes.string,
};

export default PlacesCard;
