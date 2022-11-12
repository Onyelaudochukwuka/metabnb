import React, { useId } from 'react';

import { PlacesCard } from '../../atoms';

import style from './index.module.scss';
const placesDetails = [
  {
    image: 'places1',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places2',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places3',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places4',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places5',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places6',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places7',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'places8',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
];
const Places = () => {
  const id = useId();
  return (
    <section className={style.Places}>
      <h2>Inspiration for your next adventure</h2>
      <div className={style.Places__cards}>
      {placesDetails.map((place, i) => (
        <PlacesCard key={id + i} {...place} />
      ))}
      </div>
    </section>
  );
};

export default Places;
