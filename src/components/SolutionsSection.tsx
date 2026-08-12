"use client";

import React, { useState } from "react";
import {
  Factory,
  FlaskConical,
  Sparkles,
  Waves,
  Wrench,
  Cog,
  CheckCircle2,
  X,
  ArrowRight,
} from "lucide-react";

interface SolutionItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "stp",
    icon: Factory,
    title: "Sewage Treatment (STP)",
    shortDesc:
      "Compact package plants to large scale modular systems for safe disposal and secondary reuse.",
    fullDesc:
      "We design, manufacture, and commission state-of-the-art Sewage Treatment Plants (STP) utilizing MBBR (Moving Bed Biofilm Reactor), SBR (Sequential Batch Reactor), and MBR (Membrane Bioreactor) technologies. Our systems treat residential and commercial wastewater to strict PCB standards for flushing, gardening, and cooling tower reuse.",
    features: [
      "MBBR & SBR Biological Treatment Technologies",
      "Modular Package Plants & On-site Concrete Erection",
      "Zero Odor & Low Noise Blowers",
      "Tertiary Filtration with Sand & Carbon Filters",
      "Treated Water Quality suitable for Recycling",
    ],
    techStack: "MBBR / SBR / MBR / Package STP",
  },
  {
    id: "etp",
    icon: FlaskConical,
    title: "Effluent Treatment (ETP)",
    shortDesc:
      "Physio-chemical and biological processing to meet stringent Pollution Control Board norms.",
    fullDesc:
      "Industrial effluents require specialized treatment tailored to specific chemical contaminants, heavy metals, and high COD/BOD loads. Our ETP systems combine equalization, chemical coagulation, flocculation, primary settling, and advanced biological oxidation to meet zero liquid discharge (ZLD) requirements.",
    features: [
      "Physio-Chemical Coagulation & Flocculation",
      "High Rate Clarifiers & Tube Settlers",
      "Heavy Metal & Chemical Neutralization",
      "Sludge Dewatering with Filter Press",
      "Compliant with CPCB / State PCB Discharge Norms",
    ],
    techStack: "Physio-Chemical / Extended Aeration / ZLD",
  },
  {
    id: "chlorination",
    icon: Sparkles,
    title: "Chlorination & Ozonators",
    shortDesc:
      "Advanced disinfection systems ensuring completely safe and bacteria-free water output.",
    fullDesc:
      "Effective disinfection is crucial for potable water and safe treated effluent discharge. We supply and install Gas Chlorination systems, Electro-Chlorinators, and Ozone Generation systems (Ozonators) that eliminate pathogens, algae, and bio-fouling without harmful residual chemicals.",
    features: [
      "Vacuum Feed Gas Chlorinators",
      "On-site Electro-Chlorination Units",
      "High Efficiency Ozone Generators",
      "Automatic Chlorine Dosing Pumps & Controllers",
      "Residual Chlorine Monitoring Systems",
    ],
    techStack: "Gas / Electro Chlorination / Ozone Dosing",
  },
  {
    id: "pool",
    icon: Waves,
    title: "Swimming Pool Filtration",
    shortDesc:
      "High-efficiency filtration ensuring crystal clear water for commercial and residential pools.",
    fullDesc:
      "Maintain crystal clear, hygienic water in commercial resort pools, residential clubhouses, and sports complexes. We engineer complete pool recirculation systems including high-rate sand filters, recirculation pumps, underwater lighting, auto-dosing systems, and pool ozone units.",
    features: [
      "High-Rate FRP Sand & Multi-Grade Filters",
      "Commercial Grade Corrosion-Resistant Pumps",
      "Automatic pH & Chlorine Dosing Systems",
      "Suction Cleaners & Pool Maintenance Kits",
      "LED Underwater Lighting & Heating Integration",
    ],
    techStack: "FRP Sand Filter / Dosing / Recirculation",
  },
  {
    id: "spares",
    icon: Cog,
    title: "Spares & Consumables",
    shortDesc:
      "Supply of high-quality water treatment chemicals, filter media, and replacement parts.",
    fullDesc:
      "Ensure uninterrupted operation of your water treatment infrastructure with our genuine spare parts and premium chemicals. We stock filter media (Activated Carbon, Quartz Sand, Anthracite, Resin), RO Membranes, Dosing Pumps, Filter Cloths, and Water Testing Reagents.",
    features: [
      "High-Grade Activated Carbon & Quartz Sand Media",
      "Cation & Anion Ion Exchange Resins",
      "RO Membranes & High Pressure Pumps",
      "Coagulants, Flocculants & Antiscalants",
      "Dosing Pumps, Filter Cloths & Valves",
    ],
    techStack: "Genuine OEM Parts & High-Purity Media",
  },
  {
    id: "amc",
    icon: Wrench,
    title: "Operation & Maintenance (AMC)",
    shortDesc:
      "Comprehensive AMC services to ensure your plant runs optimally with minimal downtime.",
    fullDesc:
      "Our Annual Maintenance Contracts (AMC) and Operation & Maintenance (O&M) services deploy trained chemical and mechanical engineers to manage your plant daily. We conduct routine lab testing, preventive maintenance, chemical dosing adjustments, and emergency breakdown repairs.",
    features: [
      "Dedicated On-site Plant Operators & Engineers",
      "Routine Water Quality Lab Sampling & Testing",
      "Preventive Mechanical & Electrical Maintenance",
      "Periodic Filter Media Backwash & Membrane Cleaning",
      "24/7 Breakdown Response & Logbook Monitoring",
    ],
    techStack: "Comprehensive AMC / O&M / Lab Audits",
  },
];

