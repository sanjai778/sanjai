'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider({ testimonials }) {
  if (!testimonials || testimonials.length === 0) {
    return <p>No testimonials to display.</p>;
  }

  // Best practice: If you have a small number of slides, duplicate them to ensure
  // the loop is seamless and there are always enough slides to show in the "peek" view.
  const displayTestimonials = testimonials.length <= 5 
    ? [...testimonials, ...testimonials] 
    : testimonials;

  return (
    <div className={styles.testimonialSwiperWrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        centeredSlides={true}
        // Default view for mobile
        slidesPerView={1.3} 
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 768px (tablets)
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          // when window width is >= 1200px (desktops)
          1200: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className={styles.swiperContainer}
      >
        {displayTestimonials.map((t, index) => (
          <SwiperSlide key={`${t.id}-${index}`} className={styles.swiperSlide}>
            <div className={styles.card}>
              <Image src="/uploads/2025/06/onfra2.png" alt="quote icon" width={32} height={32} className={styles.quoteIcon} />
              <p className={styles.cardText}>{t.content}</p>
              <div className={styles.cardFooter}>
                <Image src={t.img} alt={t.name} width={55} height={55} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h4>{t.name}</h4>
                  <p>{t.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
