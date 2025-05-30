import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

import Typewriter from "typewriter-effect";


// delete justify-content if no image 
// justify-content: normal;
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  padding-bottom: 150px;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
}
`;

const PillsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Pill = styled.div`
  background-color: var(--navy);
  color: var(--green);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  border: 0.8px solid var(--green);
  transition: var(--transition);

`;

const Hero = () => {
  
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  const colors = ['#df5367', '#e63ba3', '#ffa44a', '#4dd0e3']; // Array of colors

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Ria Chockalingam.</h2>;
  const three =  <h3 className="medium-heading">
  <span style={{ display: 'inline-block'}}>I'm a&nbsp;</span>
  <span className="typewriter-container" style={{ display: 'inline-block' }}>
    <Typewriter
      options={{
        strings: [
          '<span style="color: ' + colors[0] + '">front-end developer.</span>',
          '<span style="color: ' + colors[1] + '">UI/UX designer.</span>',
          '<span style="color: ' + colors[2] + '">web developer.</span>',
          '<span style="color: ' + colors[3] + '">3D designer.</span>',
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        wrapperClassName: 'typewriter-wrapper',
      }}
    />
  </span>
</h3> 
  const four = (
    <>
      <p>
       I build at the intersection of code and design - developing interfaces that look as good as they function.
        
        Graduating from UC Santa Cruz with a Computer Science B.S. in June 2025 🌱 💻
      </p>
      
    </>
  );
  const five = (
    <PillsContainer>
      <Pill>Front-end</Pill>
      <Pill>UI/UX</Pill>
      <Pill>3D Design</Pill>
    </PillsContainer>
  );
  

  const six = (
    <a
      className="email-link"
      href="/#contact"
      rel="noreferrer">
      Let's connect!
    </a>
  );

  const items = [one, two, three, four, five, six];

  return (
    
    <StyledHeroSection>
      
  {/*<div className="gradient-container">
      {/* Your gradient container content 
      <div className="gradient-color"></div>
      <div className="gradient-color"></div>
      <div className="gradient-color"></div>
      <div className="gradient-color"></div>
      <div className="gradient-color"></div>
      <div className="gradient-backdrop"></div>
    </div>*/}
      

      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}> 
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
     
    </StyledHeroSection>
    
  );
};

export default Hero;
