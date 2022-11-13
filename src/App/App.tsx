import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import CoinPage from "../Main/CoinList/CoinPage/CoinPage";
import Main from "../Main/Main";
import "./App.css";

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
      buyPrice: 16705.1939777214815769,
    },
    {
      id: "tether",
      quantity: 0.1234231,
      buyPrice: 0.9995246329709383,
    },
    {
      id: "binance-coin",
      quantity: 0.1234231,
      buyPrice: 278.4492642845494104,
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
      Axios.get(`https://api.coincap.io/v2/assets?limit=${limit}`)
        .then((response) => {
          setListOfCoins(response.data.data);
          setFetching(false);
        })
        .finally(() => setFetching(false));
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
      document.documentElement.scrollHeight - 100
    ) {
      setFetching(true);
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  return (
    <div className="App">
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
              element={<CoinPage listOfCoins={listOfCoins} buy={buy} />}
            />
          </Routes>
        </BuyContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
