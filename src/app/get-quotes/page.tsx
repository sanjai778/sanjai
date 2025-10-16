import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

export default function GetQuotesPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Get Quotes" />
      <main className="container">
        {/* Add page content here */}
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}
