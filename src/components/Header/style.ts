import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  height: 10vh;
  top: 0;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  background-color: #030303;
  z-index: 2;
`;

export const StyledCardHolder = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
  height: auto;
`;

export const StyledLogo = styled.h1`
  cursor: pointer;
  user-select: none;
`;
