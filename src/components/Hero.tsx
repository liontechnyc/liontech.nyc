import React from 'react';
import { Block } from '@liontechnyc/gemini';

export interface HeroProps {
  header?: string;
  cta?: string;
  action?: string;
  redirect?: string;
}

const Hero = ({ header, cta, action, redirect }: HeroProps) => {
  return (
    <Block className="hero" fluid={true}>
      <div className="hero__content">
        <h1 className="hero__content--header">{header}</h1>
        <p className="hero__content--cta">{cta}</p>
        <a className="btn" href={redirect || '#'}>
          {action}
        </a>
      </div>
    </Block>
  );
};

export default Hero;
