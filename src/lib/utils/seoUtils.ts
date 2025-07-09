// SEO Utility Functions

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

// Generate structured data for organization
export const generateOrganizationSchema = (data: {
  name: string;
  url: string;
  logo: string;
  description: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": data.logo,
    "description": data.description,
    "sameAs": [
      data.socialMedia?.linkedin,
      data.socialMedia?.twitter,
      data.socialMedia?.facebook,
    ].filter(Boolean),
  };
};

// Generate structured data for service
export const generateServiceSchema = (data: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": data.provider,
    },
    "url": data.url,
  };
};

// Generate structured data for FAQ
export const generateFAQSchema = (questions: Array<{
  question: string;
  answer: string;
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer,
      },
    })),
  };
};

// Generate structured data for contact information
export const generateContactSchema = (data: {
  name: string;
  url: string;
  email?: string;
  phone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
  };

  if (data.email) {
    schema.email = data.email;
  }

  if (data.phone) {
    schema.telephone = data.phone;
  }

  if (data.address) {
    schema.address = {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry,
    };
  }

  return schema;
};

// SEO data for different sections
export const seoData = {
  homepage: {
    title: "Fastec - Fast & Efficient Technology Solutions",
    description: "Transform your business with Fastec's cutting-edge technology solutions. We specialize in digital transformation, web development, and innovative tech solutions to accelerate your growth.",
    keywords: "technology solutions, digital transformation, web development, software development, IT services, business technology, innovation",
  },
  services: {
    title: "Our Services - Fastec Technology Solutions",
    description: "Explore our comprehensive range of technology services including web development, digital transformation, software solutions, and IT consulting to drive your business forward.",
    keywords: "web development services, software development, digital transformation, IT consulting, technology services, custom software",
  },
  contact: {
    title: "Contact Us - Fastec Technology Solutions",
    description: "Get in touch with Fastec for your technology needs. Our expert team is ready to discuss your project and provide innovative solutions for your business.",
    keywords: "contact fastec, technology consultation, project inquiry, business technology support",
  },
  faq: {
    title: "Frequently Asked Questions - Fastec",
    description: "Find answers to common questions about our technology services, development process, and how Fastec can help transform your business with innovative solutions.",
    keywords: "FAQ, frequently asked questions, technology services FAQ, development process, business technology questions",
  },
  opportunities: {
    title: "Business Opportunities - Fastec Technology Solutions",
    description: "Discover growth opportunities and market insights with Fastec. We help businesses identify and capitalize on technology-driven opportunities for sustainable growth.",
    keywords: "business opportunities, market insights, technology opportunities, growth strategies, business development",
  },
  clientStories: {
    title: "Client Success Stories - Fastec Technology Solutions",
    description: "Read inspiring success stories from our clients who have transformed their businesses with Fastec's technology solutions and digital innovation.",
    keywords: "client success stories, case studies, technology success stories, digital transformation examples, business transformation",
  },
};

// Helper function to get SEO data by section
export const getSEOData = (section: keyof typeof seoData): SEOData => {
  return seoData[section];
}; 