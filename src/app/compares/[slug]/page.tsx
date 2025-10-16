import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BestComparisons from '@/app/components/BestComparisons';
import styles from './ComparePage.module.css';
import CompareHero from '@/app/components/CompareHero';
import PriceComparison from '@/app/components/PriceComparison';
import FeatureComparison from '@/app/components/FeatureComparison';
import { Metadata } from 'next';
import CtaSection from '@/app/components/sections/CtaSection';
import BackButton from '@/app/components/BackButton';
import FaqSection from '@/app/components/sections/FaqSection';
import TestimonialSection from '@/app/components/sections/TestimonialSection';

async function getCompare(slug: string) {
  try {
    const baseUrl = process.env.API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/compares/${slug}`, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch compare.');
    }

    const compare = await response.json();
    return compare;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getLimitedCompares() {
  try {
    const baseUrl = process.env.API_BASE_URL;
    const response = await fetch(`${baseUrl}/api/compares/limited`, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch limited compares.');
    }

    const compares = await response.json();
    return compares;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const compare = await getCompare(params.slug);
  return {
    title: compare?.mainTitle,
  };
}

export default async function ComparePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const compare = await getCompare(slug);
  const compares = await getLimitedCompares();

  return (
    <>
      <Header />
      <main>
        {compare ? (
          <>
            <CompareHero competitorName={compare.mainTitle} />
            <div className={styles.container}>
              <PriceComparison
                compare={compare}
                onfraPrice="₹2000"
              />
              <FeatureComparison compare={compare} />
              <BackButton />
            </div>
          </>
        ) : (
          <p>Compare not found.</p>
        )}
      </main>

    
        <FaqSection />
       <TestimonialSection />
        
   
      
              <CtaSection />
      <Footer />
    </>
  );
}
