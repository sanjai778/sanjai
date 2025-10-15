import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function CancellationAndRefundPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', marginBottom: '40px' }}>
          Cancellation and Refund policy
        </h1>
      </main>
      <Footer />
    </>
  );
}
