import React from 'react';

import { Layout, PlaceToStayContent } from '../../components';

import style from './index.module.scss';

const PlaceToStay = () => {
  return (
    <Layout className={style.NFT}>
      <PlaceToStayContent />
    </Layout>
  );
};

export default PlaceToStay;
