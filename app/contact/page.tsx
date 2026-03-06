import type { Metadata } from "next";
import { Mail, MapPin, Globe, Clock, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arutech Consultancy Services LLP. Start a project, request a demo, or explore collaboration.",
};

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "support@arutechconsultancy.com", href: "mailto:support@arutechconsultancy.com", desc: "For projects and general inquiries" },
  { icon: Globe, label: "Website", value: "www.arutechconsultancy.com", href: "https://www.arutechconsultancy.com", desc: "Our digital home" },
  { icon: MapPin, label: "Location", value: "Uttarakhand, India", href: null, desc: "Serving clients nationwide and globally" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null, desc: "We respond to every inquiry" },
];

const services = ["Software Development", "Web Applications", "Mobile Apps", "Cloud Solutions", "AI & ML"];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto pt-12">
          <div className="max-w-3xl">
            <span className="section-label mb-5 inline-flex">Get In Touch</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.0]">
              Let&apos;s Build<br />
              <span className="text-gradient-brand">Something Great</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Have a project in mind? We would love to hear from you. Tell us about your vision and we will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-neutral-900/80 border border-gray-100 dark:border-white/[0.06] rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50 dark:shadow-none">
                <div className="h-1 bg-gradient-to-r from-brand-500 to-blue-500" />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/40 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-gray-900 dark:text-white">Send a Message</h2>
                      <p className="text-xs text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-5">
              {/* Contact details */}
              <div className="bg-white dark:bg-neutral-900/80 border border-gray-100 dark:border-white/[0.06] rounded-2xl p-6">
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href, desc }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/40 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all">
                            {value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{value}</div>
                        )}
                        <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services we offer */}
              <div className="bg-white dark:bg-neutral-900/80 border border-gray-100 dark:border-white/[0.06] rounded-2xl p-6">
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4">We Can Help With</h3>
                <div className="space-y-2.5">
                  {services.map(s => (
                    <div key={s} className="flex items-center gap-2.5">
                      <Zap className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand card */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-800" />
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="relative p-6">
                  <div className="font-display font-bold text-white text-sm mb-1">Arutech Consultancy Services LLP</div>
                  <div className="text-xs text-brand-200 mb-4">DPIIT Recognized Startup · Uttarakhand, India</div>
                  <p className="text-xs text-brand-200 italic mb-5">
                    Building Technology for a Self-Sufficient India.
                  </p>
                  <a href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 px-3 py-2 rounded-lg transition-colors">
                    View Services <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
