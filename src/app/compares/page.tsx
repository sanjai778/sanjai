import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

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
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Compares
        </h1>
        {compares.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {compares.map((compare: any) => (
              <a key={compare.Id} href={`/compares/${compare.Id}`} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
                <img src={compare.imgUrl} alt={compare.mainTitle} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                <h2 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' }}>Onfra vs {compare.mainTitle}</h2>
                <p>{compare.pageDescription}</p>
              </a>
            ))}
          </div>
        ) : (
          <p>No compares found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
