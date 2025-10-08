import Link from 'next/link';
import styles from './SolutionsGrid.module.css';

const solutions = [
  { title: "Finance & Government", description: "Streamline visitor and employee sign in experience..." },
  { title: "Logistics & Transport", description: "Easily identify visitors and contractors..." },
  { title: "Construction & Realestate", description: "Comply with health and safety regulations..." },
  { title: "Education, Universities & Schools", description: "Track visitors and ensure compliance..." },
  { title: "Offices & Co-working", description: "Simplify visitor management and enhance productivity." },
  { title: "Techparks & Business Center", description: "Efficient visitor management system for tech parks." },
  { title: "Warehouse & facilities", description: "Streamline visitor management at warehouses..." },
];

export default function SolutionsGrid() {
  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.sectionContainer}>
          <h2 className={styles.gridHeading}>
            A <span className={styles.highlight}>solution</span> for every workplace
          </h2>
          <div className={styles.grid}>
            {solutions.map((solution, index) => (
              <div key={index} className={styles.solutionBox}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <Link href="#">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}