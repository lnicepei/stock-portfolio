import Axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import CoinPage from "../Main/CoinList/CoinPage/CoinPage";
import Main from "../Main/Main";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [limit, setLimit] = useState(30);
  const [fetching, setFetching] = useState(true);
  const [userPortfolio, setUserPortfolio] = useState(() => [
    {
      name: "bitcoin",
      quantity: 0.14231,
      buyPrice: 16705.1939777214815769,
    },
    {
      name: "tether",
      quantity: 0.1234231,
      buyPrice: 0.9995246329709383,
    },
    {
      name: "binance-coin",
      quantity: 0.1234231,
      buyPrice: 278.4492642845494104,
    },
  ]);
  const [currentCoin, setCurrentCoin] = useState({
    name: "",
    quantity: 0,
    buyPrice: 0,
  });

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

  const scrollHandler = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >
      e.target.documentElement.scrollHeight - 100
    ) {
      setFetching(true);
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  listOfCoins={listOfCoins}
                  userPortfolio={userPortfolio}
                  setUserPortfolio={setUserPortfolio}
                />
                <Main
                  currentCoin={currentCoin}
                  setCurrentCoin={setCurrentCoin}
                  listOfCoins={listOfCoins}
                  setUserPortfolio={setUserPortfolio}
                />
              </>
            }
          />
          <Route
            path=":coinId"
            element={
              <CoinPage
                coinInfo={{ ...currentCoin }}
                listOfCoins={listOfCoins}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
