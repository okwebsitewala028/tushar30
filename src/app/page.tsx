'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Partners from '@/components/sections/Partners';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
