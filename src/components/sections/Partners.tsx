'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, GraduationCap, Phone, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PARTNERS = [
  {
    id: 'partner-1',
    name: "Anil Khemchand Agrawal",
    title: "Founder and Managing Partner",
    qual: "B.SC. , F. C. A. , I. S. A. ( DISA), LLB (Gen)",
    bio: "Our Managing Partner brings over 38 years of extensive experience in the fields of audit, taxation, and financial advisory, with significant expertise in finance. Having qualified as a Chartered Accountant in 1985, he has developed deep domain knowledge and a strong understanding of evolving regulatory and business environments. He is committed to delivering high-quality professional services with a focus on accuracy, integrity, and client satisfaction.\n\nHis leadership and experience continue to guide the firm in maintaining consistent standards of excellence and building long-term client relationships.",
    email: "anilkhemchand@gmail.com",
    phone: "+91 94251 53607"
  },
  {
    id: 'partner-2',
    name: "Tanay Agrawal",
    title: "Partner",
    qual: "ACA, B.COM, LLB (Gen)",
    bio: "Partner in the firm and a Chartered Accountant with over 6 years of experience, he represents the next generation of a legacy built over decades in accounting and taxation. Having worked with Ernst & Young, Mumbai, in the taxation department and being associated with tax practice since his internship, he combines youthful dynamism, modern technology and contemporary practices with traditional professional wisdom. He leads direct tax, GST and litigation matters, and his QuickBooks certification further strengthens the firm’s cloud-based accounting and financial management capabilities—delivering future-ready solutions for businesses and start-ups.",
    email: "tanayagrawal63@gmail.com",
    phone: "+91 91310 28829"
  }
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 text-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-4 block">Our Leadership</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold mb-6 text-slate-900 tracking-tight text-center">Our Partners</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Led by experienced professionals with deep domain expertise in Indian financial frameworks and professional ethics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {PARTNERS.map((partner, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === partner.id);
            return (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden transition-all duration-700 flex flex-col lg:flex-row shadow-sm hover:shadow-xl"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[18%] lg:h-auto shrink-0 partners-image-container relative mx-auto lg:mx-0 mt-8 lg:mt-0 rounded-full lg:rounded-none overflow-hidden border-4 border-white lg:border-none shadow-lg lg:shadow-none bg-slate-50 self-center lg:self-stretch">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={partner.name}
                      fill
                      priority={index === 0}
                      className={cn(
                        "partners-target-image grayscale group-hover:grayscale-0 object-cover transition-all duration-700",
                        partner.id === 'partner-2' ? "object-top" : "object-center"
                      )}
                      data-ai-hint={imgData.imageHint}
                      sizes="(max-width: 1024px) 128px, 20vw"
                    />
                  )}
                </div>
                
                <div className="p-8 lg:p-12 space-y-6 lg:space-y-8 flex-1 flex flex-col text-center lg:text-left">
                  <div>
                    <p className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2">
                      {partner.title}
                    </p>
                    <h3 className="text-slate-900 font-headline text-2xl lg:text-4xl font-bold leading-tight mb-6">
                      {partner.name}
                    </h3>
                    
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 mb-8">
                      <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-500 uppercase tracking-widest text-[9px] mb-1">Qualification</p>
                        <p className="text-sm lg:text-base leading-relaxed font-bold text-slate-800">{partner.qual}</p>
                      </div>
                    </div>

                    <div className="relative pt-6 border-t border-slate-100">
                      <Quote className="absolute -top-3 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 h-8 w-8 text-primary/5" />
                      <div className="text-sm lg:text-base text-slate-600 leading-relaxed italic lg:pl-6 space-y-4">
                        {partner.bio.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8 mt-auto border-t border-slate-100 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">
                    <a href={`mailto:${partner.email}`} className="flex items-center gap-3 text-xs lg:text-sm font-bold text-slate-600 hover:text-primary transition-all group/link">
                      <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all shadow-sm">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="truncate">{partner.email}</span>
                    </a>
                    <a href={`tel:${partner.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-xs lg:text-sm font-bold text-slate-600 hover:text-primary transition-all group/link">
                      <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all shadow-sm">
                        <Phone className="h-5 w-5" />
                      </div>
                      {partner.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
