import React from 'react';

import { Filter } from '../../../assets';
import { PlacesCard } from '../../atoms';

import style from './index.module.scss';

const filters = [
  'Resturant',
  'Cottage',
  'Castle',
  'fantast city',
  'beach',
  'Carbins',
  'Off-grid',
  'Farm',
];
const placesDetails = [
  {
    image: 'place-to-stay1',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay2',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay3',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay4',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay5',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay6',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay7',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay8',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay9',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay10',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay11',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay12',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay13',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay14',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay15',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
  {
    image: 'place-to-stay16',
    title: 'Desert king',
    payment: '1MBT per night',
    distance: '2345km away',
    availability: 'available for 2weeks stay',
    stars: 5,
  },
];
const PlaceToStayContent = () => {
  return (
    <section className={style.PlaceToStayContent}>
      <div className={style.PlaceToStayContent__filters}>
        {filters.map((filter) => (
          <button key={filter} type="button">{filter}</button>
        ))}
        <div className={style.PlaceToStayContent__filters__icon}>
          <span>Location</span>
          <Filter />
        </div>
      </div>
      <div className={style.PlaceToStayContent__cards}>
      {placesDetails.map((place) => (
        <PlacesCard key={place.image} relativeUrl="place-to-stay" {...place} />
      ))}
      </div>
    </section>
  );
};

export default PlaceToStayContent;
