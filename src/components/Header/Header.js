import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>SALHA SAID</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/SALHASAID">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/salha-s-468759209/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://medium.com/@SALHASAID">
          <AiFillMediumSquare size="3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;