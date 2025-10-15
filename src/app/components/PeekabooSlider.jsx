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
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './PeekabooSlider.module.css';
var PeekabooSlider = function () {
    // Use a small number of slides to test the loop fix
    var slides = [
        { id: 1, text: 'Slide 1' },
        { id: 2, text: 'Slide 2' },
        { id: 3, text: 'Slide 3' },
    ];
    // Fix for low slide count: duplicate the data array
    var displaySlides = __spreadArray(__spreadArray([], slides, true), slides, true);
    return (<div className={styles.sliderContainer}>
      <Swiper modules={[Pagination, Autoplay]} loop={true} slidesPerView={1.5} centeredSlides={true} spaceBetween={20} autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }} pagination={{
            clickable: true,
        }} className={styles.mySwiper}>
        {displaySlides.map(function (slide, index) { return (<SwiperSlide key={"".concat(slide.id, "-").concat(index)} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <h3>{slide.text}</h3>
            </div>
          </SwiperSlide>); })}
      </Swiper>
    </div>);
};
export default PeekabooSlider;
