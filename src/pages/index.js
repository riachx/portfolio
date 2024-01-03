import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact, Gallery } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
const Back = styled.section`
  background-image: url('https://i.imgur.com/XU1AQCX.jpg'); /* Your image URL */
  background-repeat: repeat-y;
  max-width:none;
  background-color: var(--navy);
  background-size: 2000px 7000px;


`;

const IndexPage = ({ location }) => (
  <Back>
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Gallery/>
      <Contact />
    </StyledMainContainer>
  </Layout>
  </Back>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
