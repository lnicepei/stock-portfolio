import { StyledDifference, StyledPercents, StyledUserStats } from "./style";

type Props = {
  currentMoney: number;
  difference: string;
  percents: string;
};

const UserStats: React.FC<Props> = ({ currentMoney, difference, percents }) => {
  return (
    <StyledUserStats>
      <li>{Number(currentMoney).toFixed(2)}$</li>
      <StyledDifference difference={difference}>
        {+difference > 0 && "+"}
        {difference}$
      </StyledDifference>
      <StyledPercents percents={percents}>{percents}%</StyledPercents>
    </StyledUserStats>
  );
};

export default UserStats;
