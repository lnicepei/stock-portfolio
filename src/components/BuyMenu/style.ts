import styled from "styled-components";
import { Button } from "../../App/style";

export const StyledBuyMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  background-color: #5eb2f739;
  box-sizing: border-box;
  padding: 200px;
  backdrop-filter: blur(10px);
  background-clip: content-box, padding-box;
  z-index: 3;
`;

export const StyledBuyText = styled.h2`
  color: white;
`;

export const StyledCloseButton = styled(Button)`
  position: absolute;
  right: 200px;
  top: 220px;
  cursor: pointer;
`;
