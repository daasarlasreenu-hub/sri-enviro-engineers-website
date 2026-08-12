"use client";

import React, { useState, useEffect } from "react";
import { Droplet, Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = ["about", "solutions", "industries", "work", "contact"];
      let current = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "solutions", label: "Solutions & STP", href: "#solutions" },
    { id: "industries", label: "Industries", href: "#industries" },
    { id: "work", label: "Our Work", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#001e40] text-white text-xs py-2 px-4 border-b border-[#003366]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="w-3.5 h-3.5 text-[#a0f399]" />
              <a href="tel:+919676909782" className="hover:underline">
                +91 9676909782
              </a>
            </span>
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="w-3.5 h-3.5 text-[#799dd6]" />
              <a href="mailto:daasarlasreenu@gmail.com" className="hover:underline">
                daasarlasreenu@gmail.com
              </a>
            </span>
            <span className="text-[#a0f399] font-medium bg-[#003366] px-2 py-0.5 rounded text-[11px]">
              Turnkey Water &amp; Wastewater Engineers
            </span>
          </div>
          <div className="text-gray-300 text-[11px]">
            Hyderabad • Telangana • India
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200"
            : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003366] to-[#001e40] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Droplet className="w-6 h-6 text-[#a0f399] fill-[#a0f399]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl md:text-2xl text-[#001e40] leading-tight tracking-tight">
                Sri Enviro <span className="text-[#003366] font-semibold">Engineers</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1b6d24]">
                Water &amp; Wastewater Treatment
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive
                      ? "text-[#001e40] font-extrabold after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#003366]"
                      : "text-gray-600 font-medium hover:text-[#003366]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 bg-[#003366] hover:bg-[#001e40] text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-4 h-4 text-[#a0f399]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#001e40] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "font-bold text-[#003366] bg-[#003366]/10"
                      : "font-medium text-gray-700 hover:text-[#003366] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#003366] text-white py-3 rounded-md font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4 text-[#a0f399]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
