import TestimonialSlider from './TestimonialSlider';
import { testimonials } from '../../data/testimonials';
import styles from './TestimonialSection.module.css';

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="section_header">
          <p className="section_tagline">Testimonials</p>
          <h2 className="section_title">Hear from our satisfied clients</h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;