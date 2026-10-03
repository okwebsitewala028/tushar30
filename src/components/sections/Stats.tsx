'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  {
    label: "Services",
    value: "120+",
    icon: Briefcase,
    color: "text-secondary",
    bg: "bg-secondary/5"
  },
  {
    label: "Clients",
    value: "500+",
    icon: Smile,
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const target = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounter();
        } else {
          resetCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [target]);

  const startCounter = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    
    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * target);
      setDisplayValue(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const resetCounter = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setDisplayValue(0);
  };

  return (
    <div ref={containerRef} className="tabular-nums">
      {displayValue.toLocaleString()}{suffix}
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={cn(
                "h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
                "bg-white border border-slate-100 shadow-sm",
                "group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/20 group-hover:shadow-md",
                stat.bg
              )}>
                <stat.icon className={cn("h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-500", stat.color)} />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-headline tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
