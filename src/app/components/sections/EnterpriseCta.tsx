import Link from 'next/link';
import Image from 'next/image';
import styles from './EnterpriseCta.module.css';

const EnterpriseCta: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.imageColumn}>
          <Image 
            src="/images/enterprise-suite.webp" // Add a relevant image here
            alt="Enterprise Suite illustration"
            width={450}
            height={400}
            className={styles.ctaImage}
          />
        </div>
        <div className={styles.contentColumn}>
          <h2 className={styles.title}>Interested in <span className={styles.highlight}>Enterprise Suite?</span></h2>
          <p className={styles.description}>
            Unlock advanced security, custom integrations, and dedicated support designed for large-scale organizations. Let's build a solution that fits your unique needs.
          </p>
          <Link href="/contact-sales" className={styles.ctaButton}>
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCta;
