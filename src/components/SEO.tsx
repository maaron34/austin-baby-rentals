import { useLocation } from 'react-router-dom';
import { getPageMeta, OG_DEFAULTS } from '../data/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ title, description, canonical, ogType, ogImage }: SEOProps) {
  const { pathname } = useLocation();
  const defaults = getPageMeta(pathname);

  const t = title ?? defaults.title;
  const d = description ?? defaults.description;
  const c = canonical ?? defaults.canonical;
  const type = ogType ?? OG_DEFAULTS.type;
  const image = ogImage ?? OG_DEFAULTS.image;

  return (
    <>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={c} />

      {/* Open Graph */}
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={c} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={OG_DEFAULTS.imageWidth} />
      <meta property="og:image:height" content={OG_DEFAULTS.imageHeight} />
      <meta property="og:site_name" content={OG_DEFAULTS.siteName} />
      <meta property="og:locale" content={OG_DEFAULTS.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
