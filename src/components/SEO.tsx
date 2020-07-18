import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  lang?: string;
  author?: string;
  metaTags?: {
    name?: string;
    property?: string;
    content: string;
  }[];
}

const SEO = ({
  title,
  description,
  keywords,
  lang,
  author,
  metaTags,
}: SEOProps) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: 'keywords',
          content: keywords ? keywords.join(',') : '',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        ...(metaTags || []),
      ]}
    />
  );
};

export default SEO;
