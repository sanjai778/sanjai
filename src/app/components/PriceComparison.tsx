"use client";

import React from 'react';
import styles from './PriceComparison.module.css';
import { Compare } from '@/entity/Compare';

interface PriceComparisonProps {
  compare: Compare;
  onfraPrice: string;
}

const PriceComparison: React.FC<PriceComparisonProps> = ({ compare, onfraPrice }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.planDisadvantages}>
            {/* Competitor Card */}
            <div className={styles.clientPricingCard}>
              <div className={styles.compareClient}>
                <h2 className={styles.clientLogoCompare}>{compare.mainTitle}</h2>
                <h3 className={styles.businessProposal}>Price Comparison</h3>
                <h4 className={styles.planName}>Professional Plan</h4>
                <p className={styles.withoutProductPrice}>
                  Clear pricing information is not available.
                </p>
              </div>
            </div>
            {/* Onfra Card */}
            <div className={styles.ourPricingCard}>
              <img className={styles.onfraLogoCompare} src="https://onfra.io/wp-content/uploads/2024/05/onfra-logo.png" alt="Onfra Logo" />
              <h2 className={styles.businessProposal}>Price Comparison</h2>
              <h3 className={styles.planName}>Professional Plan</h3>
              <p className={styles.productPrice}>
                <span className={styles.span01}>start from</span> {onfraPrice}
                <span className={styles.span01}>/per month</span>
              </p>
              <p className={styles.billingInfo}>Billed annually <span className={styles.saveAmount}>Save 20%</span></p>
              <a className="btn btn-primary" href="https://app.visitdesk.io/signup">Signup Now</a>
            </div>
          </div>
          {/* Comparison Description */}
          <div className={styles.comparisonDes}>
            <h2><span style={{ color: '#00d470' }}>Onfra</span> vs {compare.mainTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: compare.pageDescription }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
