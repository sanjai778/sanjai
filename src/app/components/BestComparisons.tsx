"use client";

import React from 'react';
import Link from 'next/link';
import styles from './BestComparisons.module.css';

interface BestComparisonsProps {
  data: any[];
}

const truncateWords = (text: string, wordLimit: number) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const BestComparisons: React.FC<BestComparisonsProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.grid}>
        {data.map((compare: any) => (
          <Link key={compare.Id} href={`/compares/${compare.Id}`} className={styles.card}>
            {compare.imgUrl && <img src={compare.imgUrl} alt={compare.mainTitle} className={styles.logo} />}
            <h3>Onfra vs {compare.mainTitle} | Alternative to {compare.mainTitle}</h3>
            <p>{truncateWords(compare.pageDescription, 10)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestComparisons;
