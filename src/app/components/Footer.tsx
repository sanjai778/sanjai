import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand Info */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
              <Image src="/images/logos/onfra-logo.png" alt="Onfra Logo" width={100} height={40} />
              {/* <span className={styles.logoText}>Onfra</span> */}
            </div>
            <p className={styles.description}>
              #1 SaaS platform for data-driven workplace management empowers you to manage visitor check-ins, flexipass usage, delivery tracking, employee management, desk allocation, and meeting room utilisation.
            </p>
            <ul className={styles.infoLinks}>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> support@onfra.io</p>
              <p><strong>India:</strong> +91 98848 99868</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
              <a href="#" aria-label="Twitter"><i className='bx bxl-twitter'></i></a>
              <a href="#" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Products</h4>
            <ul>
              <li><Link href="/platform/visitors">Visitors</Link></li>
              <li><Link href="/platform/flexipass">Flexipass</Link></li>
              <li><Link href="/platform/employees">Employees</Link></li>
              <li><Link href="/platform/queue-management">Queue</Link></li>
              <li><Link href="/platform/deliveries">Deliveries</Link></li>
              <li><Link href="/platform/material-pass">Material Pass</Link></li>
              <li><Link href="/platform/rooms">Rooms</Link></li>
              <li><Link href="/platform/desk">Desks</Link></li>
              <li><Link href="/platform/vehicles">Vehicle Pass</Link></li>
              <li><Link href="#">Signage</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Resources</h4>
            <ul>
              <li><Link href="/blogs">Blog</Link></li>
              <li><Link href="/casestudies">Case Studies</Link></li>
              <li><Link href="/bizo">bizo</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
              <li><Link href="/product-releases">Product releases</Link></li>
              <li><Link href="/compares">Compare</Link></li>
              <li><Link href="/survey-form">Survey form</Link></li>
              <li><Link href="/supported-printers">Supported Printers</Link></li>
              <li><Link href="/become-a-partner">Become a Partner</Link></li>
              <li><Link href="/qucik-links">Qucik Links</Link></li>
              <li><Link href="/partner-program-terms-and-conditions">Partner Program Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Solution</h4>
            <ul>
              <li><Link href="/solutions/hybrid-office-management">Hybrid Office Management</Link></li>
              <li><Link href="/solutions/co-working-management">Co Working Management</Link></li>
              <li><Link href="/solutions/facility-management">Facility Management</Link></li>
              <li><Link href="/solutions/tech-park-management">Tech Park Management</Link></li>
              <li><Link href="/solutions/centralize-workplace-management">Centralize workplace management</Link></li>
              <li><Link href="/solutions/employee-tenant-and-visitor-experience">Employee, tenant and visitor experience</Link></li>
              <li><Link href="/solutions/safety-security-and-compliance">Safety, security and compliance</Link></li>
              <li><Link href="/solutions/workplace-utilization-and-insights">Workplace utilization and insights</Link></li>
              <li><Link href="/solutions/workplaces-and-buildings">Workplaces and buildings</Link></li>
              <li><Link href="/solutions/sustainable-workplace">Sustainable Workplace</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.madeWith}>Made with ❤️ at ifelse</p>
          <div className={styles.legalLinks}>
            <Link href="/your-country">Your Country</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cancellation-policy">Cancellation and Refund policy</Link>
            <Link href="/gdpr">GDPR Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
