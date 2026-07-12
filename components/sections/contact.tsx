"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [countryCode, setCountryCode] = useState("+91");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const countryCodes = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1",  flag: "🇺🇸", name: "USA/Canada" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" },
    { code: "+60", flag: "🇲🇾", name: "Malaysia" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+27", flag: "🇿🇦", name: "South Africa" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+52", flag: "🇲🇽", name: "Mexico" },
    { code: "+92", flag: "🇵🇰", name: "Pakistan" },
    { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
    { code: "+977", flag: "🇳🇵", name: "Nepal" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: form.phone ? `${countryCode} ${form.phone}` : "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setCountryCode("+91");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-all";

  return (
    <section id="contact" ref={sectionRef} className="relative py-14 lg:py-20 bg-gray-50">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <span className="text-xs font-mono text-orange-600 tracking-widest font-semibold uppercase">Get in Touch</span>
            </div>
            <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-gray-600 text-lg leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Tell us what you&apos;re building and we&apos;ll follow up within 24 hours.
            </p>

            {/* Contact details */}
            <div className="animate-on-scroll delay-300 space-y-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@arutechconsultancy.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "India — Remote-friendly",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Response time",
                  value: "Within 24 hours",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="animate-on-scroll delay-400 p-4 rounded-xl bg-orange-50 border border-orange-100">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We don't do aggressive follow-ups or sales pressure. If we're not the right fit, we'll tell you.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-7 lg:p-8 shadow-sm"
            >
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Message Received</h3>
                  <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-sm text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Mobile Number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="px-3 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-all cursor-pointer flex-shrink-0"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Add mobile number..."
                        className={`${inputClasses} flex-1`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — what you're building, your timeline, and any relevant details."
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                    />
                    <p className="text-xs text-gray-400 mt-1 text-right">{form.message.length}/2000</p>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200 hover:shadow-orange-300 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
