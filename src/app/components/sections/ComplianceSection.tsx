import Image from 'next/image';
import styles from './ComplianceSection.module.css';

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    imageSrc: "/images/icons/cool-features.svg",
    title: "Guaranteed Compliance and Data Security",
    description: "With our state-of-the-art platform, you can rest assured that your workplace management is in compliance with the highest industry standards, including SOC2, GDPR, and ISO."
  },
  {
    imageSrc: "/images/icons/customers-love.svg",
    title: "Don't just take our word for it",
    description: "Onfra has been rated highly by some of the most trusted sources in the industry! Our users have given Onfra top marks for its user-friendly interface, comprehensive features, and exceptional customer support."
  },
  {
    imageSrc: "/images/icons/integrations.svg",
    title: "Just Plug and Play",
    description: "We’ve already integrated with many key business systems so you can simply log in and get back to business – or use our simple API for everything else."
  }
];

const ComplianceSection: React.FC = () => {
  return (
    <section className={styles.complianceSection}>
      <div className="container">
        <div className={styles.grid}>
          {cardsData.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={card.imageSrc} 
                  alt={card.title} 
                  width={250} 
                  height={180} 
                  className={styles.cardImage} 
                />
              </div>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{card.title}</h5>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
