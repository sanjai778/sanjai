"use client";

import React from 'react';

interface BestComparisonsProps {
  data: any[];
}

const BestComparisons: React.FC<BestComparisonsProps> = ({ data }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px' }}>Best Comparisons</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {data.map((compare: any) => (
          <a key={compare.Id} href={`/compares/${compare.Id}`} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
            <img src={compare.imgUrl} alt={compare.mainTitle} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <h3 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' }}>Onfra vs {compare.mainTitle}</h3>
            <p>{compare.pageDescription}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BestComparisons;
