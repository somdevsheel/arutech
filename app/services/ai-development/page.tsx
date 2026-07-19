import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingTab from "@/components/FloatingTab";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Generative AI Development Company | Custom AI Solutions",
  description: "Build intelligent AI solutions with Arutech — custom LLMs, AI Agents, RAG systems, chatbots, and Generative AI development for businesses across India.",
  keywords: ["Generative AI Development", "AI Development Company", "Custom AI Solutions", "Enterprise AI Solutions", "AI Chatbot Development", "AI Agent Development", "LLM Development", "RAG Development", "OpenAI Integration", "AI Assistant Development"],
  alternates: { canonical: "https://arutechconsultancy.com/services/ai-development" },
};

const whyAI = [
  { icon: "🤖", title: "Automate Repetitive Work", desc: "AI handles data entry, customer queries, reporting, and scheduling — freeing your team for high-value decisions." },
  { icon: "🎯", title: "Smarter Decision-Making", desc: "Predictive analytics and AI insights help you identify trends, forecast demand, and act on opportunities faster." },
  { icon: "💬", title: "Personalised Experiences", desc: "AI-powered recommendations and conversational assistants create personalised interactions at scale." },
  { icon: "🚀", title: "Accelerate Innovation", desc: "From content generation to code assistance, AI multiplies your team's output and accelerates product development." },
];

const ourServices = [
  { icon: "🧠", title: "Custom LLM Development", desc: "Fine-tuned language models trained on your domain data for precise, context-aware responses." },
  { icon: "🔍", title: "RAG Systems", desc: "Retrieval-Augmented Generation pipelines connecting AI to your knowledge bases, documents, and databases." },
  { icon: "🤝", title: "AI Agent Development", desc: "Autonomous AI agents that plan, execute, and adapt to complete complex multi-step business tasks." },
  { icon: "💬", title: "AI Chatbot Development", desc: "Intelligent conversational assistants for customer support, sales qualification, and internal helpdesks." },
  { icon: "🔗", title: "AI Integration Services", desc: "Seamlessly integrate OpenAI, Anthropic, Gemini, and other AI APIs into your existing applications." },
  { icon: "📊", title: "AI Analytics & Insights", desc: "Extract actionable intelligence from unstructured data — documents, emails, reviews, and customer feedback." },
];

const solutions = [
  "Custom AI Chatbots", "Knowledge Base Assistants", "AI Content Generation",
  "Document Intelligence", "AI-Powered Search", "Sentiment Analysis",
  "Automated Reporting", "Voice AI Assistants", "AI Code Assistants", "AI Data Pipelines",
];

const technologies = [
  "OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "LangChain", "LlamaIndex",
  "Pinecone", "Weaviate", "ChromaDB", "Python", "FastAPI", "Node.js", "PostgreSQL",
  "AWS Bedrock", "Hugging Face", "Ollama", "n8n AI Nodes",
];

const process = [
  { num: "01", title: "AI Strategy & Discovery", desc: "Identify AI use cases aligned with your business goals, data availability, and ROI potential." },
  { num: "02", title: "Data Assessment", desc: "Evaluate your existing data sources, quality, and structure to determine the best AI approach." },
  { num: "03", title: "Model Development", desc: "Build, fine-tune, or integrate AI models tailored to your specific domain and requirements." },
  { num: "04", title: "Integration & Testing", desc: "Connect AI capabilities into your existing systems with rigorous accuracy and safety testing." },
  { num: "05", title: "Deployment", desc: "Deploy AI solutions to cloud or on-premise environments with monitoring and observability." },
  { num: "06", title: "Optimisation & Support", desc: "Continuous improvement of AI performance, accuracy, and cost-efficiency over time." },
];

const industries = [
  "Healthcare & Pharma", "Legal & Compliance", "Retail & E-commerce", "Finance & FinTech",
  "Education & EdTech", "HR & Recruitment", "Real Estate", "Customer Service",
];

