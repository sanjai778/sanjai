import Link from 'next/link';
import Image from 'next/image';
import styles from './EnterpriseCta.module.css';
var EnterpriseCta = function () {
    return (<section className={styles.ctaSection}>
      <div className={"container ".concat(styles.ctaContainer)}>
        <div className={styles.contentColumn}>
          <h2 className={styles.title}>Interested in <span className={styles.highlight}>Enterprise Suite?</span></h2>
          <ul className={styles.featureList}>
            <li>Specialized Onboarding Experience</li>
            <li>Priority Customer Support</li>
            <li>Custom Domain and White Label Solution</li>
            <li>Comprehensive Help Guides</li>
            <li>User experience with seamless localization</li>
          </ul>
          <Link href="/contact-sales" className="btn btn-primary">
            Get Callback!
          </Link>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/uploads/svg_image/enterprise.svg" alt="Enterprise Suite illustration" width={450} height={400} className={styles.ctaImage}/>
        </div>
      </div>
    </section>);
};
export default EnterpriseCta;
