import Link from 'next/link';
import styles from './CtaSection.module.css';
var CtaSection = function () {
    return (<section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <p className={styles.ctaText}>
            Join the thousands of companies that rely on Onfra platform to keep their work running smoothly, so everyone can easily connect, work & excel together.
          </p>
          <Link href="/signup" className="btn btn-primary">
            Signup Now
          </Link>
        </div>
      </div>
    </section>);
};
export default CtaSection;
