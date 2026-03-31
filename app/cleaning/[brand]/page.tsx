import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import Articles from '@/components/Articles';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { BrandProvider } from '@/context/BrandContext';
import { BRANDS } from '@/config/brands';

type Params = Promise<{ brand: string }>

export async function generateStaticParams() {
  return Object.keys(BRANDS).map((brand) => ({
    brand,
  }));
}

export default async function CleaningBrandPage({ params }: { params: Params }) {
  const { brand: brandId } = await params;

  return (
    <BrandProvider brandId={brandId}>
      <div className="min-h-screen font-sans text-gray-900 bg-white">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <Features />
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <Solutions />
        <BeforeAfter />
        <Testimonials />
        <div id="blog">
          <Articles />
        </div>
        <div id="cta">
          <CTA />
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </BrandProvider>
  );
}
