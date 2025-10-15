import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CompareTable from '@/app/components/CompareTable';
import CompareHeader from '@/app/components/CompareHeader';
import PricingSection from '@/app/components/PricingSection';
import CompareIntro from '@/app/components/CompareIntro';
import SignupSection from '@/app/components/SignupSection';
import BestComparisons from '@/app/components/BestComparisons';

async function getCompare(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/compares/${id}`, { next: { revalidate: 60 } });

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

async function getAllCompares() {
  try {
    const response = await fetch('http://localhost:3000/api/compares', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch compares.');
    }

    const compares = await response.json();
    return compares;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function ComparePage({ params }: { params: { id: string } }) {
  const compare = await getCompare(params.id);
  const compares = await getAllCompares();
  const filteredCompares = compares.filter((c: any) => c.Id === "2" || c.Id === params.id);

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        {compare ? (
          <>
            <CompareHeader competitor={compare} />
            <CompareIntro competitor={compare} />
            <PricingSection competitor={compare} />
            <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
              Onfra vs {compare.mainTitle}
            </h1>
            <CompareTable data={filteredCompares} />
            <SignupSection />
            <BestComparisons data={compares} />
          </>
        ) : (
          <p>Compare not found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
