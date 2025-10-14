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

interface Post {
  date: string;
  title: string;
  content: string;
  featuredImage: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
    setIsMounted(true);
  }, []);

  const getStrapiMedia = (url: string) => {
    if (url.startsWith("https://onfra.io/wp-content")) {
      return url.replace("https://onfra.io/wp-content", "");
    }
    if (url.startsWith("https://ifelsetechno.com/demo/visitdesk-wp/wp-content")) {
      return url.replace("https://ifelsetechno.com/demo/visitdesk-wp/wp-content", "");
    }
    if (url.startsWith("http")) {
      return url;
    }
    return `/${url.startsWith("/") ? url.substring(1) : url}`;
  };

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>Blog</h2>
          <h3 className={styles.title}>Interesting Articles</h3>
        </div>
      </div>
      
      <div className={styles.blogSwiperWrapper}>
        {isMounted && (
          <Swiper
            modules={[Pagination, Mousewheel, Autoplay, EffectFade]}
            effect={'fade'}
            loop={true}
            direction={'vertical'}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
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
            {posts.slice(0, 5).map((post, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image src={getStrapiMedia(post.featuredImage)} alt={post.title} width={350} height={200} className={styles.postImage} />
                  </div>
                  <div className={styles.contentWrapper}>
                    <span className={styles.postDate}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt} dangerouslySetInnerHTML={{ __html: post.content }}></p>
                    <Link href={`/blogs/${post.slug}`} className="btn btn-outline-primary">Read More</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="swiper-pagination-custom"></div>
      </div>
    </section>
  );
};

export default BlogSection;
