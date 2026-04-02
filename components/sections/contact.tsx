"use client";

import { useEffect, useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-navy-800/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/50 transition-all";

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-900/30">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <span className="text-xs font-mono text-accent-400 tracking-wide">GET IN TOUCH</span>
            </div>
            <h2 className="animate-on-scroll delay-100 font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Let's Build{" "}
              <span className="gradient-text">Something</span>
            </h2>
            <p className="animate-on-scroll delay-200 text-slate-400 text-lg leading-relaxed mb-8">
              Have a project in mind? We'd love to hear about it. Tell us what you're building and we'll follow up within 24 hours.
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
                  value: "hello@arutech.in",
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
                  <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm text-slate-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="animate-on-scroll delay-400 p-4 rounded-xl bg-teal-400/5 border border-teal-400/15">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We don't do aggressive follow-ups or sales pressure. If we're not the right fit, we'll tell you.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-on-scroll delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-navy-800/40 border border-slate-700/40 rounded-2xl p-7 lg:p-8 backdrop-blur-sm"
            >
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-teal-400/15 border border-teal-400/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-400 text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Full Name <span className="text-accent-400">*</span>
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
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email Address <span className="text-accent-400">*</span>
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
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Message <span className="text-accent-400">*</span>
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
                    <p className="text-xs text-slate-600 mt-1 text-right">
                      {form.message.length}/2000
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 bg-accent-500 hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 flex items-center justify-center gap-2"
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
