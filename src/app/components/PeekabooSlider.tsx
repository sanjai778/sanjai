'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './PeekabooSlider.module.css';

interface Slide {
  id: number;
  text: string;
}

const PeekabooSlider: React.FC = () => {
  // Use a small number of slides to test the loop fix
  const slides: Slide[] = [
    { id: 1, text: 'Slide 1' },
    { id: 2, text: 'Slide 2' },
    { id: 3, text: 'Slide 3' },
  ];

  // Fix for low slide count: duplicate the data array
  const displaySlides = [...slides, ...slides];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.mySwiper}
      >
        {displaySlides.map((slide, index) => (
          <SwiperSlide key={`${slide.id}-${index}`} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <h3>{slide.text}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PeekabooSlider;
