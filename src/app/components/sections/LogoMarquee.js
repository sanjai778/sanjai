import Image from 'next/image';
import styles from './LogoMarquee.module.css';

export default function LogoMarquee() {
  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <Image src="/images/logos/clients_logos.webp" alt="Client Logos" width={2000} height={100} />
        {/* Duplicate the image for a seamless loop */}
        <Image src="/images/logos/clients_logos.webp" alt="Client Logos" width={2000} height={100} aria-hidden="true" />
      </div>
    </section>
  );
}