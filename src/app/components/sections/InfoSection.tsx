import Image from 'next/image';
import styles from './InfoSection.module.css';

interface InfoSectionProps {
  tagline: string;
  title: string;
  description: string;
  imageUrl: string;
  arrowImageUrl?: string;
  reversed?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ tagline, title, description, imageUrl, arrowImageUrl, reversed = false }) => {
  const directionClass = reversed ? styles.reversed : '';
  return (
    <section className={`${styles.infoSection} ${directionClass}`}>
      <div className={`container ${styles.infoContainer}`}>
        <div className={styles.textContent}>
          {arrowImageUrl && <Image src={arrowImageUrl} alt="Arrow" width={150} height={100} className={styles.arrowImage} />}
          <h2 className={styles.tagline}>{tagline}</h2>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.imageContent}>
          <Image src={imageUrl} alt={title} width={600} height={450} className={styles.infoImage} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
