import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';

import { useLocation } from '@reach/router';
import '../styles/GlobalStyle';
import Nav from './Nav';


const PageContainer = styled.div`
  
`;

// CSS for the hover effect
const GalleryContainer = styled.div`
  background-color: #0a192f;
  width:100%;

  .react-photo-gallery--gallery img {
    filter: brightness(80%);
    transition: filter 0.5s;
  }

  .react-photo-gallery--gallery img:hover {
    filter: brightness(110%);
  }
  
`;


const HeaderContainer = styled.div`
  display:flex;
  background-color: #0a192f;
  width:100%;
  height:250px;
  transform:scale(1.09);
  
  h1{
    margin-top:80px;
    width:100%;
    color: #64ffda;
    font-weight:500;
    padding: 50px;
    margin-left: 20px;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
    sans-serif;
  }
  h2{
    margin-top:80px;
    width:100%;
    color: #64ffda;
    font-weight:normal;
    padding: 50px;
    margin-left: 20px;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
    sans-serif;
  }

 
`;

const HeaderContainerSmaller = styled.div`
  display:flex;
  background-color: #0a192f;
  width:100%;
  height:200px;
  transform:scale(1.09);
  
  border-top: solid 1px #64ffda;
  
  h1{
    margin-top:20px;
    width:100%;
    color: #64ffda;
    font-weight:500;
    padding: 50px;
    margin-left: 20px;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
    sans-serif;
    
  }

  @media (max-width: 600px){
    h1{
      padding: 30px;
      margin-left: 10px;
    }
  }
`;

const photos1 = [
  {
    src: 'https://i.imgur.com/8Sx5seJ.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/FHLVQO9.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/3iQlrrH.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/rRA0SaJ.png',
    width: 6,
    height: 5,
  },
  
  {
    src: 'https://i.imgur.com/koMwuUi.png',
    width: 1,
    height: 1,
  },
  {
    src: 'https://i.imgur.com/j6e7gWu.jpg',
    width: 1,
    height: 1,
  },
];



const photos2 = [
  {
    src: 'https://i.imgur.com/X8EkFwU.jpg',
    width: 6,
    height: 4,
  },
  {
    src: 'https://i.imgur.com/lHhriKR.png',
    width: 6,
    height: 4,
  },
 



];

const photos3 = [
  {
    src: 'https://i.imgur.com/REfZIK5.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/ckVxv27.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/Zoj4xP8.png',
    width: 6,
    height: 5,
  },
  
  {
    src: 'https://i.imgur.com/eP6WvJr.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/EdduM2g.png',
    width: 4,
    height: 3,
  },
  {
    src: 'https://i.imgur.com/iN0iysy.png',
    width: 5,
    height: 8.5,
  },
  {
    src: 'https://i.imgur.com/eGyBofE.png',
    width: 1,
    height: 1,
  },

];

const photos4 = [
  {
    src: 'https://i.imgur.com/pNwuCMO.png',
    width: 1,
    height: 1,
  },
  {
    src: 'https://i.imgur.com/G13TIvf.png',
    width: 1,
    height: 1,
  },
  {
    src: 'https://i.imgur.com/dMTB3Ty.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/QXugsWX.png',
    width: 6,
    height: 5,
  },
  {
    src: ' https://i.imgur.com/7d8feso.png',
    width: 7,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/e2GavmR.png',
    width: 7,
    height: 5,
  },
  
  {
    src: ' https://i.imgur.com/kOPLaGx.png',
    width: 7,
    height: 4,
  },
  {
    src: 'https://i.imgur.com/1aO4vvd.jpg',
    width: 7,
    height: 4,
  },
  {
    src: ' https://i.imgur.com/S6wwAvI.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/FHfst46.png',
    width: 6,
    height: 5,
  },
  {
    src: ' https://i.imgur.com/A3l3a3z.png',
    width: 6,
    height: 5,
  },
  {
    src: 'https://i.imgur.com/CG3ueAU.png',
    width: 6,
    height: 5,
  },
];
const Section1 = styled.div`
  // styles
`;
const Section2 = styled.div`
  // styles
`;

const photos5 = [
  {
    src: 'https://i.imgur.com/j4GyJdp.png',
    width: 6,
    height: 7,
  },
  {
    src: 'https://i.imgur.com/7fMnuyw.png',
    width: 6,
    height: 7,
  },
  {
    src: 'https://i.imgur.com/C5rieRz.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://i.imgur.com/OGkbSlJ.jpg',
    width: 1,
    height: 1,
  },
];

const Gallery1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  //const [isLoading, setIsLoading] = useState(true);
   //const location = useLocation();
   ///const isGallery = location.pathname === '/gallery1/#section1';
   //const [isLoading, setIsLoading] = useState(isGallery);
  // location

  const marginValue = -17;
  
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };
  

  useEffect(() => {
    const handleImageLoad = () => {
      const sectionId = window.location.hash.slice(1);
      const sectionRef = sectionRefs[sectionId];
      if (sectionRef.current) {
        setTimeout(() => {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adjust this delay as needed
      }
      setIsLoading(false);
    };

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1.5 seconds


    window.addEventListener('load', handleImageLoad);

    

    return () => {
      clearTimeout(delay);
      console.log("done");
      window.removeEventListener('load', handleImageLoad);
    };
  }, [sectionRefs]);

   


  return (
    
    <PageContainer>
    
      <Nav></Nav>
      <Section1 ref={sectionRefs.section1} id="section1">
      <HeaderContainer >
        <h1>📍 520 West 28th St, NYC</h1>
      </HeaderContainer>
      </Section1>
      <GalleryContainer>
        <Gallery photos={photos1} backgroundColor={"black"} margin={marginValue} direction="column" columns={2} />
      </GalleryContainer>

      <Section2 ref={sectionRefs.section2} id="section2">
      <HeaderContainerSmaller>
        <h1>| &nbsp;Architecture</h1>
      </HeaderContainerSmaller>
      </Section2>

      <GalleryContainer>
        <Gallery photos={photos2} backgroundColor={"black"} margin={marginValue} direction="column" columns={1} />
      </GalleryContainer>

      <GalleryContainer>
        <Gallery photos={photos3} backgroundColor={"black"} margin={marginValue} direction="column" columns={2} />
      </GalleryContainer>

      <HeaderContainerSmaller  ref={sectionRefs.section3} id="section3">
      
        <h1>| &nbsp;Object Studies</h1>
        <h2>View</h2>
      </HeaderContainerSmaller>

      <GalleryContainer >
        <Gallery photos={photos4} backgroundColor={"black"} margin={marginValue} direction="column" columns={2} />
      </GalleryContainer>

      <HeaderContainerSmaller ref={sectionRefs.section4} id="section4">
      
        <h1>| &nbsp; Misceallaneous</h1>
        <h2>View</h2>
      </HeaderContainerSmaller>

      <GalleryContainer>
        <Gallery photos={photos5} backgroundColor={"black"} margin={marginValue} direction="column" columns={2} />
      </GalleryContainer>
      
      </PageContainer>

  );
};


export default Gallery1;
