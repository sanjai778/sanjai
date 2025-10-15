import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Product
        </h1>
      </main>
      <Footer />
    </>
  );
}
