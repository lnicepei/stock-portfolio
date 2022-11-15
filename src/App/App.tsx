import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchListOfCoins } from "../api";
import Header from "../components/Header/Header";
import CoinPage from "../pages/CoinPage/CoinPage";
import Main from "../pages/MainPage/MainPage";
import { StyledApp } from "./style";

interface BuyContext {
  currentCoin: UserCoin;
  setCurrentCoin: React.Dispatch<React.SetStateAction<UserCoin>>;
  isBuyMenuOpen: boolean;
  setIsBuyMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buy: () => void;
}

export const BuyContext = createContext<BuyContext>({} as BuyContext);

const App = () => {
  const [listOfCoins, setListOfCoins] = useState<APICoin[]>([]);
  const [limit, setLimit] = useState(30);
  const [fetching, setFetching] = useState(true);
  const [userPortfolio, setUserPortfolio] = useState<UserCoin[]>(() => [
    {
      id: "bitcoin",
      quantity: 0.14231,
      buyPrice: 16705.19397,
    },
    {
      id: "tether",
      quantity: 0.1234231,
      buyPrice: 0.9995,
    },
    {
      id: "binance-coin",
      quantity: 0.1234231,
      buyPrice: 278.44926,
    },
  ]);
  const [currentCoin, setCurrentCoin] = useState<UserCoin>({
    id: "",
    quantity: 0,
    buyPrice: 0,
  });
  const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false);

  const buy = () => {
    setIsBuyMenuOpen(false);
    setUserPortfolio((prevUserPortfolio: UserCoin[]) => {
      if (
        prevUserPortfolio.some((coin: UserCoin) => coin.id === currentCoin.id)
      ) {
        return prevUserPortfolio.map((coin: UserCoin) => {
          if (coin.id === currentCoin.id) {
            return {
              ...coin,
              quantity: +coin.quantity + +currentCoin.quantity,
            };
          }
          return coin;
        });
      }

      return prevUserPortfolio.concat({
        id: currentCoin.id,
        quantity: +currentCoin.quantity,
        buyPrice: +listOfCoins.filter((coin) => coin.id === currentCoin.id)[0]
          ?.priceUsd,
      });
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (fetching) {
      fetchListOfCoins(limit, setListOfCoins, setFetching);
    }
  }, [fetching]);

  const scrollHandler = () => {
    console.log(
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight
    );
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.scrollHeight - 150
    ) {
      setFetching(true);
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  return (
    <StyledApp>
      <BrowserRouter>
        <Header
          listOfCoins={listOfCoins}
          userPortfolio={userPortfolio}
          setUserPortfolio={setUserPortfolio}
        />
        <BuyContext.Provider
          value={{
            currentCoin,
            setCurrentCoin,
            isBuyMenuOpen,
            setIsBuyMenuOpen,
            buy,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  currentCoin={currentCoin}
                  setCurrentCoin={setCurrentCoin}
                  listOfCoins={listOfCoins}
                  setUserPortfolio={setUserPortfolio}
                />
              }
            />
            <Route
              path=":coinId"
              element={<CoinPage listOfCoins={listOfCoins} />}
            />
          </Routes>
        </BuyContext.Provider>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
