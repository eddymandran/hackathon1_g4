import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/AboutUs.css';
import jacquesroux from '../img/jacquesroux.jpg';
import jeanfrançoisvarlet from '../img/jeanfrançoisvarlet.jpg';
import olympedegouges from '../img/olympedegouges.jpg';
import madameroland from '../img/madameroland.jpg';
import jeantheophileleclerc from '../img/jeantheophileleclerc.jpg';

const avatarArray = [
  {
    src: jacquesroux,
    legend: 'Jacques Roux',
  },
  {
    src: jeanfrançoisvarlet,
    legend: 'Jean-François Varlet',
  },
  {
    src: madameroland,
    legend: 'Madame Roland',
  },
  {
    src: olympedegouges,
    legend: 'Olympe de Gouges',
  },
  {
    src: jeantheophileleclerc,
    legend: 'Jean-Théophile Leclerc',
  },
];
const AboutUs = () => {
  return (
    <div className='about-us' id='about-us'>
      <div className='about-us-carousel-container' id='AboutUs'>
        <h1 className='about-us-title'> Leader of the Revolution </h1>
        <Carousel
          className='about-us-carousel'
          autoPlay
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {avatarArray.map((avatar) => (
            <div className='about-us-container' key={avatar.legend}>
              <img alt={avatar.legend} src={avatar.src} />
              <p className='legend'>{avatar.legend}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;