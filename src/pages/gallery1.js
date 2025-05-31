import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import { zahaIRL, zaha, architecture, architecture2, misc, objects} from '../images/galleryData';


const PillsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 0px 0px;
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
  cursor: pointer;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  :root {
    --navy: #0a192f;
    --green: #64ffda;
    --fz-xs: 13px;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const PageContainer = styled.div`
  background-color: #0a192f;
  min-height: 100vh;
`;

const Section1 = styled.div`
`;

const Section2 = styled.div`
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a192f;
  padding:50px;
  border-top:solid 1px #64ffda;
  border-bottom:solid 1px #64ffda;
  
  h1 {
    width: 100%;
    color: var(--green);
    font-weight: 500;
    font-size: 40px;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  }

  p {
    width: 100%;
    color:rgba(222, 222, 222, 0.77);
    font-weight: 300;
    line-height: 25px;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  }
    a{
    color:rgba(92, 149, 255, 0.77);
    }
`;


const GalleryContainer = styled.div`
  background-color: #0a192f;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const GalleryContainerFour = styled.div`
  background-color: #0a192f;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;


const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
    transition: filter 0.5s;
    
    &:hover {
      filter: brightness(110%);
    }
  }
`;

const TourContainer = styled.div`
  width: 100%;
  padding: 50px 50px;
  background-color: #0a192f;
  box-sizing: border-box;
  overflow: hidden;

  iframe {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 15, 17, 0.84);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.visible {
    transform: scale(1);
    opacity: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--green);
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, color 0.2s ease-in-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    color: white;
  }
