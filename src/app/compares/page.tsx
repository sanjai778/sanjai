import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CompareSearch from '@/app/components/CompareSearch';
import BestComparisons from '@/app/components/BestComparisons';

async function getCompares() {
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

export default async function ComparesPage() {
  const compares = await getCompares();

  return (
    <>
      <Header />
      <CompareSearch />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {compares.length > 0 ? (
          <BestComparisons data={compares} />
        ) : (
          <p style={{ textAlign: 'center' }}>No compares found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
