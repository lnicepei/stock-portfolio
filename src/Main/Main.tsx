import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BuyMenu from "./CoinList/BuyMenu/BuyMenu";
import Coin from "./CoinList/Coin/Coin";
import CoinPage from "./CoinList/CoinPage/CoinPage";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Main = ({
  currentCoin,
  setCurrentCoin,
  listOfCoins,
  setUserPortfolio,
}) => {
  const buyMenuRef = useRef(null);
  const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false);
  const navigate = useNavigate();

  const buy = () => {
    setIsBuyMenuOpen(false);
    setUserPortfolio((prevUserPortfolio) => {
      if (
        prevUserPortfolio.some(
          (coin) => coin.name === currentCoin.name.toLowerCase()
        )
      ) {
        return prevUserPortfolio.map((coin) => {
          if (coin.name === currentCoin.name.toLowerCase()) {
            return {
              ...coin,
              quantity: +coin.quantity + +currentCoin.quantity,
            };
          }
          return coin;
        });
      }

      return prevUserPortfolio.concat({
        name: currentCoin.name.toLowerCase(),
        quantity: +currentCoin.quantity,
        buyPrice: +listOfCoins.find((coin) => coin.name === currentCoin.name)
          .priceUsd,
      });
    });
  };

  const handleBuyMenuOpen = (e, coin) => {
    e.stopPropagation();
    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        name: coin.name,
      };
    });
    setIsBuyMenuOpen(true);
  };

  const handleCoinMenuOpen = (e, coin) => {
    if (buyMenuRef.current && !buyMenuRef.current.contains(e.target)) {
      setIsBuyMenuOpen(false);
    } else {
      navigate(coin.id);
    }
  };

  return (
    <StyledMain>
      {isBuyMenuOpen && (
        <BuyMenu
          innerRef={buyMenuRef}
          buy={buy}
          currentCoin={currentCoin}
          setCurrentCoin={setCurrentCoin}
          setIsBuyMenuOpen={setIsBuyMenuOpen}
        />
      )}
      {listOfCoins.map((coin) => {
        return (
          <Coin
            key={coin.name}
            coin={coin}
            handleBuyMenuOpen={(e) => handleBuyMenuOpen(e, coin)}
            handleCoinMenuOpen={(e) => handleCoinMenuOpen(e, coin)}
          />
        );
      })}
    </StyledMain>
  );
};

export default Main;
