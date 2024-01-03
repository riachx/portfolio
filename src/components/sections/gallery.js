import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Link } from 'gatsby';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
`;

const ImageContainer = styled.div`
  position: relative;

  border-radius:10px;
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s, filter 0.5s;
    display: flex;
    border-radius:10px;
  }

  .overlay {
    background-color: var(--green); /* Green overlay color */
    opacity: 0;
    border-radius:10px;
    mix-blend-mode: multiply;
    transition: opacity 0.5s, filter 0.5s;

  }

  &:hover {
    img {
      transform: scale(1.1); /* Optional: Increase size on hover */
      
      filter: grayscale(100%) contrast(1) brightness(70%);
      transition: transform 0.5s;
    }

    .overlay {
      background-color: var(--green); /* Green overlay color */
      opacity: 1;
      transform: scale(1.1); /* Optional: Increase size on hover */
      transition: transform 0.5s;
    
    }

    .hover-text {
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.5s;
  
  
`;

const HoverText = styled.div`
  position: absolute;
  transform: translate(10px, -125px);
  color: white;
  font-size: 150%;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s;

  @media screen and (max-width: 570px) {
    font-size:125%;
  }

  @media screen and (max-width: 500px) {
    transform: translate(0px, -100px);
    font-size:100%;
  }
`;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .gallery-body{
    padding-bottom:40px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;
const BlackBackground = styled.div`
  background-color: black; /* Set the background color to black */
  height: 100vh; /* Ensure it covers the full viewport height */
`;
const Gallery = () => {


const images = [
        {
          path: 'https://i.imgur.com/Ds5lJ6E.png',
          hoverText: '520 WEST 28TH ST >',
        },
        {
          path: 'https://i.imgur.com/VxIkekU.png',
          hoverText: 'ARCHITECTURE >',
        },
        {
          path: 'https://i.imgur.com/TVcIMwN.png',
          hoverText: 'MISCEALLENOUS >',
        },
        {
          path: 'https://i.imgur.com/pNwuCMO.png',
          hoverText: 'OBJECTS >',
        },
      ];
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="gallery" ref={revealContainer}>
      <h2 className="numbered-heading overline">3D Gallery</h2>

      <h2 className="title">A Visual 3D Gallery</h2>

      <p className="gallery-body">
       Check out some of the 3D projects I've amassed over the past 8 years! 
      </p>
        
      <ImageGrid>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <a href ={`/gallery1/#section${index + 1}`}>
            <img src={image.path} alt={`Image ${index + 1}`} />
            <Overlay className="overlay" />
            <HoverText className="hover-text">{image.hoverText}</HoverText>
          </a>
        </ImageContainer>
      ))}
    </ImageGrid>

    </StyledContactSection>
  );
};

export default Gallery;
