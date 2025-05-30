import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 20px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  ul.classes-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(140px, 700px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'C/C++', 'React', 'Three.js', 'Blender', 'Figma', 'Python', 'WebGL', 'Photoshop'];
  {/*const classes = ['CSE130: Principles of Computer Systems Design', 'CSE120: Computer Architecture', 'CSE101: Data Structures & Algorithms', 'CSE13S: Computer Systems and C Programming', 'CSE12: Computer Systems and Assembly Language', 'CSE30: Programming Abstrations'];
*/}
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">🎨 About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! My name is Ria and I enjoy anything development and design related. An initial interest in sculpting funky characters in Blender kickstarted 7+ years of 3D, Front-end, and UI/UX experience. 
            </p>
            
            <p>
            I've had the chance to intern as a Front-end Developer for Streetline Inc. and {' '}<a href="https://tech4good.soe.ucsc.edu/#/">Tech4Good</a>, 
            work as a Synthetic Data Engineer for {' '}<a href="https://www.motif.io">Motif</a>, create 3D websites like {' '}<a href="https://spcwby.com">Spcwby.com</a>, and work as a 3D modeler for a range of companies and startups, including <a href="https://www.virbela.com/">Virbela</a> and <a href="https://play.google.com/store/apps/details?id=com.augmio.App&hl=en_US&gl=US ">Augmio</a>.
            </p>
        <p>I'm currently finishing up my fourth-year as a Computer Science student at UC Santa Cruz.
            </p>
            <p>Some languages and tools I use include:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          {/*<p>Some of my coursework includes:</p>
          <ul className="classes-list">
            {classes && classes.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>*/}


        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
