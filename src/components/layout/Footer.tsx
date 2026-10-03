'use client';

import { Shield, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start leading-tight mb-8">
              <div className="flex items-center gap-2">
                <Shield className="text-primary h-6 w-6" />
                <span className="font-headline text-xl font-bold text-slate-900 uppercase tracking-tight">
                  Anil Khemchand & Associates LLP
                </span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase ml-8">
                Chartered Accountants
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-sm">
              Excellence, Ethics, and Transparency. A premier Chartered Accountants firm established in 1992, providing world-class financial advisory.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-8 text-slate-900">Locations</h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="h-4 w-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-slate-800">Head Office (Jabalpur)</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Khemchand House 948 P-1, Napier Town, Jabalpur, MP
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="h-4 w-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-slate-800">Branch (Bhopal)</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  F1-502, Globus Green Acres, Lalghati, Bhopal, MP
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-8 text-slate-900">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-slate-600">
              <div className="flex flex-col gap-4">
                <Link href="/" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-secondary rounded-full group-hover:scale-150 transition-transform" /> Home
                </Link>
                <Link href="#about" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-secondary rounded-full group-hover:scale-150 transition-transform" /> About Us
                </Link>
                <Link href="#partners" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-secondary rounded-full group-hover:scale-150 transition-transform" /> Partners
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="#services" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-secondary rounded-full group-hover:scale-150 transition-transform" /> Services
                </Link>
                <Link href="#contact" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-secondary rounded-full group-hover:scale-150 transition-transform" /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest text-center md:text-left">
          <p>© {year || '2024'} Anil Khemchand and Associates LLP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
