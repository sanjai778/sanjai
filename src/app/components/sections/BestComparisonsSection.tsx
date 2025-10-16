"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BestComparisonsSection.module.css';

async function getLimitedCompares() {
  try {
    const response = await fetch('/api/compares/limited', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch limited compares.');
    }

    const compares = await response.json();
    return compares;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const truncateWords = (text: string, wordLimit: number) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const BestComparisonsSection: React.FC = () => {
  const [compares, setCompares] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLimitedCompares();
      setCompares(data);
    }
    fetchData();
  }, []);

  return (
    <section className={styles.bestComparisonSection}>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <h2>Best Comparisons</h2>
          <h3>Explore More Alternative</h3>
        </div>
        <div className={styles.row}>
          {compares
            .filter(
              (c: any) =>
                c.mainTitle &&
                c.mainTitle.toLowerCase() !== 'onfra' &&
                c.mainTitle.toLowerCase() !== 'title'
            )
            .slice(0, 3)
            .map((compare: any) => (
              <div className={styles.colMd4} key={compare.Id}>
                <Link href={`/compares/${compare.slug}`} className={styles.comparisonCardLink}>
                  <div className={styles.comparisonCard}>
                    <div className={styles.cardHeaderLogo}>
                      {compare.imgUrl && <img src={compare.imgUrl} alt={`${compare.mainTitle} Logo`} className={styles.cardLogo} />}
                    </div>
                    <div className={styles.cardContent}>
                      <h5 className={styles.cardTitle}>Onfra vs {compare.mainTitle}</h5>
                      <p className={styles.cardDescription}>
                        {truncateWords(compare.pageDescription, 10)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestComparisonsSection;
