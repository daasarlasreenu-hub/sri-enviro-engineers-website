"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#f7fafc]">
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <HeroSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <AboutSection />
      <SolutionsSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <IndustriesSection />
      <GallerySection />
      <ContactSection />
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </main>
  );
}
