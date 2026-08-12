"use client";

import React from "react";
import { ShieldCheck, Cpu, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#001e40]">
      {/* Background Image Layer with Fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 ease-out"
        style={{
          backgroundImage: `url('/images/hero_water_plant.png'), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e40]/95 via-[#001e40]/85 to-[#003366]/75" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a0f399] font-medium text-xs sm:text-sm mb-6 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-[#a0f399]" />
          <span>Pollution Control Board (PCB) Compliant Engineering</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mb-6">
          CLEAN WATER. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#799dd6] via-white to-[#a0f399]">
            SMARTER TREATMENT.
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Specialists in turnkey Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), MBBR &amp; SBR technologies, Chlorination, and Swimming Pool Filtration systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-14">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center gap-2 bg-[#1b6d24] hover:bg-[#15541c] text-white px-8 py-4 rounded-md font-bold text-base shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Get Quotation</span>
            <ArrowRight className="w-5 h-5 text-[#a0f399]" />
          </button>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-base backdrop-blur-sm transition-all"
          >
            <span>Explore Solutions</span>
          </a>
        </div>

        {/* Features / Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-4xl pt-8 border-t border-white/15">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center border border-white/20 flex-shrink-0">
              <Droplets className="w-5 h-5 text-[#799dd6]" />
            </div>
            <div>
              <div className="font-bold text-lg text-white">100+ Turnkey Plants</div>
              <div className="text-xs text-slate-300">Design to Commissioning</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center border border-white/20 flex-shrink-0">
              <Cpu className="w-5 h-5 text-[#a0f399]" />
            </div>
            <div>
              <div className="font-bold text-lg text-white">MBBR &amp; SBR Tech</div>
              <div className="text-xs text-slate-300">State-of-the-Art Systems</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center border border-white/20 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#a0f399]" />
            </div>
            <div>
              <div className="font-bold text-lg text-white">AMC &amp; Maintenance</div>
              <div className="text-xs text-slate-300">Reliable Operation Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
