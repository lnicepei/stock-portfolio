import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Main/CoinList/Coin/Coin";
import Header from "./Header/Header";

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

  console.log(listOfCoins);

  return (
    <div className="App">
      {/* <div className="cryptoHeader">
        <Routes>
          <Route></Route>
        </Routes>
      </div> */}
      <Header
        listOfCoins={listOfCoins}
        userPortfolio={userPortfolio}
        setUserPortfolio={setUserPortfolio}
      />
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
          return (
            <Coin
              setUserPortfolio={setUserPortfolio}
              rank={coin.rank}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.priceUsd.substring(0, 7)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
