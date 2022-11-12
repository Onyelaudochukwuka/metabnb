import React from 'react';

import { Footer, Navbar, PlaceToStayContent } from '../../components';

import style from './index.module.scss';

const PlaceToStay = () => {
  return (
    <section className={style.NFT}>
      <Navbar />
      <PlaceToStayContent />
      <Footer />
    </section>
  );
};

export default PlaceToStay;