interface SolutionsSectionProps {
  onOpenQuoteModal: () => void;
}

export default function SolutionsSection({ onOpenQuoteModal }: SolutionsSectionProps) {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <section id="solutions" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1b6d24] font-semibold text-xs uppercase tracking-widest bg-[#1b6d24]/10 px-3 py-1 rounded-full">
            Engineering Solutions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001e40] mt-3 mb-4">
            Comprehensive Water &amp; Wastewater Treatment
          </h2>
          <p className="font-body text-gray-600 text-base">
            Tailored systems designed, fabricated, installed, and maintained for residential, commercial, and heavy industrial needs.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#c3c6d1]/60 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top Hover Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#003366] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#003366]/10 text-[#003366] flex items-center justify-center mb-6 group-hover:bg-[#003366] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#001e40] mb-3 group-hover:text-[#003366] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1b6d24] bg-[#a0f399]/30 px-2.5 py-1 rounded">
                    {item.techStack}
                  </span>
                  <button
                    onClick={() => setSelectedSolution(item)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#001e40] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#001e40] rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-2">
              Need a Custom Engineered Water Plant for Your Site?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Send us your raw water quality report or site capacity requirements (KLD/MLD), and our senior engineers will prepare a technical proposal.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 bg-[#1b6d24] hover:bg-[#15541c] text-white px-7 py-3.5 rounded-lg font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>Request Technical Quotation</span>
            <ArrowRight className="w-4 h-4 text-[#a0f399]" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#003366] text-white flex items-center justify-center shrink-0">
                {React.createElement(selectedSolution.icon, { className: "w-6 h-6 text-[#a0f399]" })}
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-[#001e40]">
                  {selectedSolution.title}
                </h3>
                <span className="text-xs font-semibold text-[#1b6d24]">
                  Technology: {selectedSolution.techStack}
                </span>
              </div>
            </div>

            <p className="font-body text-gray-700 text-base leading-relaxed mb-6">
              {selectedSolution.fullDesc}
            </p>

            <h4 className="font-heading font-bold text-[#001e40] text-sm uppercase tracking-wider mb-4">
              Key Engineering Features &amp; Specs:
            </h4>

            <div className="space-y-3 mb-8">
              {selectedSolution.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1b6d24] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-800">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => setSelectedSolution(null)}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedSolution(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2.5 rounded-lg bg-[#003366] text-white text-sm font-semibold hover:bg-[#001e40] shadow-md flex items-center gap-2"
              >
                <span>Get Quotation for {selectedSolution.title.split(" ")[0]}</span>
                <ArrowRight className="w-4 h-4 text-[#a0f399]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
