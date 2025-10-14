"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './FaqSection.module.css';

interface Faq {
  Question: string;
  Answer: string;
}

interface AccordionItemProps {
  faq: Faq;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`${styles.card} ${isOpen ? styles.open : ''}`}>
      <div className={styles.cardHeader}>
        <button className={styles.button} onClick={onClick} aria-expanded={isOpen}>
          <span className={styles.iconWrapper}>
            <i className={`bx ${isOpen ? 'bxs-check-circle' : 'bx-chevron-up-circle'}`}></i>
          </span>
          {faq.Question}
        </button>
      </div>
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.cardBody}>
          {faq.Answer}
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item is open by default

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch('/api/faqs');
      const data = await res.json();
      setFaqs(data);
    };

    fetchFaqs();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.tagline}>FAQs</h2>
          <h3 className={styles.title}>Here are some of the basic types of questions from our customers</h3>
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
