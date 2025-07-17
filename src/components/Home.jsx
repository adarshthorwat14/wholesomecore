// src/pages/Home.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './Home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/image 1.jpg';
import image2 from '../assets/image 2.jpg';
import image3 from '../assets/image 3.jpg';

import gutImage from '../assets/gutfriendly.png';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Carousel Section */}
      <div className={styles.carouselWrapper}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={800}
        >
          <div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" />
          </div>
        </Carousel>
      </div>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <h1 className={styles.welcomeHeading}>WELCOME TO WHOLESOMECORE</h1>
        <p className={styles.welcomeSub}>
          Premium protein supplements designed specifically for sensitive stomachs.
        </p>
      </section>


            <section className={styles.gutProteinSection} id="gutProtein">
            <div className={styles.gutProteinContent}>
                <div className={styles.imageBox}>
                <img src={gutImage} alt="Women drinking protein shakes" />
                </div>
                <div className={styles.textBox}>
                <h2>Gut-Friendly Almond Protein. <br /> Simple. Clean. Nothing Else</h2>
                <p>No gums. No dairy. No bloating. Just real ingredients your body recognizes</p>
                <button className={styles.shopButton}>SHOP ALMOND PROTEIN</button>
                </div>
            </div>
            </section>
    </div>
  );
};

export default Home;
