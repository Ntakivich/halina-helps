import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

function SEO() {
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <link rel="canonical" href="https://halina-helps.vercel.app"></link>
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="language" content="RU"/>
      <meta http-equiv="Content-Language" content="ru"/>
      <link rel="alternate" href="https://halina-helps.vercel.app" hrefLang="ru" />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      <meta name="google-site-verification" content="r8ENPbXpGiVgE-0PfBSgWN7FpeKDeezq8K0mEFjszPw" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:site_name" content={seoData.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      <meta name="twitter:image:alt" content="Photo of Halina Klimovich"></meta>
      <meta name="robots" content="Index" />
      <meta name="robots" content="index, follow"></meta>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="120x120" href="./apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./avicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
    </Head>
  );
}

export default SEO;
