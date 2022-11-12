import React from 'react';

import { Layout, PlaceToStayContent } from '../../components';

import style from './index.module.scss';

const PlaceToStay = () => {
  return (
    <section className={style.NFT}>
      <Layout>
        <PlaceToStayContent />
      </Layout>
    </section>
  );
};

export default PlaceToStay;
