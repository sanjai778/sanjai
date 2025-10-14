import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Bridging people, spaces, things, and insights to make the <span className={styles.highlight}>workplace</span> efficient and sustainable!
            </h1>
            <div className={styles.buttonGroup}>
              <Link href="/signup" className="btn btn-primary">Signup For Free!</Link>
              <Link href="/talk-to-an-expert" className="btn btn-outline-primary">Talk to Expert</Link>
            </div>
            <div className={styles.features}>
              <span><Image src="/images/icons/check-circle.svg" alt="check" width={20} height={20} /> Free 14-day Demo</span>
              <span><Image src="/images/icons/check-circle.svg" alt="check" width={20} height={20} /> No credit card needed</span>
              <span><Image src="/images/icons/check-circle.svg" alt="check" width={20} height={20} /> Quick Setup</span>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.heroImageWrapper}>
        <Image 
          src="/images/hero-main.webp" 
          alt="#1 Workplace Management System" 
          width={1920} 
          height={600}
          priority
          className={styles.heroImage}
        />
      </div>
    </>
  );
};

export default HeroSection;
