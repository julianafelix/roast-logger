import React from "react";
import styled from "styled-components";
import showcase from "../images/showcase.jpg";

const Showcase = styled.header`
  color: #fff;
  background: var(--dark-color);
  padding: 2rem;
  position: relative;
  z-index: 1;
  height: 40vh;

  &:before {
    content: "";
    background: url(${showcase}) no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
    z-index: -1;
  }
`;

const ShowcaseContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
`;

const ContentHeader = styled.h1`
  font-weight: 300;
  font-size: 3.3rem;
`;

const TextSecondary = styled.span`
  font-weight: 700;
  color: var(--secondary-color);
`;

const GetStartedBtn = styled.a`
  display: inline-block;
  border: none;
  background: var(--light-color);
  color: var(--dark-color);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s ease-in;
  margin-top: 1rem;
  &:hover {
    color: var(--light-color);
    background: var(--primary-color);
  }
`;

function Header() {
  return (
    <Showcase>
      <ShowcaseContainer>
        <Content>
          <ContentHeader>
            <TextSecondary>Visualize</TextSecondary> your roasts
          </ContentHeader>
          <GetStartedBtn href="/">Get Started</GetStartedBtn>
        </Content>
      </ShowcaseContainer>
    </Showcase>
  );
}

export default Header;
