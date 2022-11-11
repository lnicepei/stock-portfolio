import React from "react";
import styled from "styled-components";
import HeaderCoin from "./HeaderCoin/HeaderCoin";
import UserCorner from "./UserCorner/UserCorner";

const StyledHeader = styled.header`
  display: flex;
`;

const StyledCardHolder = styled.div`
  display: flex;
`;

const Header = ({ listOfCoins, userPortfolio, setUserPortfolio }) => {
  const topThreeCoinCards = listOfCoins
    .slice(0, 3)
    .map((coin) => (
      <HeaderCoin
        key={coin.name}
        rank={coin.rank}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.priceUsd.substring(0, 7)}
      />
    ));

  return (
    <StyledHeader>
      <StyledCardHolder>{topThreeCoinCards}</StyledCardHolder>
      <UserCorner
        listOfCoins={listOfCoins}
        userPortfolio={userPortfolio}
        setUserPortfolio={setUserPortfolio}
      />
    </StyledHeader>
  );
};

export default Header;