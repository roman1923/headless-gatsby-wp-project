import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ 
  title, 
  description, 
  lang = "en",
  alternateLocales = ["uk_UA"],
  canonicalUrl,
  jsonLd = [],
  children 
}) => {
  const siteUrl = "https://developers-db.com"
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Hreflang tags */}
      {alternateLocales.map((locale) => (
        <link 
          key={locale}
          rel="alternate" 
          hrefLang={locale} 
          href={`${siteUrl}/${locale.split('_')[0]}`} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* JSON-LD structured data */}
      {jsonLd.map((item, index) => (
        <script 
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      
      {children}
    </Helmet>
  )
}

export default Seo