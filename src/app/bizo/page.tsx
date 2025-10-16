import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';

export default function BizoPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Bizo" />
      <main className="container">
        {/* Add page content here */}
      </main>
      <Footer />
    </>
  );
}
