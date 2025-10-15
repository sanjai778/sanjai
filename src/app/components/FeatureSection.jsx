import Image from 'next/image';
import styles from './FeatureSection.module.css';
var FeatureSection = function (_a) {
    var _b = _a.reversed, reversed = _b === void 0 ? false : _b;
    // Conditionally apply a 'reversed' class
    var sectionClassName = reversed
        ? "".concat(styles.featureSection, " ").concat(styles.reversed)
        : styles.featureSection;
    return (<section className={sectionClassName}>
      <div className={"container ".concat(styles.featureContainer)}>
        <div className={styles.textContent}>
          <span className={styles.tagline}>MEASURE & OPTIMIZE</span>
          <h2 className={styles.title}>Data-driven decisions for a smarter workplace.</h2>
          <p className={styles.description}>
            Gain actionable insights from real-time analytics. Understand space utilization, visitor trends, and resource allocation to optimize costs and enhance employee experience.
          </p>
          <ul className={styles.featureList}>
            <li><i className='bx bx-check-circle'></i> Real-time dashboards</li>
            <li><i className='bx bx-check-circle'></i> Customizable reports</li>
            <li><i className='bx bx-check-circle'></i> Predictive analytics</li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          <Image src="/feature-image.png" // IMPORTANT: Add this image to your /public folder
     alt="Dashboard analytics" width={550} height={450} className={styles.featureImage}/>
        </div>
      </div>
    </section>);
};
export default FeatureSection;
