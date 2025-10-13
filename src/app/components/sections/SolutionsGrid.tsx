import Link from 'next/link';
import styles from './SolutionsGrid.module.css';

interface Solution {
  title: string;
  description: string;
}

const solutions: Solution[] = [
  { title: "Finance & Government", description: "Streamline the visitor and employee sign in experience with an intuitive, easy to use software solution." },
  { title: "Logistics & Transport", description: "Easily identify visitors and contractors and automate manual processes with a single, simple solution." },
  { title: "Construction & Realestate", description: "Comply with health and safety regulations and have total visibility of staff, contractor, and visitor presence across your sites." },
  { title: "Education, Universities & Schools", description: "Track visitors coming and going and ensure you are compliant with strict security rules." },
  { title: "Offices & Co-working", description: "Simplify visitor management and enhance workplace productivity." },
  { title: "Techparks & Business Center", description: "TrackEfficient visitor management system for tech parks—reliable and convenient." },
  { title: "Warehouse & facilities", description: "Streamline visitor management at warehouses and facilities while boosting workplace efficiency." },
];

const SolutionsGrid: React.FC = () => {
  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.sectionContainer}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.gridHeading}>
                A <span className={styles.highlight}>solution</span> for every workplace
              </h2>
            </div>
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
};

export default SolutionsGrid;
