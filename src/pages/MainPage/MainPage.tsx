import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BuyContext } from "../../App/App";
import BuyMenu from "../../components/BuyMenu/BuyMenu";
import Coin from "../../components/Coin/Coin";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

type Props = {
  currentCoin: UserCoin;
  setCurrentCoin: React.Dispatch<React.SetStateAction<UserCoin>>;
  listOfCoins: APICoin[];
  setUserPortfolio: React.Dispatch<React.SetStateAction<UserCoin[]>>;
};

const Main: React.FC<Props> = ({ listOfCoins }) => {
  const buyMenuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { setCurrentCoin, isBuyMenuOpen, setIsBuyMenuOpen } =
    useContext(BuyContext);

  const handleBuyMenuOpen = (e: React.SyntheticEvent, coin: APICoin) => {
    e.stopPropagation();
    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        id: coin.id,
      };
    });
    setIsBuyMenuOpen(true);
  };

  const handleCoinMenuOpen = (
    e: React.BaseSyntheticEvent<Event, EventTarget & Element, EventTarget>,
    coin: APICoin
  ) => {
    if (
      buyMenuRef.current &&
      !buyMenuRef.current.contains(e.target as HTMLDivElement)
    ) {
      setIsBuyMenuOpen(false);
    } else {
      navigate(coin.id);
    }
  };

  return (
    <StyledMain>
      {isBuyMenuOpen && <BuyMenu />}
      {listOfCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            coin={coin}
            handleBuyMenuOpen={(e: React.SyntheticEvent) =>
              handleBuyMenuOpen(e, coin)
            }
            handleCoinMenuOpen={(e: React.SyntheticEvent) =>
              handleCoinMenuOpen(e, coin)
            }
          />
        );
      })}
    </StyledMain>
  );
};

export default Main;
