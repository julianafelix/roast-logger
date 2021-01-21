import React from "react";
import styled from "styled-components";

const MainNav = styled.nav`
  background: var(--dark-color);
  color: var(--light-color);
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 1rem;
  align-items: center;
  max-width: 1300px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;

const NavLinks = styled.ul`
  justify-self: end;
  display: flex;
`;

const NavLink = styled.li`
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    color: var(--secondary-color);
  }
`;

const PrimaryText = styled.span`
  color: var(--primary-color);
`;

function NavBar() {
  return (
    <MainNav>
      <NavContainer>
        <Title>
          <PrimaryText>Roast</PrimaryText> Logger
        </Title>
        <NavLinks>
          <NavLink>Import Data</NavLink>
          <NavLink>Sign In</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>About</NavLink>
        </NavLinks>
      </NavContainer>
    </MainNav>
  );
}

export default NavBar;
