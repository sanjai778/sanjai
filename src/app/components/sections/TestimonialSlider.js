"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './TestimonialSlider.module.css';

const testimonials = [
  { name: "Mani Bharathi", role: "Engineer", text: "Onfra revolutionized our workforce and visitor management...", avatar: "/images/avatars/avatar.png" },
  { name: "Thameem ansari", role: "Manager", text: "Onfra streamlines security management with robust tracking and access control...", avatar: "/images/avatars/avatar.png" },
  { name: "Skandha", role: "Owner", text: "Onfra enhances efficiency with its user-friendly interface and streamlined processes...", avatar: "/images/avatars/avatar.png" },
  { name: "Mani Bharathi", role: "Engineer", text: "Onfra revolutionized our workforce and visitor management...", avatar: "/images/avatars/avatar.png" },
  { name: "Thameem ansari", role: "Manager", text: "Onfra streamlines security management with robust tracking and access control...", avatar: "/images/avatars/avatar.png" },
  { name: "Skandha", role: "Owner", text: "Onfra enhances efficiency with its user-friendly interface and streamlined processes...", avatar: "/images/avatars/avatar.png" },
  // ... add more testimonials
];

export default function TestimonialSlider() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Testimonial</p>
          <h2 className={styles.title}>Hear from our satisfied clients</h2>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Image src="/images/icons/quotes.png" alt="quote" width={50} height={50} />
                </div>
                <p className={styles.cardText}>{t.text}</p>
                <div className={styles.cardFooter}>
                  <Image src={t.avatar} alt={t.name} width={50} height={50} className={styles.avatar} />
                  <div className={styles.authorInfo}>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}