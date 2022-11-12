import React from 'react';
import style from './index.module.scss';
// eslint-disable-next-line
const images = ['hero2', 'hero1', 'hero4', 'hero3'];
const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.Hero__conatiner}>
        <h1 className={style.Hero__conatiner__heading}>
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form>
          <input type="text" placeholder="Search for location" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={style.Hero__images}>
        {images.map((image) => (
          <img src={`${image}.png`} className={style[image]} alt="hero" key={image.replace('/', '')} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
