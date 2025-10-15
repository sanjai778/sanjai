import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
var Footer = function () {
    return (<footer className={styles.footer}>
      <div className={"container ".concat(styles.footerContainer)}>
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand Info */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
              <Image src="/images/logos/onfra-logo.png" alt="Onfra Logo" width={100} height={40}/>
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
              <li><Link href="/products/visitors">Visitors</Link></li>
              <li><Link href="/products/flexipass">Flexipass</Link></li>
              <li><Link href="/products/employees">Employees</Link></li>
              <li><Link href="/products/queue">Queue</Link></li>
              <li><Link href="/products/deliveries">Deliveries</Link></li>
              <li><Link href="/products/material-pass">Material Pass</Link></li>
              <li><Link href="/products/rooms">Rooms</Link></li>
              <li><Link href="/products/desks">Desks</Link></li>
              <li><Link href="/products/vehicle-pass">Vehicle Pass</Link></li>
              <li><Link href="/products/signage">Signage</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Resources</h4>
            <ul>
              <li><Link href="/resources/blog">Blog</Link></li>
              <li><Link href="/resources/case-studies">Case Studies</Link></li>
              <li><Link href="/resources/bizo">bizo</Link></li>
              <li><Link href="/resources/community">Community</Link></li>
              <li><Link href="/resources/roadmap">Roadmap</Link></li>
              <li><Link href="/resources/product-releases">Product releases</Link></li>
              <li><Link href="/resources/compare">Compare</Link></li>
              <li><Link href="/resources/survey-form">Survey form</Link></li>
              <li><Link href="/resources/supported-printers">Supported Printers</Link></li>
              <li><Link href="/resources/become-a-partner">Become a Partner</Link></li>
              <li><Link href="/resources/quick-links">Qucik Links</Link></li>
              <li><Link href="/resources/partner-terms">Partner Program Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Solution */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Solution</h4>
            <ul>
              <li><Link href="/solutions/hybrid-office">Hybrid Office Management</Link></li>
              <li><Link href="/solutions/co-working">Co Working Management</Link></li>
              <li><Link href="/solutions/facility-management">Facility Management</Link></li>
              <li><Link href="/solutions/tech-park">Tech Park Management</Link></li>
              <li><Link href="/solutions/centralize-workplace">Centralize workplace management</Link></li>
              <li><Link href="/solutions/experience">Employee, tenant and visitor experience</Link></li>
              <li><Link href="/solutions/security">Safety, security and compliance</Link></li>
              <li><Link href="/solutions/utilization-insights">Workplace utilization and insights</Link></li>
              <li><Link href="/solutions/workplaces-buildings">Workplaces and buildings</Link></li>
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
    </footer>);
};
export default Footer;
