import { Helmet } from "react-helmet";

type PageHeaderProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

export default function PageHeader({
  title,
  description,
  image,
  url,
  type = "website",
  siteName = "YouTube",
}: PageHeaderProps) {
  const pageUrl = url || window.location.href;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
