"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from './BlogSlider.module.css';

const posts = [
  {
    date: 'August 11, 2025',
    title: 'Enhanced Mega Alerts (Emergency Notifications) for Proactive Workplace Safety',
    excerpt: 'Onfra.io has announced powerful new updates to its Mega Alerts (Workplace Emergency Notifications)...',
    imageUrl: '/blogs/blog-1.png',
    slug: '/blogs/enhanced-mega-alerts',
  },
  {
    date: 'August 14, 2025',
    title: 'Benefits of a Digital Gate Pass Management System',
    excerpt: 'In today’s fast-paced business environment, security and efficiency are paramount. For any organization...',
    imageUrl: '/blogs/blog-2.png',
    slug: '/blogs/digital-gate-pass-system',
  },
  {
    date: 'July 28, 2025',
    title: 'The Rise of the Digital Reception in 2025',
    excerpt: 'The year is 2025. Step into any modern office building, and the scene at the front desk will likely be dramatically different...',
    imageUrl: '/blogs/blog-3.png',
    slug: '/blogs/the-rise-of-the-digital-reception',
  }
];

export default function BlogSection() {
  const [isMounted, setIsMounted] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Blog</p>
          <h2 className={styles.title}>Interesting Articles</h2>
        </div>
      </div>
      
      <div className={styles.blogSwiperWrapper}>
        {isMounted && (
          <Swiper
            modules={[Pagination, Mousewheel, Autoplay, EffectFade]}
            effect={'fade'}
            loop={true}
            direction={'vertical'}
            pagination={{ clickable: true, el: paginationRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            spaceBetween={30}
            slidesPerView={1}
            mousewheel={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            className={styles.swiperInstance}
          >
            {posts.map((post, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={post.imageUrl} alt={post.title} width={350} height={200} className={styles.postImage} />
                  </div>
                  <div className={styles.contentWrapper}>
                    <span className={styles.postDate}>{post.date}</span>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <Link href={post.slug} className={styles.readMoreButton}>Read More</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={paginationRef} className="swiper-pagination-custom"></div>
      </div>
    </section>
  );
}
