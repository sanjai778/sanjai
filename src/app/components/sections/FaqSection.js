"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './FaqSection.module.css';

const faqData = [
  {
    question: "What is Onfra?",
    answer: "Onfra is cloud software that works at official and residential reception desks to get the visitor details. It has sophisticated features like authenticating visitor via OTP, Face capture, document sign and much more."
  },
  {
    question: "How does Onfra work?",
    answer: "A visitor enters and sees 3 options on the tablet screen: New, Repeat, or Invited. For a new visitor, they enter their personal details and whom they want to meet. A notification is sent to the host, the visitor's phone is verified by OTP, and their face is captured. You can also enable document signing. For repeat visitors, only their phone number is required to reduce re-entering info."
  },
  {
    question: "How should I set up an Onfra account?",
    answer: "Just register your company, create an account name, and get started by creating a branch and checkpoint. If you are using a tablet for your reception desk, you can download the Onfra Pad app on iOS or Android."
  },
  {
    question: "What is Onfra Pad?",
    answer: "Onfra Pad is an app that can be downloaded from app stores and installed on an Android Tablet or iPad. The device needs to be configured in your Onfra account first. Once set up, your visitors can check in through the tablet."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <button className={styles.button} onClick={onClick} aria-expanded={isOpen}>
          {faq.question}
          <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}></span>
        </button>
      </div>
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.cardBody}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Allows closing the open item
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>FAQs</p>
          <h2 className={styles.title}>Here are some of the basic types of questions from our customers</h2>
        </div>
        <div className={styles.accordion}>
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        <div className={styles.readMoreWrapper}>
          <Link href="/faq" className={styles.generalBtn}>Read More</Link>
        </div>
      </div>
    </section>
  );
}