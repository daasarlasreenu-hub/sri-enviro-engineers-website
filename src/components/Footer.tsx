"use client";

import React from "react";
import { Droplet, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001e40] text-white w-full border-t border-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand & Address */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#003366] flex items-center justify-center border border-white/20">
                <Droplet className="w-5 h-5 text-[#a0f399] fill-[#a0f399]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Sri Enviro Engineers
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Specialists in Water &amp; Wastewater Treatment Industries. Designing, erecting, and commissioning high-reliability Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) on a turnkey basis.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#a0f399] shrink-0 mt-0.5" />
                <span>
                  # 16-11-741/C/1/1/A/B, Opp: Asian Hospital, Dilsukhnagar, Hyderabad - 500060.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a0f399] shrink-0" />
                <a href="tel:+919676909782" className="hover:underline">
                  +91 9676909782
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#799dd6] shrink-0" />
                <a href="mailto:daasarlasreenu@gmail.com" className="hover:underline">
                  daasarlasreenu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#a0f399] uppercase tracking-wider mb-2">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>Sewage Treatment (STP)</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>Effluent Treatment (ETP)</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>MBBR &amp; SBR Technology</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>Gas &amp; Electro Chlorination</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>Swimming Pool Filtration</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#a0f399]" />
                  <span>Operation &amp; Maintenance (AMC)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#a0f399] uppercase tracking-wider mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6]" />
                  <span>About Company</span>
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6]" />
                  <span>Industries We Serve</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6]" />
                  <span>Our Engineering Work</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6]" />
                  <span>Contact Engineering</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="mt-12 pt-6 border-t border-[#003366] text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sri Enviro Engineers. All rights reserved.</p>
          <p className="text-slate-400">
            Water &amp; Wastewater Treatment Systems • Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
