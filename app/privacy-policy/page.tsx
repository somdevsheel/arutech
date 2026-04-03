import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Arutech Consultancy Services LLP",
  description: "Privacy Policy for Arutech Consultancy Services LLP — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-5">
            <span className="text-xs font-mono text-accent-400 tracking-wide">LEGAL</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: {updated}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">

          <Section title="1. Who We Are">
            <p>
              Arutech Consultancy Services LLP (&quot;Arutech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a technology consultancy registered in India, operating at <strong className="text-white">arutechconsultancy.com</strong>. We provide AI &amp; ML solutions, cloud deployment, web application development, and mobile app development services.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read it carefully.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <SubHeading>2.1 Information You Provide</SubHeading>
            <p>When you submit our contact form, we collect:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
            <SubHeading>2.2 Automatically Collected Information</SubHeading>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring URL</li>
            </ul>
            <SubHeading>2.3 Cookies</SubHeading>
            <p>
              We use a minimal cookie to store your theme preference (dark / light / normal mode). This cookie contains no personal information and is stored locally in your browser. We do not use tracking or advertising cookies.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and contact form submissions</li>
              <li>Send you a confirmation email acknowledging receipt of your message</li>
              <li>Improve our website and services</li>
              <li>Analyse website usage to understand how visitors interact with our content</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong className="text-white">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </Section>

          <Section title="4. Data Storage">
            <p>
              Contact form submissions are stored securely in <strong className="text-white">MongoDB Atlas</strong>, a cloud database service provided by MongoDB, Inc., with servers located in the United States. MongoDB Atlas is SOC 2 Type II certified and provides encryption at rest and in transit.
            </p>
            <p>
              We retain contact form data for a maximum of <strong className="text-white">2 years</strong>, after which it is permanently deleted unless required by law to retain it longer.
            </p>
          </Section>

          <Section title="5. Email Communications">
            <p>
              When you submit our contact form, you will receive an automated acknowledgement email. Our team may follow up by email regarding your enquiry. We use SMTP-based email delivery via Gmail for transactional emails.
            </p>
            <p>
              We do not send unsolicited marketing emails. You can request to be removed from our contact records at any time by emailing <strong className="text-white">hello@arutechconsultancy.com</strong>.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>Our website and operations may involve the following third-party services:</p>
            <ul>
              <li><strong className="text-white">Vercel</strong> — website hosting and deployment</li>
              <li><strong className="text-white">MongoDB Atlas</strong> — database storage for contact submissions</li>
              <li><strong className="text-white">Google (Gmail / SMTP)</strong> — transactional email delivery</li>
              <li><strong className="text-white">Vanta.js / Three.js (CDN)</strong> — website visual effects, loaded from cdnjs and jsdelivr</li>
            </ul>
            <p>
              Each of these services has its own privacy policy. We encourage you to review them independently.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li><strong className="text-white">Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-white">Rectification</strong> — request correction of inaccurate data</li>
              <li><strong className="text-white">Erasure</strong> — request deletion of your personal data</li>
              <li><strong className="text-white">Restriction</strong> — request we limit how we use your data</li>
              <li><strong className="text-white">Objection</strong> — object to our processing of your data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <strong className="text-white">hello@arutechconsultancy.com</strong>. We will respond within 30 days.
            </p>
          </Section>

          <Section title="8. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted database connections (TLS), access controls, and secure credential management.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our website and services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="mt-4 p-5 rounded-xl bg-navy-800/40 border border-slate-700/40">
              <p className="font-semibold text-white mb-1">Arutech Consultancy Services LLP</p>
              <p>Email: <a href="mailto:hello@arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">hello@arutechconsultancy.com</a></p>
              <p>Website: <a href="https://arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">arutechconsultancy.com</a></p>
            </div>
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
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-slate-400">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-slate-300 text-sm mt-4">{children}</h3>;
}