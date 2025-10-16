import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import SubPageTitle from '@/app/components/SubPageTitle';
import CtaSection from '@/app/components/sections/CtaSection';

export default function DownloadAppsPage() {
  return (
    <>
      <Header />
      <SubPageTitle title="Download Apps" />
      <main className="container">
        {/* Add page content here */}
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}
