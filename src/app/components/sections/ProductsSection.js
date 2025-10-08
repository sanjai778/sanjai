import Link from 'next/link';
import styles from './ProductsSection.module.css';

const products = [
  { title: "Visitor", description: "Enhance visitor management with a streamlined check-in process...", link: "/platform/visitors" },
  { title: "Flexipass", description: "Optimize contractor and vendor access management...", link: "/platform/flexipass" },
  { title: "Attendance & Time Tracking", description: "Simplify attendance tracking for employees...", link: "/platform/employees" },
  { title: "Queues", description: "Improve customer service with effective queue management...", link: "#" },
  { title: "Deliveries", description: "Manage deliveries effectively with a reliable system...", link: "/platform/deliveries" },
  { title: "Material Pass", description: "Streamline material movement tracking...", link: "#" },
  { title: "Rooms", description: "Optimize your meeting room bookings effortlessly...", link: "/platform/rooms" },
  { title: "Desks", description: "Efficiently manage desk assignments and availability...", link: "/platform/desk" }
];

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>#1 Workplace Management System</p>
          <h2 className={styles.title}>Manage anything and everything that revolves around your workspace!</h2>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.title} className={styles.productCard}>
              <div className={styles.icon}>
                <i className='bx bx-user-check'></i> {/* Placeholder Icon */}
              </div>
              <h3 className={styles.cardTitle}><Link href={product.link}>{product.title}</Link></h3>
              <p className={styles.cardDescription}>{product.description}</p>
              <Link href={product.link} className={styles.readMore}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}