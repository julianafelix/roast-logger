import React from "react";
import styled from "styled-components";

const UtilityContainer = styled.div`
  max-width: var(--max-width);
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

function Container() {
  return <UtilityContainer></UtilityContainer>;
}

export default Container;
