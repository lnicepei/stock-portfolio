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
  const [limit, setLimit] = useState(30);
  const [fetching, setFetching] = useState(true);
  const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false);
  const [currentCoin, setCurrentCoin] = useState<UserCoin>({
    id: "",
    quantity: 0,
    buyPrice: 0,
  });
  const [listOfCoins, setListOfCoins] = useState<APICoin[]>([]);
  const [userPortfolio, setUserPortfolio] = useState<UserCoin[]>(() =>
    localStorage.getItem("portfolio") === null
      ? []
      : JSON.parse(localStorage.getItem("portfolio") ?? "{}")
  );

  const buy = () => {
    setIsBuyMenuOpen(false);
    setUserPortfolio((prevUserPortfolio: UserCoin[]) =>
      prevUserPortfolio.concat({
        id: currentCoin.id,
        quantity: +currentCoin.quantity,
        buyPrice: +listOfCoins.filter((coin) => coin.id === currentCoin.id)[0]
          ?.priceUsd,
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(userPortfolio));
  }, [userPortfolio]);

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
    if (
      window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.scrollHeight - 300 &&
      document.URL.at(-1) === "/"
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
                  listOfCoins={listOfCoins}
                  setListOfCoins={setListOfCoins}
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
