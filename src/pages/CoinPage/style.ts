import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { Button } from "../../App/style";

export const StyledCoinPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 80vh;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledBuyButton = styled(Button)`
  /* flex: 1 2; */
  width: 75%;
  box-sizing: border-box;
  padding: 20px;
`;

export const StyledH2 = styled.h2`
  color: white;
  text-transform: capitalize;
`;

export const StyledBounceLoader = styled(BounceLoader)`
  position: relative;
  margin: 0 auto;
  top: 25%;
`;

export const TopSection = styled.section`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TopRightSection = styled.section`
  flex: 2 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
