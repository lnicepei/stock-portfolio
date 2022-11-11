import styled from "styled-components";

const StyledCoin = styled.div`
  background-color: white;
  height: 50px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

const Coin = ({ coin, handleBuyMenuOpen, handleCoinMenuOpen }) => {
  return (
    <StyledCoin onClick={handleCoinMenuOpen}>
      <button onClick={handleBuyMenuOpen}>Buy</button>
      {coin.rank}, {coin.name}, {coin.price}, {coin.symbol}
    </StyledCoin>
  );
};

export default Coin;
