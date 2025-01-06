import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { BsFiletypeSql } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Data Analysis world.
      From Cleaning, Analyzing then Visualize.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <BsFiletypeSql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SQL</ListTitle>
          <ListParagraph>
            Experiece with <br />
            SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <VscGraph size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>PowerBI</ListTitle>
          <ListParagraph>
            Experience with <br />
            visualization tools like PowerBI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pandas for data Analysis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <RiFileExcel2Fill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Excel</ListTitle>
          <ListParagraph>
            Experience with <br />
            Excel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;