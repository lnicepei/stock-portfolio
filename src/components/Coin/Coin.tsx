import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Card } from "../../App/App.styles";

const StyledCoin = styled(Card)`
  padding: 20px;
  margin: 5px;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

type Props = {
  coin: APICoin;
  handleBuyMenuOpen: (e: React.SyntheticEvent) => void;
  handleCoinMenuOpen: (e: React.SyntheticEvent) => void;
};

const Coin: React.FC<Props> = ({
  coin,
  handleBuyMenuOpen,
  handleCoinMenuOpen,
}) => {
  return (
    <StyledCoin>
      <div>
        {coin.rank}.{" "}
        <StyledLink onClick={handleCoinMenuOpen}>{coin.name}</StyledLink>
      </div>
      <div>
        {Number(coin.priceUsd).toFixed(2)}$
        <Button onClick={handleBuyMenuOpen}>Buy</Button>
      </div>
    </StyledCoin>
  );
};

export default Coin;
