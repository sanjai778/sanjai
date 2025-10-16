'use client';
import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SignupSection from '@/app/components/SignupSection';
import SubPageTitle from '@/app/components/SubPageTitle';
import styles from './survey.module.css';
import Image from 'next/image';

const questions = [
  'How was the overall experience of your Onfra free trial?',
  'Did Onfra deliver what you wanted it to?',
  'How effective was our communication on resources, features, and general queries?',
  'How likely are you to recommend Onfra to your friends or colleagues?',
  'Is there any way in which we can improve our services? Please share your thoughts.',
];

const smileys = [
  '/uploads/static-image/Very bad.png',
  '/uploads/static-image/Poor.png',
  '/uploads/static-image/Ok.png',
  '/uploads/static-image/Good.png',
  '/uploads/static-image/Very good.png',
];

export default function SurveyFormPage() {
  const [ratings, setRatings] = useState(Array(questions.length).fill(null));

  const handleRating = (questionIndex: number, smileyIndex: number) => {
    const newRatings = [...ratings];
    newRatings[questionIndex] = smileyIndex;
    setRatings(newRatings);
  };

  return (
    <>
      <Header />
      <SubPageTitle title="Survey Form" />
      <div className="container">
        <div className={styles.form_container}>
          <div className={styles.image_container}>
            <Image
              src="/uploads/static-image/survey-img.png"
              alt="Survey illustration"
              width={250}
              height={200}
              className={styles.image}
            />
          </div>
          <form>
            {questions.map((question, qIndex) => (
              <div key={qIndex} className={styles.question_group}>
                <p className={styles.question}>{question}</p>
                <div className={styles.smiley_group}>
                  {smileys.map((smiley, sIndex) => (
                    <Image
                      key={sIndex}
                      src={smiley}
                      alt={`rating ${sIndex + 1}`}
                      width={40}
                      height={40}
                      className={`${styles.smiley} ${
                        ratings[qIndex] === sIndex ? styles.selected : ''
                      }`}
                      onClick={() => handleRating(qIndex, sIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className={styles.question_group}>
              <input
                type="email"
                placeholder="Email"
                className={styles.email_input}
              />
            </div>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <SignupSection />
      <Footer />
    </>
  );
}
