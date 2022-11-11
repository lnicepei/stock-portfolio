import styled from "styled-components";
import { Button, Card } from "../../../App/App.styles";

const StyledCoin = styled(Card)`
  padding: 20px;
  margin: 5px;
  justify-content: space-between;
`;

const Coin = ({ coin, handleBuyMenuOpen, handleCoinMenuOpen }) => {
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
