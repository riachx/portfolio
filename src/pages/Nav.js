import React from 'react';
import styled from 'styled-components';
import '../styles/GlobalStyle'; // Assuming this import has a purpose

const Navbar = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #0a192f;
  padding: 40px 30px;
  margin: 0;
  height: 20px;
  border-bottom: solid 1px #64ffda;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* Add other styles as needed */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px; /* Added 'px' units */
  margin: 0;
`;

const NavItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #64ffda;
  font-size: 20px;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

  &:hover {
    text-decoration: underline;
  }

  

`;

const Nav = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink href="/#gallery">&lt; Go Back</NavLink>
          </NavItem>
          {/* Add more navbar links as needed */}
        </NavList>
      </Navbar>
    </div>
  );
};

export default Nav; 
