'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Shield, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 h-16 sm:h-20 shadow-sm' 
        : 'bg-white/50 backdrop-blur-sm h-20 sm:h-24'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start leading-tight group">
          <div className="flex items-center gap-2">
            <Shield className={`transition-all duration-300 ${isScrolled ? 'text-primary h-5 w-5 sm:h-6 sm:w-6' : 'text-primary h-7 w-7 sm:h-8 w-8'}`} />
            <span className={`font-headline font-bold tracking-tight text-slate-900 transition-all duration-300 ${
              isScrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg lg:text-xl'
            }`}>
              Anil Khemchand & Associates LLP
            </span>
          </div>
          {!isScrolled && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[8px] sm:text-[10px] lg:text-xs font-semibold text-slate-500 tracking-[0.2em] uppercase ml-9 sm:ml-10"
            >
              Chartered Accountants
            </motion.span>
          )}
        </Link>

        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-primary transition-all relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100 h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0 border-l border-slate-200 bg-white">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Explore our firm's services, partners, and contact information.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-slate-100 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-primary h-6 w-6" />
                      <span className="font-headline text-lg font-bold text-slate-900">Menu</span>
                    </div>
                  </div>
                  <nav className="flex flex-col p-8 gap-1 overflow-y-auto">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="text-lg font-headline font-bold py-4 text-slate-700 hover:text-primary transition-colors border-b border-slate-50 flex justify-between items-center group"
                        >
                          {item.name}
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-8 bg-slate-50 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Direct Contact</p>
                    <p className="text-lg font-bold text-slate-900">+91 94251 53607</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
