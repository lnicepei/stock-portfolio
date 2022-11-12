import styled from "styled-components";
import { Button, Card } from "../../../App/App.styles";

const StyledCoin = styled(Card)`
  padding: 20px;
  margin: 5px;
  justify-content: space-between;
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
    <StyledCoin onClick={handleCoinMenuOpen}>
      <div>
        {coin.rank}, {coin.id}, {coin.priceUsd}
      </div>
      <Button onClick={handleBuyMenuOpen}>Buy</Button>
    </StyledCoin>
  );
};

export default Coin;
