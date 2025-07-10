import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Fastec Business Solutions - Fast & Efficient Technology Solutions",
  description = "Fastec Business Solutions provides cutting-edge technology solutions for businesses. We specialize in digital transformation, web development, and innovative tech solutions to help your business grow.",
  keywords = "technology, digital transformation, web development, software solutions, business technology, IT services, Fastec Business Solutions",
  author = "Fastec Business Solutions",
  ogImage = "/src/assets/images/fastec-logo-1.svg",
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noindex = false,
  nofollow = false,
}) => {
  // Determine if we're in development or production
  const isDevelopment = import.meta.env.DEV;
  const baseUrl = isDevelopment ? "http://localhost:5173" : "https://fastecbusinesssolutions.com";
  const finalOgUrl = ogUrl || baseUrl;
  const finalCanonicalUrl = canonicalUrl || baseUrl;

  const robots = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Fastec Business Solutions" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fastec Business Solutions",
          "url": baseUrl,
          "logo": `${baseUrl}/src/assets/images/fastec-logo-1.svg`,
          "description": description,
          "sameAs": [
            "https://linkedin.com/company/fastec-business-solutions",
            "https://twitter.com/fastecbusiness",
            "https://facebook.com/fastecbusinesssolutions"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 