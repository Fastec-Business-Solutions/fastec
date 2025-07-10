import SEO from "./SEO";

// Single Page Application SEO - Main Page
export const HomepageSEO = () => (
  <SEO
    title="Fastec Business Solutions - Fast & Efficient Technology Solutions"
    description="Transform your business with Fastec Business Solutions' cutting-edge technology solutions. We specialize in digital transformation, web development, and innovative tech solutions to accelerate your growth. Contact us for a free consultation."
    keywords="technology solutions, digital transformation, web development, software development, IT services, business technology, innovation, Fastec Business Solutions, business consulting"
    ogType="website"
  />
);

// Section-specific SEO for smooth scroll sections
export const ServicesSectionSEO = () => (
  <SEO
    title="Our Services - Fastec Business Solutions"
    description="Explore our comprehensive range of technology services including web development, digital transformation, software solutions, and IT consulting to drive your business forward."
    keywords="web development services, software development, digital transformation, IT consulting, technology services, custom software, business solutions"
    ogType="website"
  />
);

export const ContactSectionSEO = () => (
  <SEO
    title="Contact Us - Fastec Business Solutions"
    description="Get in touch with Fastec Business Solutions for your technology needs. Our expert team is ready to discuss your project and provide innovative solutions for your business."
    keywords="contact fastec, technology consultation, project inquiry, business technology support, free consultation"
    ogType="website"
  />
);

export const FAQSectionSEO = () => (
  <SEO
    title="Frequently Asked Questions - Fastec Business Solutions"
    description="Find answers to common questions about our technology services, development process, and how Fastec Business Solutions can help transform your business with innovative solutions."
    keywords="FAQ, frequently asked questions, technology services FAQ, development process, business technology questions"
    ogType="website"
  />
);

export const OpportunitiesSectionSEO = () => (
  <SEO
    title="Business Opportunities - Fastec Business Solutions"
    description="Discover growth opportunities and market insights with Fastec Business Solutions. We help businesses identify and capitalize on technology-driven opportunities for sustainable growth."
    keywords="business opportunities, market insights, technology opportunities, growth strategies, business development"
    ogType="website"
  />
);

export const ClientStoriesSectionSEO = () => (
  <SEO
    title="Client Success Stories - Fastec Business Solutions"
    description="Read inspiring success stories from our clients who have transformed their businesses with Fastec Business Solutions' technology solutions and digital innovation."
    keywords="client success stories, case studies, technology success stories, digital transformation examples, business transformation"
    ogType="website"
  />
);

// Custom SEO for specific sections or content
export const CustomSEO = ({
  title,
  description,
  keywords,
  ogType = "website",
  canonicalUrl,
}: {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  canonicalUrl?: string;
}) => (
  <SEO
    title={title}
    description={description}
    keywords={keywords}
    ogType={ogType}
    canonicalUrl={canonicalUrl}
  />
); 