import styled from "styled-components";

type StyledDifferenceProps = {
  difference: string;
};

type StyledPercentsProps = {
  percents: string;
};

export const StyledDifference = styled.li<StyledDifferenceProps>`
  color: ${(props) => (+props.difference < 0 ? "red" : "green")};
`;

export const StyledPercents = styled.li<StyledPercentsProps>`
  color: ${(props) => (+props.percents < 0 ? "red" : "green")};
`;

export const StyledUserStats = styled.ul`
  text-align: center;
  list-style: none;
`;
