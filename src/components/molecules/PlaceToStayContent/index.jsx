import React from 'react';

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
      <div>
        {filters.map((filter) => (
          <button key={filter} type="button">{filter}</button>
        ))}
      </div>
    </section>
  );
};

export default PlaceToStayContent;
