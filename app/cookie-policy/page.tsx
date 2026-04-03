import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Arutech Consultancy Services LLP",
  description: "Cookie Policy for Arutech Consultancy Services LLP — what cookies we use and why.",
};

export default function CookiePolicy() {
  const updated = "April 4, 2026";

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="border-b border-slate-800/60 bg-navy-900/60 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <span className="text-xs text-slate-600 font-mono">arutechconsultancy.com</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-5">
            <span className="text-xs font-mono text-accent-400 tracking-wide">LEGAL</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-slate-400 text-sm leading-relaxed">

          <Section title="1. What Are Cookies">
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.
            </p>
            <p>
              Cookies do not contain personally identifiable information on their own, but they may be linked to personal data we store about you.
            </p>
          </Section>

          <Section title="2. How We Use Cookies">
            <p>
              Arutech Consultancy Services LLP uses cookies strictly for functional purposes. We do <strong className="text-white">not</strong> use cookies for advertising, retargeting, or cross-site tracking.
            </p>
          </Section>

          <Section title="3. Cookies We Use">
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-700/60">
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold bg-navy-800/40 rounded-tl-lg">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold bg-navy-800/40">Purpose</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold bg-navy-800/40">Type</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold bg-navy-800/40 rounded-tr-lg">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "arutech_cookie_consent",
                      purpose: "Stores your cookie consent choice (accepted/declined) so we don't show the banner on every visit",
                      type: "Essential",
                      duration: "Persistent (until cleared)",
                    },
                    {
                      name: "arutech-theme",
                      purpose: "Remembers your display theme preference (dark, light, or normal mode)",
                      type: "Functional",
                      duration: "Persistent (until cleared)",
                    },
                    {
                      name: "va_* (Vercel Analytics)",
                      purpose: "Anonymous page view analytics to help us understand site usage. No personal data is collected.",
                      type: "Analytics",
                      duration: "Session / 1 year",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/40 hover:bg-navy-800/20 transition-colors">
                      <td className="py-3 px-4 font-mono text-accent-400 align-top">{row.name}</td>
                      <td className="py-3 px-4 text-slate-400 align-top">{row.purpose}</td>
                      <td className="py-3 px-4 align-top">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                          row.type === "Essential"
                            ? "bg-teal-400/10 text-teal-400 border-teal-400/20"
                            : row.type === "Functional"
                            ? "bg-blue-400/10 text-blue-400 border-blue-400/20"
                            : "bg-slate-500/10 text-slate-400 border-slate-600/30"
                        }`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-500 align-top">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Cookie Categories Explained">
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {[
                {
                  type: "Essential",
                  color: "border-teal-400/20 bg-teal-400/5",
                  badge: "bg-teal-400/10 text-teal-400",
                  desc: "Strictly necessary for the website to function. These cannot be disabled as the site would not work without them.",
                },
                {
                  type: "Functional",
                  color: "border-blue-400/20 bg-blue-400/5",
                  badge: "bg-blue-400/10 text-blue-400",
                  desc: "Enable enhanced functionality and personalisation. Disabling these may affect your experience.",
                },
                {
                  type: "Analytics",
                  color: "border-slate-600/30 bg-slate-500/5",
                  badge: "bg-slate-500/10 text-slate-400",
                  desc: "Help us understand how visitors interact with the site. All data is anonymous and aggregated.",
                },
              ].map((c) => (
                <div key={c.type} className={`p-4 rounded-xl border ${c.color}`}>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${c.badge} mb-2 inline-block`}>{c.type}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="5. Third-Party Cookies">
            <p>
              We use <strong className="text-white">Vercel Analytics</strong> to collect anonymous, aggregated data about page views and site performance. This data cannot be used to identify individual users. Vercel Analytics is privacy-friendly and does not use advertising cookies.
            </p>
            <p>
              We do not embed third-party advertising networks, social media tracking pixels, or any other external cookie-setting services.
            </p>
          </Section>

          <Section title="6. How to Control Cookies">
            <p>You have several options to control or limit how cookies are used:</p>

            <div className="space-y-3 mt-3">
              <div className="p-4 rounded-xl bg-navy-800/40 border border-slate-700/30">
                <p className="text-xs font-semibold text-white mb-1">Via our Cookie Banner</p>
                <p className="text-xs text-slate-400">When you first visit our site, you can accept or decline cookies using the banner at the bottom of the page.</p>
              </div>
              <div className="p-4 rounded-xl bg-navy-800/40 border border-slate-700/30">
                <p className="text-xs font-semibold text-white mb-1">Via Your Browser Settings</p>
                <p className="text-xs text-slate-400 mb-2">Most browsers allow you to block or delete cookies through their settings. Here&apos;s how for common browsers:</p>
                <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                  <li><strong className="text-slate-400">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong className="text-slate-400">Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong className="text-slate-400">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong className="text-slate-400">Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-navy-800/40 border border-slate-700/30">
                <p className="text-xs font-semibold text-white mb-1">Reset Your Consent</p>
                <p className="text-xs text-slate-400">To reset your cookie preference and see the banner again, open your browser&apos;s Developer Tools → Application → Local Storage → delete the <span className="font-mono text-accent-400">arutech_cookie_consent</span> key.</p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Note: Blocking essential cookies may affect the functionality of this website.
            </p>
          </Section>

          <Section title="7. Do Not Track">
            <p>
              Some browsers include a &quot;Do Not Track&quot; (DNT) signal. Our website does not currently respond to DNT signals, as there is no consistent industry standard for doing so. However, we already limit our cookie use to essential and functional purposes only.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. The &quot;Last updated&quot; date at the top of this page will be revised accordingly. We encourage you to check this page periodically.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have questions about our use of cookies, please contact:</p>
            <div className="mt-4 p-5 rounded-xl bg-navy-800/40 border border-slate-700/40">
              <p className="font-semibold text-white mb-1">Arutech Consultancy Services LLP</p>
              <p>Email: <a href="mailto:hello@arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">hello@arutechconsultancy.com</a></p>
              <p>Website: <a href="https://arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">arutechconsultancy.com</a></p>
            </div>
            <p className="mt-4">
              Also see our{" "}
              <Link href="/privacy-policy" className="text-accent-400 hover:text-accent-300 underline underline-offset-2">Privacy Policy</Link>
              {" "}and{" "}
              <Link href="/terms-of-service" className="text-accent-400 hover:text-accent-300 underline underline-offset-2">Terms of Service</Link>.
            </p>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold text-white border-b border-slate-800/60 pb-2">
        {title}
      </h2>
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-slate-400">
        {children}
      </div>
    </div>
  );
}