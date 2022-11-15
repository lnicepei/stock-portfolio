import styled from "styled-components";
import { StyledUserStats } from "./style";

type Props = {
  currentMoney: number;
  difference: string;
  percents: string;
};

const UserStats: React.FC<Props> = ({ currentMoney, difference, percents }) => {
  const StyledP = styled.li`
    color: ${+difference < 0 ? "red" : "green"};
  `;

  return (
    <StyledUserStats>
      <li>{Number(currentMoney).toFixed(2)}$</li>
      <StyledP>
        {+difference > 0 && "+"}
        {difference}$
      </StyledP>
      <StyledP>{percents}%</StyledP>
    </StyledUserStats>
  );
};

export default UserStats;