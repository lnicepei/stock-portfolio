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

export type HeaderProps = {
  listOfCoins: APICoin[];
  userPortfolio: UserCoin[];
  setUserPortfolio: React.Dispatch<React.SetStateAction<UserCoin[]>>;
};

const Header = (props: HeaderProps) => {
  const topThreeCoinCards = props.listOfCoins
    .slice(0, 3)
    .map((coin) => (
      <HeaderCoin
        key={coin.id}
        rank={coin.rank}
        id={coin.id}
        symbol={coin.symbol}
        priceUsd={coin.priceUsd.substring(0, 7)}
      />
    ));

  return (
    <StyledHeader>
      <StyledCardHolder>{topThreeCoinCards}</StyledCardHolder>
      <UserCorner {...props} />
    </StyledHeader>
  );
};

export default Header;
