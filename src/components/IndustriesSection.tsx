"use client";

import React from "react";
import {
  Building2,
  Home,
  Tent,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  BookOpen,
  Landmark,
  TreePine,
} from "lucide-react";

interface IndustryItem {
  name: string;
  icon: React.ElementType;
  desc: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: "Residential Apartments",
    icon: Building2,
    desc: "Compact STP & water softening for high-rise gated communities.",
  },
  {
    name: "Housing Colonies",
    icon: Home,
    desc: "Centralized sewage treatment & treated water distribution.",
  },
  {
    name: "Amusement & Water Parks",
    icon: Tent,
    desc: "High volume pool recirculation & water safety chlorination.",
  },
  {
    name: "Industrial Establishments",
    icon: Factory,
    desc: "Heavy duty ETP, zero liquid discharge & chemical processing.",
  },
  {
    name: "Colleges & Universities",
    icon: GraduationCap,
    desc: "Campus-wide sewage treatment & hostel water purification.",
  },
  {
    name: "Hospitals & Medical Centers",
    icon: Hospital,
    desc: "Specialized bio-medical wastewater disinfection & ETP.",
  },
  {
    name: "Hotels & Restaurants",
    icon: Hotel,
    desc: "Kitchen wastewater grease traps & guest water softeners.",
  },
  {
    name: "Educational Institutions",
    icon: BookOpen,
    desc: "Safe drinking water systems & greywater recycling.",
  },
  {
    name: "Special Economic Zones (SEZ)",
    icon: Landmark,
    desc: "Large scale industrial park effluent management.",
  },
  {
    name: "Poultry Farms & Agriculture",
    icon: TreePine,
    desc: "Disinfection chlorination & farm wash water treatment.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#003366] font-semibold text-xs uppercase tracking-widest bg-[#003366]/10 px-3 py-1 rounded-full">
            Diverse Sector Expertise
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001e40] mt-3 mb-4">
            Industries We Serve
          </h2>
          <p className="font-body text-gray-600 text-base">
            Engineered water treatment systems compliance-tested for residential, commercial, institutional, and industrial sectors.
          </p>
        </div>

        {/* 10 Sector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-[#f1f4f6] border border-gray-200/80 rounded-xl hover:bg-white hover:shadow-xl hover:border-[#003366]/30 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-[#003366]/10 text-[#003366] flex items-center justify-center mb-4 group-hover:bg-[#003366] group-hover:text-[#a0f399] transition-colors duration-300 shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#001e40] mb-2 group-hover:text-[#003366] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-500 hidden sm:block leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
