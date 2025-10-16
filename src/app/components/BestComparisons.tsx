"use client";

import React from 'react';
import styles from './BestComparisons.module.css';

interface BestComparisonsProps {
  data: any[];
}

const BestComparisons: React.FC<BestComparisonsProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.grid}>
        {data.map((compare: any) => (
          <a key={compare.Id} href={`/compares/${compare.Id}`} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={compare.imgUrl} alt={compare.mainTitle} className={styles.logo} />
            </div>
            <h3>Onfra vs {compare.mainTitle} | Alternative to {compare.mainTitle}</h3>
            <p>{compare.pageDescription}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BestComparisons;
