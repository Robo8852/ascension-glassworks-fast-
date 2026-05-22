import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { BrandPromise } from '@/components/sections/BrandPromise';
import { OurProcess } from '@/components/sections/OurProcess';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { NoPressure } from '@/components/sections/NoPressure';
import { Education } from '@/components/sections/Education';
import { CustomerExperience } from '@/components/sections/CustomerExperience';
import { PremiumPositioning } from '@/components/sections/PremiumPositioning';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { Warranty } from '@/components/sections/Warranty';
import { Reviews } from '@/components/sections/Reviews';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black text-brand-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <About />
      <BrandPromise />
      <OurProcess />
      <Services />
      <WhyChooseUs />
      <NoPressure />
      <Education />
      <CustomerExperience />
      <PremiumPositioning />
      <ServiceArea />
      <Warranty />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
