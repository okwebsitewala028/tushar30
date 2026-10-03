"use client";

import { ShieldCheck, Calculator, FileText, Scale, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const COMPLIANCE_FEATURES = [
  {
    title: "GST Compliance",
    description: "Clarifications on GST registration, filing cycles, and input tax credit rules.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Direct Taxation",
    description: "Educational insights into income tax slabs, deductions, and advance tax concepts.",
    icon: Calculator,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Audit Standards",
    description: "Guidance on statutory requirements and professional standards for financial reporting.",
    icon: FileText,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Professional Ethics",
    description: "Information regarding ICAI's code of ethics and professional conduct for CAs.",
    icon: Scale,
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

export default function ComplianceTool() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-primary blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm"
          >
            <Bookmark className="h-4 w-4" /> Regulatory Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-headline font-bold mb-8 text-slate-900 tracking-tight"
          >
            Compliance Frameworks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Our practice is built on a foundation of strict adherence to Indian regulatory standards and the highest professional ethics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPLIANCE_FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group`}
            >
              <div className={`h-16 w-16 rounded-2xl ${feature.bg} border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="font-headline text-xl font-bold text-slate-900 mb-4 leading-tight">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}