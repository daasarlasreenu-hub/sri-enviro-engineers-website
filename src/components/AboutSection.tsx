"use client";

import React from "react";
import { Check, ShieldCheck, Factory, Award, Wrench } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#003366]/10 text-[#003366] font-semibold text-xs uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Engineering Excellence Since Inception
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001e40] leading-tight mb-6">
              Leading Specialists in Water &amp; Wastewater Treatment
            </h2>

            <div className="w-20 h-1 bg-[#003366] rounded mb-6" />

            <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
              <strong>Sri Enviro Engineers</strong> is one of the leading Specialists in Water Treatment Industries providing State-Of-the-Art technology solutions for Water &amp; Wastewater Treatment by adapting the most comprehensive, cost-effective and reliable treatment systems and services.
            </p>

            <p className="font-body text-base text-gray-600 leading-relaxed mb-8">
              We specialize in the <strong>Design, Engineering, Erection, and Commissioning</strong> of sewage and effluent Treatment Plants on a Turnkey basis. Our solutions are specifically engineered to meet individual site requirements, ensuring long-term operational reliability and environmental compliance.
            </p>

            {/* Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1b6d24]/10 flex items-center justify-center text-[#1b6d24] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#001e40]">Turnkey Project Execution</h4>
                  <p className="text-xs text-gray-500">End-to-end design, civil guidance &amp; installation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1b6d24]/10 flex items-center justify-center text-[#1b6d24] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#001e40]">Custom Site Engineering</h4>
                  <p className="text-xs text-gray-500">Tailored to site constraints &amp; water capacity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1b6d24]/10 flex items-center justify-center text-[#1b6d24] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#001e40]">100% Environmental Norms</h4>
                  <p className="text-xs text-gray-500">Compliant with Pollution Control Board (PCB).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1b6d24]/10 flex items-center justify-center text-[#1b6d24] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#001e40]">AMC &amp; Spares Support</h4>
                  <p className="text-xs text-gray-500">Chemicals, media replacement &amp; maintenance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Image with Technical Card Overlay */}
          <div className="relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/images/about_blueprint.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80";
                }}
                alt="Industrial Water Treatment Facility Engineering Blueprint"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e40]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#a0f399] mb-1">
                  Engineered Blueprint &amp; Erection
                </div>
                <div className="font-heading text-lg font-bold">
                  State-of-the-Art Sewage &amp; Effluent Recycling Infrastructure
                </div>
              </div>
            </div>

            {/* Floating Stats Box */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-5 rounded-lg shadow-xl border border-gray-200 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-lg bg-[#003366] text-white flex items-center justify-center shrink-0">
                <Factory className="w-6 h-6 text-[#a0f399]" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl text-[#001e40]">100%</div>
                <div className="text-xs text-gray-600 font-medium">Turnkey Quality Assurance &amp; Operational Safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
