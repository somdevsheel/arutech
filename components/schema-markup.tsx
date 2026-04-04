// Server component — renders JSON-LD schema tags in <head>
const BASE_URL = "https://arutechconsultancy.com";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Arutech Consultancy Services LLP",
    legalName: "Arutech Consultancy Services LLP",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo.png`,
      width: 280,
      height: 96,
    },
    image: `${BASE_URL}/og-image.png`,
    description:
      "Arutech Consultancy Services LLP is an India-based technology consultancy specialising in AI/ML solutions, cloud deployment, web application development with React/Next.js, and mobile app development with React Native.",
    foundingDate: "2022",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@arutechconsultancy.com",
        url: `${BASE_URL}/#contact`,
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/arutechconsultancy",
      "https://www.youtube.com/@ArutechConsultancy",
      "https://www.instagram.com/arutech_consultancy",
      "https://www.linkedin.com/company/arutech-consultancy",
      "https://x.com/arutech_consult",
      "https://github.com/somdevsheel",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Arutech Consultancy Services LLP",
    description: "AI, Cloud & Web Development Consultancy in India",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "Arutech Consultancy Services LLP",
    image: `${BASE_URL}/og-image.png`,
    url: BASE_URL,
    email: "hello@arutechconsultancy.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/arutechconsultancy",
      "https://www.instagram.com/arutech_consultancy",
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arutech Technology Services",
    description: "Software development and consultancy services offered by Arutech",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}/#service-ai-ml`,
          name: "AI & Machine Learning Solutions",
          description:
            "Custom ML pipelines, model development, data engineering, and AI API integrations tailored to your business objectives.",
          provider: { "@id": `${BASE_URL}/#organization` },
          url: `${BASE_URL}/#services`,
          serviceType: "Artificial Intelligence Consulting",
          areaServed: { "@type": "Country", name: "India" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}/#service-cloud`,
          name: "Cloud-Based Application Deployment",
          description:
            "End-to-end cloud infrastructure, CI/CD pipelines, Docker & Kubernetes orchestration, auto-scaling and monitoring.",
          provider: { "@id": `${BASE_URL}/#organization` },
          url: `${BASE_URL}/#services`,
          serviceType: "Cloud Computing Services",
          areaServed: { "@type": "Country", name: "India" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}/#service-web`,
          name: "Web Application Development",
          description:
            "Production-grade web applications built with React and Next.js — performant, accessible, and SEO-optimised.",
          provider: { "@id": `${BASE_URL}/#organization` },
          url: `${BASE_URL}/#services`,
          serviceType: "Web Development",
          areaServed: { "@type": "Country", name: "India" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}/#service-mobile`,
          name: "Mobile App Development",
          description:
            "Cross-platform Android mobile applications built with React Native — native performance from a single codebase.",
          provider: { "@id": `${BASE_URL}/#organization` },
          url: `${BASE_URL}/#services`,
          serviceType: "Mobile Application Development",
          areaServed: { "@type": "Country", name: "India" },
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Arutech Consultancy offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arutech offers AI & Machine Learning solutions, cloud-based application deployment, React web application development, and React Native Android mobile app development.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Arutech Consultancy based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arutech Consultancy Services LLP is based in India and works with clients remotely across the country and internationally.",
        },
      },
      {
        "@type": "Question",
        name: "What products has Arutech built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arutech has built Freenoo (a free PDF tools platform at freenoo.com), Instachat (an Android social media app), and Moneto AI Terminal (a financial intelligence platform, coming soon).",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Arutech Consultancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Arutech via the contact form at arutechconsultancy.com/#contact or by emailing hello@arutechconsultancy.com.",
        },
      },
      {
        "@type": "Question",
        name: "Does Arutech work with startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Arutech works with startups, SMEs, and established businesses, providing scalable technology solutions tailored to their growth stage and budget.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: "Products", item: `${BASE_URL}/#products` },
      { "@type": "ListItem", position: 4, name: "Portfolio", item: `${BASE_URL}/#portfolio` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${BASE_URL}/#contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}