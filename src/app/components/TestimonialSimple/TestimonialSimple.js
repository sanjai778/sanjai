import Image from 'next/image';
import styles from './TestimonialSimple.module.css';

export default function TestimonialSimple({ testimonial, align = 'left' }) {
  if (!testimonial) {
    return <p>Testimonial not found.</p>;
  }

  const alignmentClass = align === 'right' ? styles.alignRight : styles.alignLeft;

  return (
    <div className={`${styles.wrapper} ${alignmentClass}`}>
      <div className={styles.contentWrap}>
        <div className={styles.quoteMark}>“</div>
        <div className={styles.content}>{testimonial.content}</div>
        <div className={styles.author}>
          {testimonial.img && (
            <Image 
              src={testimonial.img} 
              alt={testimonial.name} 
              width={55} 
              height={55} 
              className={styles.authorImg}
            />
          )}
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>{testimonial.name}</p>
            <p className={styles.authorPosition}>{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}