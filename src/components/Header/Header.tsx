import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderCoin from "./components/TopHeaderCoin/TopHeaderCoin";
import UserCorner from "./components/UserCorner/UserCorner";
import { StyledCardHolder, StyledHeader, StyledLogo } from "./style";

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
