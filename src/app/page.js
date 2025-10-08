import Header from './components/Header'; // We will create this
import Footer from './components/Footer'; // We will create this

// Import all the new section components
import HeroSection from './components/sections/HeroSection';
import LogoMarquee from './components/sections/LogoMarquee';
import ProductsSection from './components/sections/ProductsSection';
import StatsSection from './components/sections/StatsSection';
import InfoSection from './components/sections/InfoSection';
import SecuritySection from './components/sections/SecuritySection';
import TestimonialSlider from './components/sections/TestimonialSlider';
import SolutionsGrid from './components/sections/SolutionsGrid';
import FaqSection from './components/sections/FaqSection';
import EnterpriseCta from './components/sections/EnterpriseCta';
import BlogSlider from './components/sections/BlogSlider';
import NewsletterModal from './components/sections/NewsletterModal';

export default function HomePage() {
  return (
    <>
      {/* The Header and Footer wrap the main content */}
      <Header />
      
      <main>
        {/* Each section of your page is now a self-contained component */}
        <HeroSection />
        <LogoMarquee />
        <ProductsSection />
        <StatsSection />
        
        <InfoSection
          tagline="Why Onfra?"
          title="Control & Secure"
          description="Secure and streamline your workplace with our comprehensive entry and access management system! From employee badges to delivery logs, track everyone - visitors, contractors, materials - in and out, effortlessly."
          imageUrl="/images/info-control-secure.webp"
          arrowImageUrl="/images/icons/arrow1.png"
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Measure & Optimize"
          description="Our data-driven solutions helps you measure space occupancy, maximize desk & meeting room utilization, and track assets. Boost employee productivity and gain real-time insights."
          imageUrl="/images/info-measure-optimize.webp"
          arrowImageUrl="/images/icons/arrow2.png"
          reversed={true} // This prop flips the layout
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Inspect & Resolve"
          description="Our integrated smart facility management solution empowers you with digital checklists and issue ticketing for a seamless workflow. Resolve issues promptly, ensuring a safe, healthy, and secure environment."
          imageUrl="/images/info-inspect-resolve.webp"
          arrowImageUrl="/images/icons/arrow3.png"
        />
        
        <SecuritySection />
        <TestimonialSlider />
        <SolutionsGrid />
        <FaqSection />
        <EnterpriseCta />
        <BlogSlider />
      </main>
      
      <Footer />
      
      {/* The Newsletter Modal is rendered here but controls its own visibility */}
      <NewsletterModal />
    </>
  );
}