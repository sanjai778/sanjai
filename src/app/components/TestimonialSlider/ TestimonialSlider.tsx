'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './TestimonialSlider.module.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return <p>No testimonials to display.</p>;
  }

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
        slidesPerView={1.1} // Mobile
        breakpoints={{
          640: { // Tablet
            slidesPerView: 2.2,
            spaceBetween: 30
          },
          1024: { // Desktop
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className={styles.swiperContainer}
      >
        {displayTestimonials.map((t, index) => (
          <SwiperSlide key={`${t.id}-${index}`} className={styles.swiperSlide}>
            <div className={styles.card}>
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
};

export default TestimonialSlider;
