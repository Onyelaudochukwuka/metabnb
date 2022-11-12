import React from 'react';

import style from './index.module.scss';
// eslint-disable-next-line
const images = ['hero2', 'hero1', 'hero4', 'hero3'];
const Hero = () => {
  return (
    <main className={style.Hero}>
      <div className={style.Hero__container}>
        <h1 className={style.Hero__container__heading}>
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form className={style.Hero__container__form}>
          <input type="text" placeholder="Search for location" className={style.Hero__container__form__input } />
          <button type="submit" className={style.Hero__container__form__submit}>Search</button>
        </form>
      </div>
      <div className={style.Hero__images}>
        {images.map((image) => (
          <img src={`${image}.png`} className={style[image]} alt="hero" key={image.replace('/', '')} />
        ))}
      </div>
    </main>
  );
};

export default Hero;
