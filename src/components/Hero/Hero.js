import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi 👋 <br />
          I'm Lakshay Gupta
        </SectionTitle>
        <SectionText>
        I develope games and web applications.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;