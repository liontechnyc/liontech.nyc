import React from 'react';
import { Content, Collection, Image } from '@liontechnyc/gemini';

export interface GalleryProps {
  header: string;
  description: string;
  items: {
    image: string;
    href: string;
  }[];
  staticImages: ImageMapperType;
}

const Gallery = ({
  header,
  description,
  items,
  staticImages,
}: GalleryProps) => {
  const galleryItems = items.map(({ image, href }, id) => {
    const src = staticImages[image];
    return (
      <a key={id} target="_blank" {...{ href }}>
        <Image defaultImg={src} />
      </a>
    );
  });
  return (
    <div className="gallery">
      <Content
        title={header}
        description={description}
        containerClass="gallery__content"
        alignTitle="center"
        alignContent="center"
      />
      <Collection
        direction="vertical"
        fluid={true}
        containerClass="gallery__items"
        items={galleryItems}
      />
    </div>
  );
};

export default Gallery;
