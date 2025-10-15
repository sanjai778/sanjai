"use client";

import React from 'react';

interface CompareTableProps {
  data: any[];
}

const CompareTable: React.FC<CompareTableProps> = ({ data }) => {
  if (!data || data.length < 2) {
    return <p>Not enough data to compare.</p>;
  }

  const features = Object.keys(data[0]).filter(key => key !== 'Id' && key !== 'mainTitle' && key !== 'pageTitle' && key !== 'pageDescription' && key !== 'imgUrl' && key !== 'title');
  const competitors = data.slice(1);

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Feature</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Onfra</th>
          {competitors.map((competitor) => (
            <th key={competitor.Id} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{competitor.mainTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{feature.replace(/\d+$/, '')}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
              {data[0][feature] === 'Yes' ? '✓' : '✗'}
            </td>
            {competitors.map((competitor) => (
              <td key={competitor.Id} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                {competitor[feature] === 'Yes' ? '✓' : '✗'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;
