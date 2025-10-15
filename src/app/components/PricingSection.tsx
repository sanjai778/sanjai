"use client";

import React from 'react';

interface PricingSectionProps {
  competitor: any;
}

const PricingSection: React.FC<PricingSectionProps> = ({ competitor }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
      <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '20px', textAlign: 'center', width: '300px' }}>
        <h3>{competitor.mainTitle}</h3>
        <p>Price Comparison</p>
        <h4>Professional Plan</h4>
        <p>Clear pricing information is not available.</p>
      </div>
      <div style={{ border: '1px solid var(--primary-green)', borderRadius: '8px', padding: '20px', textAlign: 'center', width: '300px' }}>
        <h3>Onfra</h3>
        <p>Price Comparison</p>
        <h4>Professional Plan</h4>
        <p>start from ₹2000/per month</p>
        <p>Billed annually Save 20%</p>
        <a href="#" className="btn btn-primary">Signup Now</a>
      </div>
    </div>
  );
};

export default PricingSection;
