import Header from '../../components/Header';
import Footer from '../../components/Footer';

async function getCaseStudy(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/casestudies/${id}`, { next: { revalidate: 60 } });

    if (!response.ok) {
      throw new Error('Failed to fetch case study.');
    }

    const caseStudy = await response.json();
    return caseStudy;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = await getCaseStudy(params.id);

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        {caseStudy ? (
          <>
            <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
              {caseStudy.Title}
            </h1>
            <p>{caseStudy.Overview}</p>
            <h2>Challenges</h2>
            <p>{caseStudy.Challenges}</p>
            <h2>Results</h2>
            <p>{caseStudy.Results}</p>
            <div>
                <p>{caseStudy.Testimonial_Quote}</p>
                <p>- {caseStudy.Author_Name}, {caseStudy.Company_Name}</p>
            </div>
          </>
        ) : (
          <p>Case study not found.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
