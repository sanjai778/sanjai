import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function HybridOfficeManagementPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Hybrid Office Management
        </h1>
        <p>Spanning the Gap Between Office and Remote Work</p>
      </main>
      <Footer />
    </>
  );
}
