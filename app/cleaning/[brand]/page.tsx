import { Metadata } from 'next';
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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { brand: brandId } = await params;
  const brand = BRANDS[brandId];

  if (!brand) return {};

  return {
    title: brand.name,
    description: brand.description,
    keywords: brand.keywords,
    openGraph: {
      title: brand.name,
      description: brand.description,
      url: `${brand.url}cleaning/${brandId}`,
      siteName: brand.name,
      images: [
        {
          url: "/og-image.jpg", // Replace with brand-specific OG image if available
          width: 1200,
          height: 630,
          alt: brand.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: brand.name,
      description: brand.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `${brand.url}cleaning/${brandId}`,
    },
  };
}

export default async function CleaningBrandPage({ params }: { params: Params }) {
  const { brand: brandId } = await params;
  const brand = BRANDS[brandId];

  if (!brand) return null;

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": brand.name,
    "description": brand.description,
    "url": brand.url,
    "telephone": "+1234567890", // Placeholder, update if available in config
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cleaning Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "SW1A 1AA",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <BrandProvider brandId={brandId}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