`;

const Gallery1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const sectionRefs = {
    zaha: useRef(null),
    architecture: useRef(null),
    architecture2: useRef(null),
    misc: useRef(null),
    objects: useRef(null),
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    // Wait for the fade out animation to complete before removing the image
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  React.useEffect(() => {
    // Function to handle scrolling to a section
    const scrollToSection = (hash) => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'instant'
        });
      }
    };

    // Wait for images to load before scrolling
    const handleInitialLoad = () => {
      const images = document.querySelectorAll('img');
      let loadedImages = 0;
      const totalImages = images.length;

      const checkAllImagesLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          // All images loaded, now we can scroll
          if (window.location.hash) {
            scrollToSection(window.location.hash);
          }
        }
      };

      images.forEach(img => {
        if (img.complete) {
          checkAllImagesLoaded();
        } else {
          img.addEventListener('load', checkAllImagesLoaded);
          img.addEventListener('error', checkAllImagesLoaded); // Handle failed loads
        }
      });

      // If no images, scroll immediately
      if (totalImages === 0 && window.location.hash) {
        scrollToSection(window.location.hash);
      }
    };

    // Handle hash changes after initial load
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToSection(window.location.hash);
      }
    };

    // Start the process
    handleInitialLoad();

    // Add hash change listener for subsequent navigation
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Nav />
        
        {selectedImage && (
          <Modal onClick={handleCloseModal} className={isModalVisible ? 'visible' : ''}>
            <CloseButton onClick={handleCloseModal} className={isModalVisible ? 'visible' : ''}>&times;</CloseButton>
            <ModalImage 
              src={selectedImage} 
              alt="Enlarged view" 
              onClick={(e) => e.stopPropagation()} 
              className={isModalVisible ? 'visible' : ''}
            />
          </Modal>
        )}

        <Section1 ref={sectionRefs.zaha} id="zaha">
          <HeaderContainer>
            <h1>Recreation of Zaha Hadid's NYC Building</h1>
            <p> When I was 14 years old, I visited New York City for the first time. During my walk on the High Line, I discovered
              one of my favorite buildings in the world - Zaha Hadid's 520 West 28th. With sweeping facades and striking shapes, the building seemed to ripple with movement even while standing still.
              
              </p>
            <p>
              
            At the time, I'd just upgraded from designing my dream mansion in The Sims to purchasing my 
            first license for 3ds Max. Inspired by Hadid's masterpiece, I set myself a challenge: to recreate 
            the building in 3D.
             For two months I carefully modeling every curve and corner of the building via reference photos in my camera roll.
            The finished model totaled to over one billion polygons and nearly fried my computer (unfortunately at the time I didn't understand what the 
            Optimizer Modifier was 😣). 

            With this model I rendered 3D walkthroughs in virtual reality in which anyone could easily tour 
            the building with access to YouTube or a headset. 

            </p>
            <p>
              Not only did I learn a great deal of technical skills throughout this project, but also how architecture 
              can be both deeply imaginative and functional - a balance I aim for in all facets of my design and development work.
            </p>
            
            <PillsContainer>
            <Pill>3ds Max</Pill>
            <Pill>Adobe Photoshop</Pill>
            <Pill>V-Ray</Pill>
          </PillsContainer>
          </HeaderContainer>
          
        </Section1>

        <GalleryContainerFour>
          {zahaIRL.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainerFour>


        <GalleryContainer>
          {zaha.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainer>

        <TourContainer>
          <iframe
            id="tour-embeded"
            name="Zaha Hadid Tour"
            src="https://tour.panoee.net/iframe/zaha-hadid-tour"
            width="100%"
            height="400px"
            allowFullScreen="false"
            webkitallowfullscreen="false"
            mozallowfullscreen="false"
            loading="eager"
          />
        </TourContainer>
        

        <Section2 ref={sectionRefs.architecture} id="architecture">
          <HeaderContainer>
            <h1>Architecture Models and Renders</h1>

            <p> 
              A compilation of various architectural renders over the past 8 years.
              </p>
              <p> 
              Through years of experimentation, I've developed an intuitive understanding of what makes a render feel real.
              It's not just about technical settings – it's also about composing the flow of a space, curating the layout, capturing the way 
              fog dances through light, and including the subtle imperfections that reveal a space's lived history.
              </p>
              <p> 
              Each project is designed with custom high-poly 3D models, lighting design, camera work,
              high-fidelity render settings (denoising, ray tracing, global illumination), color grading, and detailed UV mapping and texturing 
              using Adobe Substance.
              </p>
            
            
            <PillsContainer>
            <Pill>3ds Max</Pill>
            <Pill>Blender</Pill>
            <Pill>Adobe Substance</Pill>
            <Pill>Adobe Photoshop</Pill>
            <Pill>V-Ray</Pill>
            <Pill>Cinema4D</Pill>
            </PillsContainer>


          </HeaderContainer>
        </Section2>
        <GalleryContainer>
          {architecture.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainer>

        <GalleryContainer>
          {architecture2.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainer>


        <Section2 ref={sectionRefs.objects} id="objects">
          <HeaderContainer>
            <h1>Object Models</h1>

            <p> 
              A mix of models for friends, <a href="https://www.sketchfab.com/riach" target="_blank" rel="noopener noreferrer">Sketchfab</a>, and a sunglass company.
              </p>
            
            
            <PillsContainer>
            <Pill>3ds Max</Pill>
            <Pill>Blender</Pill>
            <Pill>Adobe Substance</Pill>
            <Pill>Adobe Photoshop</Pill>
            <Pill>V-Ray</Pill>
            <Pill>Cinema4D</Pill>
            </PillsContainer>

          </HeaderContainer>
        </Section2>
        <GalleryContainer>
          {objects.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainer>




        <Section2 ref={sectionRefs.misc} id="misc">
          <HeaderContainer>
            <h1>Miscealleanous Models</h1>

            <p> 
              A mix of models for friends, art contests, <a href="https://www.sketchfab.com/riach" target="_blank" rel="noopener noreferrer">Sketchfab</a>, and from my time at the AR startup Augmio.
              </p>
            
            
            <PillsContainer>
            <Pill>3ds Max</Pill>
            <Pill>Blender</Pill>
            <Pill>Adobe Substance</Pill>
            <Pill>Adobe Photoshop</Pill>
            <Pill>V-Ray</Pill>
            <Pill>Cinema4D</Pill>
            </PillsContainer>

          </HeaderContainer>
        </Section2>
        <GalleryContainer>
          {misc.map((photo, index) => (
            <ImageWrapper key={index} onClick={() => handleImageClick(photo.src)}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </GalleryContainer>



        
      </PageContainer>
    </>
  );
};

export default Gallery1;