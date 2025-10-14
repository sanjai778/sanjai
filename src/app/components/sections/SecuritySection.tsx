import Image from 'next/image';
import styles from './SecuritySection.module.css';

const SecuritySection: React.FC = () => {
  return (
    <section className={styles.securitySection}>
      <div className={`container ${styles.securityContainer}`}>
        <div className={styles.iconsColumn}>
          {/* A single composite image representing all security badges and icons */}
          <Image 
            src="/uploads/2025/06/security_soc2_iso_gdpr.png" 
            alt="Security certifications including SOC 2, ISO, and GDPR compliance" 
            width={500} 
            height={300} 
          />
        </div>
        <div className={styles.contentColumn}>
          <h2 className={styles.tagline}>Security</h2>
          <h3 className={styles.title}>Enterprise Level Security</h3>
          <p className={styles.description}>
            Onfra complies with industry-leading data security standards to protect your data from unauthorized access, use, or disclosure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
