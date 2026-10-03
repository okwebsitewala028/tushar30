"use client";

import { useState } from "react";
import { 
  Briefcase, 
  Calculator, 
  FileCheck, 
  ShieldAlert, 
  ChevronRight,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "Audit & Assurance",
    icon: FileCheck,
    description: "Statutory audits, internal audits, and special purpose assurance engagements following strict professional standards.",
    categories: [
      {
        header: "Core Audit Services",
        items: [
          "Statutory Audit (Companies Act, LLPs, etc.)",
          "Tax Audit (Income-tax Act)",
          "Internal Audit",
          "Bank Concurrent Audit",
          "Branch / Unit Audits",
          "Stock & Inventory Audit"
        ]
      },
      {
        header: "Specialized / Regulatory Audits",
        items: [
          "GST Audit / GST Review & Reconciliation",
          "Bank Audits (Statutory, Concurrent, Revenue, Stock Audit)",
          "Trust / NGO Audit",
          "Partnership Firm Audit",
          "Cooperative Society Audit"
        ]
      },
      {
        header: "Certification & Assurance",
        items: [
          "Certifications under various laws (Income Tax, GST, Companies Act)",
          "Net Worth Certificates",
          "Turnover & Utilization Certificates",
          "Foreign Remittance Certificates (Form 15CB)"
        ]
      }
    ]
  },
  {
    title: "Taxation",
    icon: Calculator,
    description: "Comprehensive tax planning and compliance services covering direct and indirect tax frameworks.",
    categories: [
      {
        header: "Tax Returns & Tax Advisory",
        items: [
          "Income Tax Return (ITR) Filing (Individuals, Firms, Companies, Trusts)",
          "Tax Planning & Advisory",
          "Corporate Tax Advisory",
          "Capital Gains Advisory"
        ]
      },
      {
        header: "TDS and TCS Compliance",
        items: [
          "TAN Registration Applicability & Advisory",
          "Timely Deduction & Deposit of TDS/TCS",
          "Return Filing (Form 138, 140, 143, 144)",
          "Reconciliation & Corrections",
          "Obtaining Lower Deduction Certificate"
        ]
      },
      {
        header: "Compliance & Litigation Support",
        items: [
          "Handling Department Notices",
          "Drafting Replies & Submissions",
          "Representation before Tax Authorities",
          "Appeal Filing & Support"
        ]
      },
      {
        header: "International Taxation & DTAA Advisory",
        items: [
          "US and Canada Tax Return filing",
          "Cross-Border and Withholding Tax Advisory",
          "DTAA Analysis",
          "Tax return filing for NRIs"
        ]
      }
    ]
  },
  {
    title: "GST Advisory",
    icon: ShieldAlert,
    description: "End-to-end GST solutions including registration, filing, and advisory on complex indirect tax matters.",
    categories: [
      {
        header: "Advisory",
        items: [
          "GST Structuring & Planning",
          "Classification & Rate Advisory",
          "Input Tax Credit (ITC) Advisory",
          "Place of Supply Analysis"
        ]
      },
      {
        header: "Compliance",
        items: [
          "GST Registration, amendments, and cancellations.",
          "Monthly and Annual Return Filing",
          "Reconciliation of books and GSTR-2B/2A.",
          "E-invoicing & E-way Bill",
          "Refunds"
        ]
      },
      {
        header: "Litigation & Support",
        items: [
          "Notice Handling",
          "Assessment & Appeals",
          "Representation before GST authorities.",
          "GST Audit / Review"
        ]
      }
    ]
  },
  {
    title: "Book Keeping and Payroll Management",
    icon: Briefcase,
    description: "Reliable outsourced accounting and payroll solutions to maintain financial health and ensure regulatory compliance.",
    categories: [
      {
        header: "Bookkeeping Services",
        items: [
          "Accounting & Record Maintenance",
          "Accounts Payable & Receivable",
          "Bank & Ledger Reconciliation",
          "Financial Reporting",
          "Cloud Accounting Support",
          "US Bookkeeping Services (QuickBooks / Xero)"
        ]
      },
      {
        header: "Payroll Management",
        items: [
          "Payroll Processing and compliance management.",
          "TDS on Salaries",
          "Generation of payslips and payroll reports.",
          "Leave & Attendance Management"
        ]
      }
    ]
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-12 bg-white text-slate-900 relative">
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-headline font-bold mb-6 tracking-tight text-slate-900"
          >
            Firm Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Comprehensive professional solutions tailored to navigate complex regulatory landscapes with precision and integrity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl",
                activeService === index ? "ring-2 ring-primary/20 bg-slate-50" : ""
              )}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="h-24 w-24 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                  <service.icon className="h-12 w-12 text-primary group-hover:text-white" />
                </div>
                
                <h3 className="font-headline text-2xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-10 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <AnimatePresence>
                  {activeService === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full text-left space-y-8 pt-8 border-t border-slate-100"
                    >
                      {service.categories.map((cat, cIdx) => (
                        <div key={cIdx}>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-4">{cat.header}</h4>
                          <ul className="space-y-3">
                            {cat.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-3 text-xs leading-tight font-semibold text-slate-700">
                                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {activeService !== index && (
                  <div className="flex items-center gap-2 text-xs font-bold text-primary mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                    <MousePointer2 className="h-4 w-4" /> Click to view details
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}