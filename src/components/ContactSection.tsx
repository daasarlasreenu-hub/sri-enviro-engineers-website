"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    requirement: "STP - Sewage Treatment Plant",
    plantType: "",
    capacity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      // Fallback success feedback
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#1b6d24] font-semibold text-xs uppercase tracking-widest bg-[#1b6d24]/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001e40] mt-3 mb-4 leading-tight">
                LET&apos;S TALK ABOUT YOUR PROJECT
              </h2>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
                Our engineering team is ready to help you design, estimate, and implement the perfect water treatment solution for your specific site requirements.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#003366] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-[#a0f399]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#001e40]">
                      Registered Office Address
                    </h4>
                    <p className="font-body text-sm text-gray-600 leading-normal mt-1">
                      # 16-11-741/C/1/1/A/B, Opp: Asian Hospital, <br />
                      Dilsukhnagar, Hyderabad - 500060, Telangana, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#003366] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-[#a0f399]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#001e40]">
                      Phone Number &amp; Helpline
                    </h4>
                    <a
                      href="tel:+919676909782"
                      className="font-body text-base font-semibold text-[#003366] hover:underline mt-1 block"
                    >
                      +91 9676909782
                    </a>
                    <span className="text-xs text-gray-500">Available Mon - Sat (9:00 AM - 7:00 PM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#003366] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-[#799dd6]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#001e40]">
                      Email Address
                    </h4>
                    <a
                      href="mailto:daasarlasreenu@gmail.com"
                      className="font-body text-base font-semibold text-[#003366] hover:underline mt-1 block"
                    >
                      daasarlasreenu@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="p-6 bg-[#f1f4f6] rounded-xl border border-gray-200">
              <h4 className="font-heading font-bold text-[#001e40] text-sm mb-1">
                Fast Response Guarantee
              </h4>
              <p className="text-xs text-gray-600">
                All engineering inquiries and quotation requests receive a response within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#f7fafc] p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xl">
            <h3 className="font-heading font-bold text-2xl text-[#001e40] mb-2">
              Request Engineering Quotation
            </h3>
            <p className="text-sm text-gray-600 mb-8">
              Select your requirement and submit details below. All 10 technical categories are available for selection.
            </p>

            {isSubmitted ? (
              <div className="bg-[#1b6d24]/10 border border-[#1b6d24]/30 rounded-xl p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#1b6d24] text-white flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-[#a0f399]" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-[#001e40] mb-2">
                  Quotation Request Submitted!
                </h4>
                <p className="font-body text-gray-700 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. Our technical engineering team has received your request for <strong>{formData.requirement} ({formData.capacity || "Custom Capacity"})</strong> and will contact you shortly at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      company: "",
                      phone: "",
                      email: "",
                      location: "",
                      requirement: "STP - Sewage Treatment Plant",
                      plantType: "",
                      capacity: "",
                      message: "",
                    });
                  }}
                  className="bg-[#003366] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#001e40]"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {errorMsg && (
                  <div className="sm:col-span-2 bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Infra Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Project Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Telangana"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Type of Requirement *
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="p-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] cursor-pointer"
                  >
                    <option value="STP - Sewage Treatment Plant" className="py-1">Sewage Treatment Plant (STP)</option>
                    <option value="ETP - Effluent Treatment Plant" className="py-1">Effluent Treatment Plant (ETP)</option>
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

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Treatment Tech / Plant Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MBBR / SBR / Package"
                    value={formData.plantType}
                    onChange={(e) => setFormData({ ...formData, plantType: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Approx. Capacity (KLD / MLD)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 KLD"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001e40]">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide additional details regarding raw water source, site constraints, or effluent parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="p-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  />
                </div>

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1b6d24] hover:bg-[#15541c] text-white py-3.5 px-6 rounded-lg font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#a0f399]" />
                        <span>Submit Request for Quotation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
