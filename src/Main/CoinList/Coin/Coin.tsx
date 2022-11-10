import React from "react";
import styled from "styled-components";

const StyledCoin = styled.div`
  background-color: red;
  height: 50px;
`;

const Coin = ({ setUserPortfolio, rank, name, price, symbol }) => {
  const buy = () => {
    setUserPortfolio((prevUserPortfolio) => {
      if (prevUserPortfolio.some((coin) => coin.name === name.toLowerCase())) {
        return prevUserPortfolio.map((coin) => {
          if (coin.name === name.toLowerCase()) {
            return {
              ...coin,
              quantity: coin.quantity + 1,
            };
          }
          return coin;
        });
      }

      return prevUserPortfolio.concat({
        name: name.toLowerCase(),
        quantity: 1,
        buyPrice: +price,
      });
    });
  };

  return (
    <StyledCoin>
      <button onClick={buy}></button>
      {rank}, {name}, {price}, {symbol}
    </StyledCoin>
  );
};

export default Coin;
