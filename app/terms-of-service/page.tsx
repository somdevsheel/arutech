import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Arutech Consultancy Services LLP",
  description: "Terms of Service for Arutech Consultancy Services LLP — the rules and conditions governing use of our website and services.",
};

export default function TermsOfService() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-5">
            <span className="text-xs font-mono text-teal-400 tracking-wide">LEGAL</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-slate-400 text-sm leading-relaxed">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the website at <strong className="text-white">arutechconsultancy.com</strong> (&quot;the Website&quot;) or engaging the services of Arutech Consultancy Services LLP (&quot;Arutech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
            </p>
            <p>
              If you do not agree with any part of these Terms, please do not use our website or services. These Terms apply to all visitors, users, and clients.
            </p>
          </Section>

          <Section title="2. Our Services">
            <p>Arutech Consultancy Services LLP provides the following technology services:</p>
            <ul>
              <li>AI &amp; Machine Learning solutions and integrations</li>
              <li>Cloud-based application deployment and infrastructure</li>
              <li>Web application development (React / Next.js)</li>
              <li>Mobile application development (React Native — Android)</li>
            </ul>
            <p>
              We also develop and operate software products including <strong className="text-white">Freenoo</strong> (freenoo.com), <strong className="text-white">Instachat</strong>, and <strong className="text-white">Moneto AI Terminal</strong>. Each product may have its own supplementary terms.
            </p>
          </Section>

          <Section title="3. Use of the Website">
            <p>You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
            <ul>
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material (spam)</li>
              <li>Knowingly transmit any data or material that contains viruses, malware, or other harmful code</li>
              <li>Scrape, crawl, or harvest content or data from this website without our written permission</li>
              <li>Impersonate Arutech or any of its team members</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this website — including but not limited to text, graphics, logos, images, code, and design — is the property of Arutech Consultancy Services LLP or its content suppliers and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.
            </p>
            <p>
              All software code, systems, and deliverables created for clients under contract remain subject to the specific intellectual property terms agreed in the project contract.
            </p>
          </Section>

          <Section title="5. Client Engagements">
            <p>
              When you engage Arutech for a project or service, the specific scope, deliverables, timelines, payment terms, and IP ownership will be governed by a separate written agreement or statement of work signed by both parties.
            </p>
            <p>These Terms do not override or replace any such project-specific agreements. In the event of conflict, the project agreement takes precedence.</p>
            <SubHeading>5.1 Payment</SubHeading>
            <p>
              Unless otherwise agreed in writing, invoices are due within 14 days of issue. Late payments may attract interest at 1.5% per month. We reserve the right to suspend work on projects where payment is overdue.
            </p>
            <SubHeading>5.2 Confidentiality</SubHeading>
            <p>
              We treat all client information, business data, and project details as confidential. We will not disclose client information to third parties without consent, except where required by law.
            </p>
          </Section>

          <Section title="6. Contact Form">
            <p>
              Submitting our contact form does not create a client relationship or any contractual obligation on either party. It is an expression of interest only. An engagement begins only upon execution of a formal written agreement.
            </p>
            <p>
              By submitting the contact form you consent to us processing your submitted data (name, email, message) as described in our <Link href="/privacy-policy" className="text-accent-400 hover:text-accent-300">Privacy Policy</Link>.
            </p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Arutech Consultancy Services LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website or our services.
            </p>
            <p>
              Our total liability to you in connection with any claim arising from these Terms or your use of the website shall not exceed the amount you paid us, if any, in the 12 months preceding the claim.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              Our website may contain links to third-party websites (e.g. Freenoo, social media platforms). These links are provided for convenience only. We have no control over the content or practices of third-party sites and accept no responsibility for them. Visiting third-party links is at your own risk.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of <strong className="text-white">India</strong>. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of India.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the new Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="mt-4 p-5 rounded-xl bg-navy-800/40 border border-slate-700/40">
              <p className="font-semibold text-white mb-1">Arutech Consultancy Services LLP</p>
              <p>Email: <a href="mailto:hello@arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">hello@arutechconsultancy.com</a></p>
              <p>Website: <a href="https://arutechconsultancy.com" className="text-accent-400 hover:text-accent-300">arutechconsultancy.com</a></p>
              <p>Facebook: <a href="https://www.facebook.com/arutechconsultancy" className="text-accent-400 hover:text-accent-300">facebook.com/arutechconsultancy</a></p>
              <p>YouTube: <a href="https://www.youtube.com/@ArutechConsultancy" className="text-accent-400 hover:text-accent-300">youtube.com/@ArutechConsultancy</a></p>
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
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-slate-400">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-slate-300 text-sm mt-4">{children}</h3>;
}