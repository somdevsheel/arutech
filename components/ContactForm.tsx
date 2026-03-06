"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">Message Received!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
        <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
          className="mt-6 text-sm text-brand-600 dark:text-brand-400 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3.5 bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 dark:focus:border-brand-500 transition-all font-body";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Full Name *</label>
          <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Email Address *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="rahul@company.com" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Company</label>
          <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Service Interested In</label>
          <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
            <option value="">Select a service</option>
            <option value="software">Software Development</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="ai">AI & Machine Learning</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">Project Details *</label>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell us about your project, timeline, and goals..."
          className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" disabled={status === "loading"}
        className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 btn-primary text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" />Sending your message...</>
        ) : (
          <><Send className="w-4 h-4" />Send Message<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        We respond to all inquiries within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
