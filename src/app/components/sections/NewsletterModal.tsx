"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './NewsletterModal.module.css';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  // Effect to trigger modal after a delay, only once per session/week
  useEffect(() => {
    const shouldShowPopup = () => {
      const lastShown = localStorage.getItem('newsletterPopupShown');
      if (!lastShown) return true;
      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      return (new Date().getTime() - new Date(lastShown).getTime()) > oneWeek;
    };

    const timer = setTimeout(() => {
      if (shouldShowPopup()) {
        setIsOpen(true);
        localStorage.setItem('newsletterPopupShown', new Date().toISOString());
      }
    }, 10000); // 10 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Subscribing with email:", email);
    setIsLoading(false);
    setIsSuccess(true);
    setEmail("");
  };
  
  const closeModal = () => {
      setIsOpen(false);
      // Reset success state after a delay to allow fade out
      setTimeout(() => setIsSuccess(false), 500);
  }

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
        <div className={styles.modalBody}>
          <div className={styles.imageColumn}>
            <Image src="/images/newsletter.png" alt="Newsletter" width={300} height={300} />
          </div>
          <div className={styles.formColumn}>
            <h4>Subscribe to our <span className={styles.highlight}>newsletter</span></h4>
            
            {!isSuccess ? (
              <>
                <p>Stay in the loop! Subscribe for updates, features, and exclusive offers.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <p>Thank you for subscribing! We will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
