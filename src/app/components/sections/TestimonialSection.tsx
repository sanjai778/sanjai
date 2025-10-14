"use client";

import { useState, useEffect } from 'react';
import TestimonialSlider from './TestimonialSlider';
import styles from './TestimonialSection.module.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  img: string;
}

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="section_header">
          <h2 className="section_tagline">Testimonials</h2>
          <h3 className="section_title">Hear from our satisfied clients</h3>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
