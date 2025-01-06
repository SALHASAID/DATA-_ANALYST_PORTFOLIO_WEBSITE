import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Data Analysis Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I’m Salha Said—a data analyst with 3+ years of turning messy numbers into meaningful stories. From collecting and cleaning data to visualizing it, I make sure the insights shine. Why do I love data?
          Because it’s like solving a puzzle—except the pieces talk back!!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;