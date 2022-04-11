import React from 'react';
import styled from 'styled-components'  // Css inside of JavaScript 
import { GiHolyOak } from 'react-icons/gi'


export default function Header() {
  return (
    <NavBar>
      <NavItem>About Me</NavItem>
      <NavItem>Current Projects</NavItem>
      <NavItem>Retired projects</NavItem>
      <NavItem>Contact inforatmion
      <GiHolyOak/>
      </NavItem>
    </NavBar>

    
  )
}

const NavBar = styled.div`
  background-color: grey;
  color: white;
  position: fixed;
  width: 100%;

  justify-content: flex-end;
`;

const NavItem = styled.a`
display: flex;
flex-direction: row-reverse;
justify-content; space-around;
align-items: end;
padding-left: 10px;
padding-right: 10px;



  
  &:hover {
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);

    
  };
  
 
  
`;


