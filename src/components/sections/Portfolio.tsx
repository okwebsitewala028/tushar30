'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Building2, Landmark } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: "GST Optimization for Educational Trust",
    description: "Successfully restructured GST compliance for a multi-campus educational trust, resulting in 15% better input tax credit utilization.",
    icon: Building2,
    tag: "Taxation",
  },
  {
    title: "Statutory Audit for Manufacturing Unit",
    description: "Completed comprehensive statutory audit for a large-scale manufacturing unit with zero major discrepancies reported by regulatory bodies.",
    icon: Landmark,
    tag: "Audit",
  },
  {
    title: "Financial Restructuring for SME",
    description: "Assisted a growing SME in Bhopal to restructure their debt and financial reporting, improving credit rating and cash flow management.",
    icon: TrendingUp,
    tag: "Consulting",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Case Studies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-headline font-bold text-slate-900 mb-8 tracking-tight"
          >
            Our Impact & Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A selection of projects where we've helped our clients navigate complex financial landscapes and achieve regulatory excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <study.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-3">{study.tag}</span>
              <h3 className="font-headline text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors leading-tight">
                {study.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                {study.description}
              </p>
              <div className="flex items-center gap-3 text-slate-700 text-[10px] font-bold uppercase tracking-widest bg-slate-50 py-3 px-5 rounded-full self-start border border-slate-100">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Successfully Completed
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}