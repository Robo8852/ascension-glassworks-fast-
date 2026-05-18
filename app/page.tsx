import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { OurProcess } from '@/components/sections/OurProcess';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Education } from '@/components/sections/Education';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black text-brand-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <About />
      <OurProcess />
      <Services />
      <WhyChooseUs />
      <Education />
      <ServiceArea />
      <CTA />
      <Footer />
    </main>
  );
}
