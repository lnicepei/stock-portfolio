import styled from "styled-components";

const StyledUserStats = styled.ul`
  text-align: center;
  list-style: none;
`;

type Props = {
  currentMoney: string;
  difference: number;
  percents: number;
};

const UserStats: React.FC<Props> = ({ currentMoney, difference, percents }) => {
  const StyledP = styled.li`
    color: ${difference < 0 ? "red" : "green"};
  `;

  return (
    <StyledUserStats>
      <li>{Number(currentMoney).toFixed(2)}$</li>
      <StyledP>
        {difference > 0 && "+"}
        {difference}$
      </StyledP>
      <StyledP>{percents}%</StyledP>
    </StyledUserStats>
  );
};

export default UserStats;
