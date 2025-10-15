import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function DeskPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Desks
        </h1>
        <p>Manage desk reservations for a flexible workspace.</p>
      </main>
      <Footer />
    </>
  );
}
