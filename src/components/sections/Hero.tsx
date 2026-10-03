
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-office');

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                Professional auditing, taxation, and consulting services for global businesses, adhering to the highest professional standards and ethics.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg gap-2 bg-primary hover:bg-primary/90 shadow-lg transition-all w-full sm:w-auto font-bold">
                <Link href="#about">
                  Our Firm <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg border-slate-200 text-slate-900 bg-white hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto font-bold">
                <Link href="#contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={heroImage.imageHint}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
