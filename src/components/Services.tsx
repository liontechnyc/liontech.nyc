import React from 'react';
import { Link } from 'gatsby';
import { Block, Content, Collection, Image, UX } from '@liontechnyc/gemini';

export interface ServiceProps {
  header?: string;
  cta?: string;
  images: {
    [base: string]: {
      base: string;
      childImageSharp: {
        fixed?: { src: string };
        fluid: { src: string };
        original: { src: string };
      };
    };
  };
  staticImages: { [base: string]: string };
  content: {
    title: string;
    description: string;
    image: string;
    route: string;
  }[];
}

const Services = ({
  header,
  cta,
  images,
  staticImages,
  content,
}: ServiceProps) => {
  const serviceItems = content.map(
    ({
      title,
      description,
      image,
      route,
    }: {
      title: string;
      description: string;
      image: string;
      route: string;
    }) => {
      const imageContent = images[image];
      const staticImage = staticImages[image];
      return (
        <Block className="services__container">
          <Image
            src={imageContent?.childImageSharp.fluid.src || undefined}
            defaultImg={staticImage}
            square={true}
          />
          <div>
            <UX.View at="sm">
              <Content
                containerClass="services__content"
                alignTitle="center"
                alignContent="center"
                {...{ title, description }}
              />
            </UX.View>
            <UX.View greaterThanOrEqual="lg">
              <Content
                containerClass="services__content"
                alignTitle="left"
                alignContent="left"
                {...{ title, description }}
              />
            </UX.View>
            <Link className="services__cta" to={route}>
              {cta || 'Learn More'}
            </Link>
          </div>
        </Block>
      );
    }
  );
  return (
    <>
      <UX.View at="sm">
        <Collection
          direction="vertical"
          containerClass="services"
          align={{ content: 'center' }}
          containerStyle={{ padding: 16 }}
          items={serviceItems}
        />
      </UX.View>
      <UX.View greaterThanOrEqual="lg">
        <Collection
          direction="horizontal"
          containerClass="services"
          align={{ content: 'center', horizontal: 'center' }}
          containerStyle={{ padding: 64, margin: '0 3rem' }}
          items={serviceItems}
        />
      </UX.View>
    </>
  );
};

export default Services;
