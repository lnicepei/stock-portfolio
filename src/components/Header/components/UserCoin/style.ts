import styled from "styled-components";
import { Button, Card } from "../../../../App/style";

export const StyledUserCoin = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
`;

export const StyledPrice = styled.p`
  margin-right: auto;
  text-decoration: underline;
  cursor: pointer;
`;

export const StyledQuantity = styled.p`
  display: flex;
  align-items: center;
`;

export const StyledDeleteButton = styled(Button)`
  padding: 5px;
  margin: 5px 0;
`;
