import Image from 'next/image';
import styles from './SecuritySection.module.css';

export default function SecuritySection() {
  return (
    <section className={styles.securitySection}>
      <div className={`container ${styles.securityContainer}`}>
        <div className={styles.iconsColumn}>
            <Image src="/images/logos/iso.png" alt="ISO Certified" width={90} height={90} />
          
        </div>
        <div className={styles.contentColumn}>
          <p className={styles.tagline}>Security</p>
          <h2 className={styles.title}>Enterprise Level Security</h2>
          <p className={styles.description}>
            Onfra complies with industry-leading data security standards to protect your data from unauthorized access, use, or disclosure.
          </p>
        </div>
      </div>
    </section>
  );
}