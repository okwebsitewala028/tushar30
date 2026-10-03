'use client';

import { Scale, Users, History, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const VALUES = [
  {
    title: "Ethics",
    icon: Scale,
    text: "Upholding the highest moral standards and professional integrity in every engagement."
  },
  {
    title: "Client-Centric",
    icon: Users,
    text: "Tailored financial solutions that prioritize the long-term sustainability of our clients."
  },
  {
    title: "Reliability",
    icon: ShieldCheck,
    text: "Building trust through precision, transparency, and timely delivery of services."
  },
  {
    title: "Heritage",
    icon: History,
    text: "Over three decades of experience navigating complex financial landscapes."
  }
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-office');

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-6 block">Our Professional Journey</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold mb-8 text-slate-900 leading-tight tracking-tight">
              A Legacy of Financial Integrity and Excellence.
            </h2>
            <div className="space-y-8 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Founded by CA Anil Khemchand in 1992, our firm is a well-established practice with over 35 years of experience in audit, taxation, and financial advisory.
              </p>
              <p>
                As Anil Khemchand and Associates LLP, we combine deep professional expertise with a forward-looking approach, delivering efficient and reliable solutions while building long-term relationships based on trust.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl group">
              {aboutImage && (
                <Image 
                  src={aboutImage.imageUrl} 
                  alt={aboutImage.description} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 blur-[80px] rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-primary/20 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                <value.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
