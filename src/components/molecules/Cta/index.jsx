import React from 'react';

import style from './index.module.scss';

const Cta = () => {
  return (
    <section className={style.Cta}>
      <div className={style.Cta__container}>
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button type="button">
          <span>Learn more</span>
        </button>
      </div>
      <div className={style.Cta__images}>
        <img src="/cta/cta3.png" className={style.Cta__images__cta3} />
        <img src="/cta/cta1.png" className={style.Cta__images__cta1} />
        <img src="/cta/cta2.png" className={style.Cta__images__cta2} />
      </div>
    </section>
  );
};

export default Cta;
