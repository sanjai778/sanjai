// Import React components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import LogoMarquee from './components/sections/LogoMarquee';
import ProductsSection from './components/sections/ProductsSection';
import StatsSection from './components/sections/StatsSection';
import InfoSection from './components/sections/InfoSection';
import SecuritySection from './components/sections/SecuritySection';
import SolutionsGrid from './components/sections/SolutionsGrid';
import FaqSection from './components/sections/FaqSection';
import EnterpriseCta from './components/sections/EnterpriseCta';
// import NewsletterModal from './components/sections/NewsletterModal';
// import PeekabooSlider from './components/PeekabooSlider';
import TestimonialSlider from './components/sections/TestimonialSlider';
import BlogSection from './components/sections/BlogSlider';

const testimonials = [
  {
    id: 1,
    content: "This is a testimonial.",
    img: "/public/images/avatars/avatar.png",
    name: "John Doe",
    position: "CEO, Company"
  },
  {
    id: 2,
    content: "This is another testimonial.",
    img: "/public/images/avatars/avatar.png",
    name: "Jane Doe",
    position: "CTO, Company"
  }
];

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <LogoMarquee />
        <ProductsSection />
        <StatsSection />
        
        <InfoSection
          tagline="Why Onfra?"
          title="Control & Secure"
          description="Secure and streamline your workplace with our comprehensive entry and access management system! From employee badges to delivery logs, track everyone - visitors, contractors, materials - in and out, effortlessly. Boost security, improve efficiency, and gain data-driven insights."
          imageUrl="/uploads/static-image/Control%20&%20Secure.webp"
          arrowImageUrl="/uploads/2025/06/arrow1.png"
          
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Measure & Optimize"
          description="Our data-driven solutions helps you measure space occupancy, maximize desk & meeting room utilization, and track assets. Boost employee productivity, improve collaboration, and gain real-time insights to create a dynamic, cost-effective workplace that works for you."
          imageUrl="/uploads/static-image/Messasure%20&%20Optimize.webp"
          arrowImageUrl="/uploads/2025/06/arrow2.png"
          reversed={true}
        />
        <InfoSection
          tagline="Why Onfra?"
          title="Inspect & Resolve"
          description="Our integrated smart facility management solution empowers you with digital checklists and issue ticketing for a seamless workflow. Resolve issues promptly, ensuring a safe, healthy, and secure environment for your workplace."
          imageUrl="/uploads/static-image/Inspect%20&%20Resolve.webp"
          arrowImageUrl="/uploads/2025/06/arrow3.png"
        
        />
        
        <SecuritySection />
        
        <TestimonialSlider testimonials={testimonials} />
        
        <SolutionsGrid />
        <FaqSection />
         <BlogSection />
        <EnterpriseCta />

      </main>
      
      <Footer />
      
      {/* <NewsletterModal /> */}
    </>
  );
}
