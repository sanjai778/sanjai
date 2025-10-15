'use client';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './TestimonialSlider.module.css';
var TestimonialSlider = function (_a) {
    var testimonials = _a.testimonials;
    if (!testimonials || testimonials.length === 0) {
        return <p>No testimonials to display.</p>;
    }
    var displayTestimonials = testimonials.length <= 5
        ? __spreadArray(__spreadArray([], testimonials, true), testimonials, true) : testimonials;
    return (<div className={styles.testimonialSwiperWrapper}>
      <Swiper modules={[Pagination, Autoplay]} loop={true} autoplay={{ delay: 5000, disableOnInteraction: false }} pagination={{ clickable: true }} spaceBetween={20} centeredSlides={true} slidesPerView={1.1} // Mobile
     breakpoints={{
            640: {
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }} className={styles.swiperContainer}>
        {displayTestimonials.map(function (t, index) { return (<SwiperSlide key={"".concat(t.id, "-").concat(index)} className={styles.swiperSlide}>
            <div className={styles.card}>
              <p className={styles.cardText}>{t.content}</p>
              <div className={styles.cardFooter}>
                <Image src={t.img} alt={t.name} width={55} height={55} className={styles.avatar}/>
                <div className={styles.authorInfo}>
                  <h4>{t.name}</h4>
                  <p>{t.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>); })}
      </Swiper>
    </div>);
};
export default TestimonialSlider;
