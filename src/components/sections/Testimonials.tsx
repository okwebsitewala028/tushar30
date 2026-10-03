'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "CEO, Manufacturing Hub",
    text: "CA Anil Khemchand's team transformed our taxation approach. Their expertise in GST is unparalleled, and their ethics are inspiring.",
    initials: "RS"
  },
  {
    name: "Dr. Sunita Varma",
    role: "Trustee, Education Foundation",
    text: "The audit services provided by the firm are thorough and professional. They have been our trusted advisors for over a decade.",
    initials: "SV"
  },
  {
    name: "Amitabh Gupta",
    role: "Director, Tech Solutions",
    text: "Exceptional financial advisory. They helped us navigate the complexities of corporate restructuring with precision.",
    initials: "AG"
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Green Energy",
    text: "Their strategic tax planning saved us significant resources. A truly professional and reliable partner for any growing business.",
    initials: "PM"
  },
  {
    name: "Vikram Singh",
    role: "MD, Logistics Plus",
    text: "Managing GST across multiple states was a nightmare until we partnered with this firm. Their compliance knowledge is top-notch.",
    initials: "VS"
  }
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-headline font-bold text-slate-900 mb-8 tracking-tight"
          >
            Trusted by Leaders
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our commitment to excellence is reflected in the trust our clients place in us every day.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 sm:-ml-8">
              {TESTIMONIALS.map((t, index) => (
                <CarouselItem key={index} className="pl-4 sm:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-12 rounded-[2.5rem] border border-slate-100 relative group h-full flex flex-col hover:shadow-2xl transition-all duration-500 shadow-sm"
                  >
                    <Quote className="absolute top-10 right-10 h-16 w-16 text-primary/5 group-hover:text-primary/10 transition-all duration-500" />
                    
                    <div className="flex gap-1.5 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>

                    <p className="text-slate-700 italic mb-12 relative z-10 text-base lg:text-lg leading-relaxed flex-grow">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar className="h-14 w-14 border-2 border-slate-100 shadow-md">
                        <AvatarFallback className="bg-slate-100 text-primary font-bold text-lg">
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-headline font-bold text-slate-900 text-lg leading-none mb-2">
                          {t.name}
                        </h4>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute top-1/2 -left-20 w-40 h-40 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 -right-20 w-40 h-40 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}