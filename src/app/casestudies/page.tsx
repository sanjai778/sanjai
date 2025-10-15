import Header from '../components/Header';
import Footer from '../components/Footer';

async function getCaseStudies() {
  try {
    const response = await fetch('http://localhost:3000/api/casestudies', { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch casestudies.');
    }

    const caseStudies = await response.json();
    return caseStudies;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Case Studies
        </h1>
        {caseStudies.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {caseStudies.map((caseStudy: any) => (
              <a key={caseStudy.Id} href={`/casestudies/${caseStudy.Id}`} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
                <img src={caseStudy.Card_Image_Url} alt={caseStudy.Card_Title} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                <h2 style={{ marginTop: 0, fontSize: '1.1em', marginBottom: '10px' }}>{caseStudy.Card_Title}</h2>
                <p>{caseStudy.Card_Description}</p>
              </a>
            ))}
          </div>
        ) : (
          <p>No case studies found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
