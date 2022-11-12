import React from 'react';

import { Link } from 'react-router-dom';

import { Facebook, Instagram, Twitter } from '../../../assets';
import FooterLogo from '../../../assets/icons/FooterLogo';

import style from './index.module.scss';
const links = [
  {
    heading: 'Community',
    links: [
      {
        text: 'NFT',
        to: '/nfts',
      },
      {
        text: 'Tokens',
        to: '/tokens',
      },
      {
        text: 'Landlords',
        to: '/landlords',
      },
      {
        text: 'Discord',
        to: '/discord',
      },
    ],
  },
  {
    heading: 'Places',
    links: [
      {
        text: 'Castle',
        to: '/castle',
      },
      {
        text: 'Farms',
        to: '/farms',
      },
      {
        text: 'Villa',
        to: '/beach',
      },
      {
        text: 'Learn more',
        to: '/learn-more',
      },
    ],
  },
  {
    heading: 'About us',
    links: [
      {
        text: 'Road map',
        to: '/road-map',
      },
      {
        text: 'Creators',
        to: '/creators',
      },
      {
        text: 'Career',
        to: '/career',
      },
      {
        text: 'Contact us',
        to: '/contact-us',
      },
    ],
  },
];
const Footer = () => {
  return (
    <section className={style.Footer}>
      <div className={style.Footer__left}>
        <FooterLogo />
        <div className={style.Footer__left__socials}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className={style.Footer__right}>
        {links.map(({ heading, links: link }) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <div className={style.Footer__right__links}>
              {link.map(({ text, to }) => (
                <Link to={to} key={text}>
                  <small>{text}</small>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
