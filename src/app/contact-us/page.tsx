// app/contact/page.js
'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CtaSection from '../components/sections/CtaSection';
import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />

      <main>
        {/* Section 1: Green Banner - Exact match with reference */}
        <div className={styles.contactBanner}>
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>

        {/* Section 2: Contact Form and Illustration */}
        <section className={styles.contactFormSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Left Side: Form */}
              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h2>Have a query? Let's talk.</h2>
                  <p>Whether you need help using the tool, want more information about our plans or anything else – our support team would love to assist you.</p>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Name" 
                      className={styles.formInput} 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className={styles.formInput} 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone number" 
                        className={styles.formInput} 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <textarea 
                      name="message"
                      placeholder="Message" 
                      className={`${styles.formInput} ${styles.textarea}`} 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <button type="submit" className={styles.submitBtn}>
                    Submit
                  </button>
                </form>
              </div>

              {/* Right Side: Illustration */}
              <div className={styles.illustrationContainer}>
                <Image 
                  src="/uploads/2024/05/location-1.webp" 
                  alt="Contact illustration" 
                  width={500} 
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Details - Exact match with reference */}
        <section className={styles.contactDetailsSection}>
          <div className="container">
            <div className={styles.contactDetailsGrid}>
              {/* Address */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Address</h3>
                  <p className={styles.companyName}>ONFRA PROPTECH SOLUTIONS PRIVATE LIMITED</p>
                  <p>16/4, Salai Street, Vepery, Chennai, Tamil Nadu, India, 600007</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Phone</h3>
                  <p>India: +91 98848 99868</p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactDetailItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Email</h3>
                  <p>support@onfra.io</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <CtaSection />
      <Footer />
    </>
  );
}
