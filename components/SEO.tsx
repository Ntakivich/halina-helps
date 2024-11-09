import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

function SEO() {
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      <meta name="author" content={seoData.author} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />

      {/* Language and Localization Tags */}
      <meta name="language" content="RU" />
      <meta httpEquiv="Content-Language" content="ru" />
      <link rel="alternate" href="https://halina-helps.vercel.app" hrefLang="ru" />
      <link rel="alternate" href="https://halina-helps.vercel.app" hrefLang="x-default" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />

      {/* Robots Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={seoData.title} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      <meta name="twitter:image:alt" content="Photo of Halina Klimovich" />

      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="120x120" href="./apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Verification for Google Search Console */}
      <meta name="google-site-verification" content="r8ENPbXpGiVgE-0PfBSgWN7FpeKDeezq8K0mEFjszPw" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Halina Klimovich",
            "description": "Помощь иностранцам в оформлении ВНЖ и ПМЖ в Польше, включая подачу документов на гражданство.",
            "url": "https://halina-helps.vercel.app",
            "sameAs": [
                "mailto:kgalina062018@gmail.com",
                "https://t.me/+48730161434",
                "https://www.instagram.com/gklimovic1369",
            ],
            "logo": seoData.image,
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+48-730-161-434",
                "contactType": "Customer Service",
                "availableLanguage": ["Russian", "Polish"]
              }
            ],
            "founder": {
              "@type": "Person",
              "name": "Halina Klimovich"
            },
            "location": {
              "@type": "Place",
              "name": "Gdansk, Poland",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gdansk",
                "addressCountry": "PL"
              }
            }
          })
        }}
      />
    </Head>
  );
}

export default SEO;
