import React from 'react';

import { Filter } from '../../../assets';

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
    </section>
  );
};

export default PlaceToStayContent;
