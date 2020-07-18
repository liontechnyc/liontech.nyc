import React from 'react';
import { graphql } from 'gatsby';
import { Design, Section } from '@liontechnyc/gemini';
import {
  SEO,
  Navbar,
  FixedNav,
  Hero,
  About,
  Services,
  Gallery,
  Footer,
} from '../components';
import { reduceGqlConnection } from '../utils';
import staticImages from '../images';

const design = {
  layout: [['hero'], ['services'], ['gallery'], ['process'], ['footer']],
  grid: {
    y: ['1fr', 'auto'],
    x: ['1fr'],
  },
};

const IndexPage = (props: { data: any }) => {
  const content = props.data;
  const [{ meta }] = reduceGqlConnection(content.allSeoYaml);
  const navigation = reduceGqlConnection(content.allNavYaml);
  const [galleryContent] = reduceGqlConnection(content.allGalleryYaml);
  const files = reduceGqlConnection(content.allFile).reduce(
    (fileMap: object, node) => {
      return {
        [node.base]: { alt: node.base.split('.')[0], ...node },
        ...fileMap,
      };
    },
    {}
  );
  return (
    <Design is="page" noHorizontalScroll={true} {...design}>
      <SEO
        lang="en"
        metaTags={[{ name: 'robots', content: 'index,follow' }]}
        {...meta}
      />
      <FixedNav
        title={meta.title}
        routes={navigation}
        logo={staticImages['logo.svg']}
        revealAt={600}
      />
      <Section name="hero">
        <Navbar
          title={meta.title}
          routes={navigation}
          logo={staticImages['logo.svg']}
        />
        <Hero
          header={meta.header}
          cta={meta.cta}
          action="Schedule A Free Consultation"
          redirect="https://calendly.com/liontechnyc/consultation"
        />
        <div className="hero__divider" />
      </Section>
      <Section name="services">
        <Services
          content={reduceGqlConnection(content.allServicesYaml)}
          images={files}
          {...{ staticImages }}
        />
        <div className="services__divider" />
      </Section>
      <Section name="gallery">
        <Gallery {...galleryContent.content} {...{ staticImages }} />
      </Section>
      <Section name="footer">
        <Footer
          header="Let's Work Together"
          company={meta.title}
          contact={meta.contact}
          logo={staticImages['logo.svg']}
        />
      </Section>
    </Design>
  );
};

export const query = graphql`
  query IndexPageContent {
    allSeoYaml {
      edges {
        node {
          meta {
            title
            description
            keywords
            author
            header
            cta
            about
            contact {
              address
              email
              phone
            }
            social {
              facebook
              instagram
              linkedin
            }
          }
        }
      }
    }
    allNavYaml {
      edges {
        node {
          title
          route
        }
      }
    }
    allAboutYaml {
      edges {
        node {
          title
          description
        }
      }
    }
    allServicesYaml {
      edges {
        node {
          title
          description
          image
          route
        }
      }
    }
    allGalleryYaml {
      edges {
        node {
          content {
            header
            description
            items {
              href
              image
            }
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "services" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fixed(width: 582, height: 375) {
              base64
              src
              srcSet
            }
            fluid(quality: 70) {
              base64
              src
              srcSet
              sizes
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
