import Link from 'next/link';
import styles from './ProductsSection.module.css';
var products = [
    { title: "Visitor Management", description: "Enhance visitor management with a streamlined check-in process. Capture essential information, print badges, and boost security through digital record-keeping.", link: "/platform/visitors", iconClass: "bx bx-user-check" },
    { title: "Contractor & Flexipass", description: "Optimize contractor and vendor access management. Easily issue, track passes, and schedule access for seamless collaboration and improved security.", link: "/platform/flexipass", iconClass: "bx bx-id-card" },
    { title: "Attendance & Time Tracking", description: "Simplify attendance tracking for employees. Enable easy logging of arrivals and departures while maintaining organized HR records for enhanced security management.", link: "/platform/attendance", iconClass: "bx bx-time" },
    { title: "Queue Management", description: "Improve customer service with effective queue management. Ensure employees have the time perform their jobs efficiently while maintaining control over operations.", link: "/platform/queues", iconClass: "bx bx-group" },
    { title: "Mailroom & Deliveries", description: "Manage deliveries effectively with a reliable system for recording and notifying recipients. Ensure secure and timely package management for your organization.", link: "/platform/deliveries", iconClass: "bx bx-envelope" },
    { title: "Gate & Material Pass", description: "Streamline material movement tracking with an efficient system for managing inward, outward, returnable, and non-returnable gate passes.", link: "/platform/material-pass", iconClass: "bx bx-transfer-alt" },
    { title: "Meeting Room Scheduling", description: "Optimize your meeting room bookings effortlessly. Allow easy reservations, view availability, and manage scheduling conflicts to enhance team collaboration.", link: "/platform/rooms", iconClass: "bx bx-calendar" },
    { title: "Hotdesking & Desk Scheduling", description: "Efficiently manage desk assignments and availability with a flexible hotdesking solution that allows employees to reserve desks as needed.", link: "/platform/desks", iconClass: "bx bx-desktop" }
];
var ProductsSection = function () {
    return (<section className={styles.productsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>#1 Workplace Management System</h2>
          <h3 className={styles.title}>Manage anything and everything that revolves around your workspace!</h3>
        </div>
        <div className={styles.grid}>
          {products.map(function (product) { return (<div key={product.title} className={styles.productCard}>
              <div className={styles.icon}>
                <i className={product.iconClass}></i>
              </div>
              <h3 className={styles.cardTitle}><Link href={product.link}>{product.title}</Link></h3>
              <p className={styles.cardDescription}>{product.description}</p>
              <Link href={product.link} className={styles.readMore}>Read More</Link>
            </div>); })}
        </div>
      </div>
    </section>);
};
export default ProductsSection;
