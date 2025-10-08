"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import the necessary modules for a fade effect slider
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper's CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // <-- Import fade effect styles

import styles from './BlogSlider.module.css';

// We extract the data from your HTML into a structured array
const posts = [
  {
    date: 'August 14, 2025',
    title: 'Beyond Security: Benefits of Implementing a Digital Gate Pass Management System',
    excerpt: 'Introduction: In today’s fast-paced business environment, security and efficiency are paramount. For any organization, be it a manufacturing plant, a corporate office, or a warehouse, the movement of people and materials is a daily constant...',
    imageUrl: 'https://onfra.io/wp-content/uploads/2025/06/Onfra.io-visitor-management-system-1.png',
    slug: 'https://onfra.io/blogs/beyond-security-benefits-of-implementing-a-digital-gate-pass-management-system/',
  },
  {
    date: 'August 11, 2025',
    title: 'Enhanced Mega Alerts (Emergency Notifications) for Proactive Workplace Safety',
    excerpt: 'Onfra.io has announced powerful new updates to its Mega Alerts feature, adding proactive safety communication and anomaly detection tools that help organizations better prepare for emergencies, reduce response times, and meet compliance requirements...',
    imageUrl: 'https://onfra.io/wp-content/uploads/2025/06/Onfra.io-visitor-management-system.png',
    slug: 'https://onfra.io/blogs/enhanced-mega-alerts-emergency-notifications-for-proactive-workplace-safety/',
  },
  {
    date: 'July 28, 2025', // Assuming a date for this post
    title: 'The Rise of the Digital Reception: How Touchless, Integrated Systems Are Redefining the Front Desk in 2025',
    excerpt: 'The year is 2025. Step into any modern office building, and the scene at the front desk will likely be dramatically different from what you remember just a few short years ago. In their place, you’ll find touchless, integrated systems...',
    imageUrl: 'https://onfra.io/wp-content/uploads/2024/09/Group-20544-4.png',
    slug: 'https://onfra.io/blogs/the-rise-of-the-digital-reception-how-touchless-integrated-systems-are-redefining-the-front-desk-in-2025/',
  }
];

export default function BlogSlider() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Blog</p>
          <h2 className={styles.title}>Interesting Articles</h2>
        </div>
        
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          effect={'fade'} // <-- Set the effect to 'fade'
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className={styles.blogSlider}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideItem}>
                <div className={styles.slideImage}>
                  <Image src={post.imageUrl} alt={post.title} width={500} height={500} />
                </div>
                <div className={styles.slideContent}>
                  <span className={styles.slideDate}>{post.date}</span>
                  <h3 className={styles.slideTitle}>{post.title}</h3>
                  <div className={styles.slideExcerpt} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <Link href={post.slug} className={styles.slideButton}>
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}