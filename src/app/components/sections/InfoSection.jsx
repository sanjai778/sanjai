import Image from 'next/image';
import styles from './InfoSection.module.css';
var InfoSection = function (_a) {
    var tagline = _a.tagline, title = _a.title, description = _a.description, imageUrl = _a.imageUrl, arrowImageUrl = _a.arrowImageUrl, _b = _a.reversed, reversed = _b === void 0 ? false : _b;
    var directionClass = reversed ? styles.reversed : '';
    return (<section className={"".concat(styles.infoSection, " ").concat(directionClass)}>
      <div className={"container ".concat(styles.infoContainer)}>
        <div className={styles.textContent}>
          {arrowImageUrl && <Image src={arrowImageUrl} alt="Arrow" width={150} height={100} className={styles.arrowImage}/>}
          <h2 className={styles.tagline}>{tagline}</h2>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageContent}>
          <Image src={imageUrl} alt={title} width={600} height={450} className={styles.infoImage}/>
        </div>
      </div>
    </section>);
};
export default InfoSection;
