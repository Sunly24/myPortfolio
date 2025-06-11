import { useEffect } from "react";

const SEOHead = ({
  title = "Sunly - Full Stack Developer & Software Engineer Portfolio",
  description = "Experienced Full Stack Developer specializing in React, Flutter, Python, and Laravel. Creating exceptional digital experiences with 15+ years of expertise.",
  keywords = "full stack developer, software engineer, React developer, Flutter developer, Python, Laravel, web development, and AI Engineer",
  canonicalUrl = "https://sunly-portfolio.netlify.app/",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]'
    );
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);

  return null;
};

export default SEOHead;
