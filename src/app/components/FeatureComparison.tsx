"use client";

import React from 'react';
import styles from './FeatureComparison.module.css';

import { Compare } from '@/entity/Compare';

interface FeatureComparisonProps {
  compare: Compare;
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ compare }) => {
  const features = Object.keys(compare).filter(key => key !== 'Id' && key !== 'mainTitle' && key !== 'pageTitle' && key !== 'pageDescription' && key !== 'imgUrl' && key !== 'title' && key !== 'slug');
  return (
    <div className={styles.container}>
      <div className="section_header">
        <h2 className="section_tagline">Feature Comparison</h2>
        <h3 className="section_title">Onfra vs {compare.mainTitle}</h3>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th className={styles.onfraColumn}>Onfra</th>
            <th className={styles.competitorColumn}>{compare.mainTitle}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.replace(/([A-Z])/g, ' $1').replace(/\d+$/, '').trim()}</td>
              <td className={styles.onfraColumn}>
                <img src="/uploads/2019/01/success.svg" alt="Yes" className={styles.icon} />
              </td>
              <td className={styles.competitorColumn}>
                {(compare as any)[feature] === 'Yes' ? (
                  <img src="/uploads/2019/01/success.svg" alt="Yes" className={styles.icon} />
                ) : (
                  <img src="/uploads/2019/01/error.svg" alt="No" className={styles.icon} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className={styles.onfraColumn}>
              <a href="https://app.visitdesk.io/signup" className={styles.signupButton}>
                Signup Now
              </a>
              <p className={styles.signupNote}>No credit card required</p>
            </td>
            <td className={styles.competitorColumn}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FeatureComparison;
