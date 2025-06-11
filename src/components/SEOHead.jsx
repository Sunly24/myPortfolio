import { useEffect } from "react";

const SEOHead = ({
  title = "Sunly - Portfolio",
  description = "Experienced in React, Flutter, Python, and Laravel. Creating exceptional digital experiences.",
  keywords = "Software Engineer, React developer, Flutter developer, Python, Laravel, web development, and AI Engineer",
  canonicalUrl = "https://sunly-portfolio.netlify.app/",
  ogImage = "https://sunly-portfolio.netlify.app/images/og-image.png",
  pageType = "website",
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

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", ogImage);
    }

    // Update Open Graph type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", pageType);
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

    // Update Twitter image
    const twitterImage = document.querySelector(
      'meta[property="twitter:image"]'
    );
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImage);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }

    // Add or update meta viewport if needed
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewport);
    }

    // Add or update meta charset if needed
    let charset = document.querySelector("meta[charset]");
    if (!charset) {
      charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add or update meta robots if needed
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "index, follow";
      document.head.appendChild(robots);
    }

    // Add JSON-LD structured data for breadcrumbs (if on a specific page)
    const existingBreadcrumb = document.querySelector(
      'script[type="application/ld+json"][data-breadcrumb]'
    );
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    if (canonicalUrl !== "https://sunly-portfolio.netlify.app/") {
      const breadcrumbScript = document.createElement("script");
      breadcrumbScript.type = "application/ld+json";
      breadcrumbScript.setAttribute("data-breadcrumb", "true");
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sunly-portfolio.netlify.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      });
      document.head.appendChild(breadcrumbScript);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, pageType]);

  return null;
};

export default SEOHead;
