"use client";

import React from 'react';

interface CompareHeaderProps {
  competitor: any;
}

const CompareHeader: React.FC<CompareHeaderProps> = ({ competitor }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>The Best {competitor.mainTitle} Alternative for Workspace Digital Transformation</h1>
      <div style={{ marginBottom: '20px' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'white', backgroundColor: '#28a745', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>Signup For Free!</a>
        <a href="#" style={{ textDecoration: 'none', color: '#28a745', border: '1px solid #28a745', padding: '10px 20px', borderRadius: '5px' }}>Talk to Us</a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#6c757d' }}>
        <span>✓ Free 14-day Demo</span>
        <span>✓ No credit card needed</span>
        <span>✓ Quick Setup</span>
      </div>
    </div>
  );
};

export default CompareHeader;
