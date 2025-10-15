import Image from 'next/image';
import styles from './ClientLogos.module.css';
// Add your client logo filenames here
var logos = [
    'logo-fedex.svg',
    'logo-vk.svg',
    'logo-godrej.svg',
    'logo-ifcr.svg',
];
var ClientLogos = function () {
    return (<section className={styles.clientSection}>
      <div className="container">
        <h3 className={styles.title}>Trusted by teams at leading companies</h3>
        <div className={styles.logoGrid}>
          {logos.map(function (logo) { return (<div key={logo} className={styles.logoContainer}>
              <Image src={"/".concat(logo)} // Assumes logos are in /public
         alt={"".concat(logo.split('.')[0], " logo")} width={140} height={40} style={{ objectFit: 'contain' }}/>
            </div>); })}
        </div>
      </div>
    </section>);
};
export default ClientLogos;
