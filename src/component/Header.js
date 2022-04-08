import React from 'react';
import styled from 'styled-components'  // Css inside of JavaScript 


export default function Header() {
  return (
    <NavBar>
      <NavItem>About Me</NavItem>
      <NavItem>Current Projects</NavItem>
      <NavItem>Retired projects</NavItem>
      <NavItem>Contact inforatmion</NavItem>
    </NavBar>

    
  )
}

const NavBar = styled.div`
  background-color: grey;
  color: white;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    color: black;
    
  };
  justify-content: flex-end;
`;


