import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderCoin from "./components/TopHeaderCoin/TopHeaderCoin";
import UserCorner from "./components/UserCorner/UserCorner";

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  height: 10vh;
  top: 0;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  background-color: #030303;
  z-index: 2;
`;

const StyledCardHolder = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
  height: auto;
`;

const StyledLogo = styled.h1`
  cursor: pointer;
  user-select: none;
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
        symbol={coin.symbol}
        priceUsd={Number(coin.priceUsd).toFixed(2)}
      />
    ));

  return (
    <StyledHeader>
      <StyledLogo onClick={redirectHome}>Stokk</StyledLogo>
      <StyledCardHolder>{topThreeCoinCards}</StyledCardHolder>
      <UserCorner {...props} />
    </StyledHeader>
  );
};

export default Header;
