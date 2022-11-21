import styled from "styled-components";
import { Button } from "../../App/style";

export const BlurBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5eb2f739;
  backdrop-filter: blur(10px);
  padding: 5vw;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const StyledBuyMenu = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  z-index: 3;
`;

export const StyledBuyText = styled.h1`
  color: white;
  margin-top: 0;
`;

export const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  box-sizing: content-box;
  padding: 10px;
  cursor: pointer;
  color: white;
`;

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
`;

export const StyledBuyButton = styled(Button)`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0;
`;
