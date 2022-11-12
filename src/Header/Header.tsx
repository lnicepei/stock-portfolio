import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../App/App.styles";
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
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  const topThreeCoinCards = props.listOfCoins
    .slice(0, 3)
    .map((coin) => (
      <HeaderCoin
        key={coin.id}
        rank={coin.rank}
        id={coin.id}
        symbol={coin.symbol}
        priceUsd={Number(coin.priceUsd).toFixed(2)}
      />
    ));

  return (
    <StyledHeader>
      <Card onClick={redirectHome}>Stokk</Card>
      <StyledCardHolder>{topThreeCoinCards}</StyledCardHolder>
      <UserCorner {...props} />
    </StyledHeader>
  );
};

export default Header;
