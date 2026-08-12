"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Droplet, AlertCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "STP - Sewage Treatment Plant",
    capacity: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: formData.notes,
        }),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit request.");
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#003366] text-white flex items-center justify-center">
            <Droplet className="w-6 h-6 text-[#a0f399] fill-[#a0f399]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-[#001e40]">
              Get Instant Project Quotation
            </h3>
            <p className="text-xs text-gray-500">Sri Enviro Engineers • Technical Estimation</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1b6d24] text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-[#a0f399]" />
            </div>
            <h4 className="font-heading font-bold text-xl text-[#001e40] mb-2">
              Quotation Request Received!
            </h4>
            <p className="font-body text-gray-600 text-sm mb-6">
              Our engineering team will review your requirement for <strong>{formData.requirement}</strong> and call you back at <strong>{formData.phone}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-[#003366] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#001e40]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-3 bg-[#f7fafc] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-[#f7fafc] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="daasarlasreenu@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-[#f7fafc] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                  Requirement *
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full p-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] cursor-pointer"
                >
                  <option value="STP - Sewage Treatment Plant" className="py-1">Sewage Treatment (STP)</option>
                  <option value="ETP - Effluent Treatment Plant" className="py-1">Effluent Treatment (ETP)</option>
                  <option value="Water Treatment System" className="py-1">Water Treatment System</option>
                  <option value="Gas / Electro Chlorination" className="py-1">Gas / Electro Chlorination</option>
                  <option value="Ozonator System" className="py-1">Ozonator System</option>
                  <option value="Swimming Pool Filtration" className="py-1">Swimming Pool Filtration</option>
                  <option value="Operation & Maintenance" className="py-1">Operation &amp; Maintenance</option>
                  <option value="AMC - Annual Maintenance Contract" className="py-1">Annual Maintenance Contract (AMC)</option>
                  <option value="Spares & Consumables" className="py-1">Spares &amp; Consumables</option>
                  <option value="Other Requirement" className="py-1">Other Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                  Capacity (KLD)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 100 KLD"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full p-3 bg-[#f7fafc] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#001e40] mb-1">
                Project Notes / Location
              </label>
              <textarea
                rows={2}
                placeholder="Mention city location or site details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 bg-[#f7fafc] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1b6d24] hover:bg-[#15541c] text-white py-3.5 px-6 rounded-lg font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#a0f399]" />
                    <span>Submit Quotation Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