const faqs = [
  { q: "What is Generative AI and how can it help my business?", a: "Generative AI creates text, code, images, and structured data. For businesses, this means automating content creation, powering customer support, extracting insights from documents, and building intelligent products faster." },
  { q: "Do I need a large dataset to use AI?", a: "Not always. With RAG systems, your AI can work with your existing documents, PDFs, and knowledge bases without requiring model training. Fine-tuning requires more data but is not always necessary." },
  { q: "How secure is AI with our confidential business data?", a: "We implement strict data security — on-premise AI options, encrypted data pipelines, access controls, and audit logs. Your data is never used to train third-party AI models without your consent." },
  { q: "How long does it take to build a custom AI solution?", a: "A simple AI chatbot or integration can be built in 2–4 weeks. Complex RAG systems and custom AI agents typically take 6–12 weeks depending on scope and data complexity." },
  { q: "Can you integrate AI into our existing software?", a: "Yes. We integrate AI capabilities into existing web apps, mobile apps, CRMs, ERPs, and internal tools through secure APIs and custom-built connectors." },
  { q: "What is the difference between RAG and fine-tuning?", a: "RAG connects an AI model to your documents in real-time without training. Fine-tuning adapts the model's behaviour using your data. Both can be combined for best results." },
];

export default function AIDevelopment() {
  return (
    <main className="bg-white">
      <Navbar />
      <FloatingTab />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-violet-50/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
            <span className="text-xs font-mono text-indigo-600 tracking-widest font-semibold uppercase">Generative AI Development</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Transform Your Business with{" "}
            <span className="text-orange-500">Custom Generative AI Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-justify">
            Leverage the power of Generative AI, Large Language Models, AI Agents, and intelligent automation to streamline operations, enhance customer experiences, and drive innovation across your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md shadow-orange-200">
              Build Your AI Solution
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/services/automation-workflows" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
              See AI Automation →
            </a>
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Why AI?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Why Generative AI is Transforming Modern Businesses</h2>
            <p className="text-gray-600 leading-relaxed text-justify">Discover how businesses are using AI to automate workflows, improve decision-making, personalise customer interactions, and unlock new growth opportunities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAI.map((r) => (
              <div key={r.title} className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">What We Build</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Our Generative AI Development Services</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From AI strategy and consulting to custom model development, chatbot solutions, and enterprise AI integration, we deliver end-to-end AI solutions tailored to your business goals.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourServices.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Tech */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">AI Solutions</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">AI Solutions We Build</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">We develop intelligent AI-powered applications designed to solve real business challenges and create measurable value.</p>
            <div className="grid grid-cols-2 gap-2">
              {solutions.map((s) => (
                <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                  <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-gray-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Tech Stack</span>
            <h2 className="font-display text-3xl font-bold text-gray-900 mt-3 mb-4">AI Technologies We Specialise In</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">Our expertise spans leading AI models, frameworks, APIs, and cloud platforms to deliver reliable and future-ready AI applications.</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-lg">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">Our Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Our AI Development Process</h2>
            <p className="text-gray-400 leading-relaxed text-justify">A structured approach combining strategy, data, model development, testing, deployment, and continuous optimisation for successful AI implementation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-mono text-2xl font-bold text-orange-400">{step.num}</span>
                <h3 className="font-display text-base font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">Industries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Industries We Empower with AI</h2>
            <p className="text-gray-600 leading-relaxed text-justify">From startups to enterprises, we help organisations across industries adopt AI solutions that improve efficiency, reduce costs, and accelerate innovation.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-justify">Find answers to common questions about Generative AI development, implementation, security, costs, timelines, and enterprise adoption.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.q}
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed text-justify">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-orange-500 text-center text-white">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Let&apos;s Build Your AI-Powered Future</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Whether you&apos;re exploring AI for the first time or scaling enterprise AI initiatives, our experts are ready to help you build intelligent solutions.</p>
        <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-md">
          Start Your AI Project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
