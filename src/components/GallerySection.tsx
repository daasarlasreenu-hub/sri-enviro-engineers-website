"use client";

import React, { useState } from "react";
import { ZoomIn, X, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imgUrl: string;
  fallbackUrl: string;
  desc: string;
  colSpan: string;
  rowSpan: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "tank-erection",
    title: "Large Scale Tank Erection",
    category: "Turnkey Civil & Mechanical",
    imgUrl: "/images/gallery_tank.png",
    fallbackUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    desc: "Heavy industrial steel & concrete water storage tanks engineered for 500 KLD sewage treatment capacity.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: "aeration-basin",
    title: "Biological Aeration Basin",
    category: "MBBR Technology",
    imgUrl: "/images/gallery_aeration.png",
    fallbackUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    desc: "High efficiency fine bubble diffuse aeration grid delivering optimal dissolved oxygen (DO) levels for bacterial digestion.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "pump-room",
    title: "Pump Room & Manifold Setup",
    category: "Piping & Valves",
    imgUrl: "/images/gallery_pump.png",
    fallbackUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    desc: "Duplex stainless steel filter feed pumps with automated VFD controllers and backwash valve manifolds.",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "modular-stp",
    title: "Modular Package STP Installation",
    category: "Residential & Commercial",
    imgUrl: "/images/gallery_package_stp.png",
    fallbackUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    desc: "Compact prefabricated containerized STP plant for a 300-apartment residential complex in Hyderabad.",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="work" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#003366] font-semibold text-xs uppercase tracking-widest bg-[#003366]/10 px-3 py-1 rounded-full">
              Installation Portfolio
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001e40] mt-3 mb-2">
              Our Engineering Work
            </h2>
            <p className="font-body text-gray-600 text-base">
              Recent installations, plant erections, and ongoing turnkey projects across Telangana and Andhra Pradesh.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`${item.colSpan} ${item.rowSpan} relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-gray-200`}
            >
              <img
                src={item.imgUrl}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = item.fallbackUrl;
                }}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e40]/90 via-[#001e40]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#a0f399] mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-white flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#a0f399]" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-[340px] sm:h-[420px] w-full overflow-hidden bg-black">
              <img
                src={activeImage.imgUrl}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = activeImage.fallbackUrl;
                }}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs font-semibold text-[#1b6d24] uppercase tracking-wider bg-[#a0f399]/30 px-2.5 py-1 rounded">
                {activeImage.category}
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#001e40] mt-2 mb-3">
                {activeImage.title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                {activeImage.desc}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveImage(null)}
                  className="bg-[#003366] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#001e40]"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
