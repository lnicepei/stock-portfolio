import { CoinHistory } from "./../pages/CoinPage/CoinPage";
import Axios, { AxiosError } from "axios";
import React from "react";

const toFixed2 = (parameter: string) => {
  return Number(parameter).toFixed(2);
};

export const fetchAdditionalCoinInfo = (
  setAdditionalCoinInfo: React.Dispatch<React.SetStateAction<APICoin>>,
  coinId: string | undefined
) => {
  Axios.get(`https://api.coincap.io/v2/assets/${coinId}`)
    .then((response) => {
      setAdditionalCoinInfo({
        rank: response.data.data.rank,
        symbol: response.data.data.symbol,
        name: response.data.data.name,
        priceUsd: toFixed2(response.data.data.priceUsd),
        changePercent24Hr: toFixed2(response.data.data.changePercent24Hr),
        explorer: response.data.data.explorer,
        id: response.data.data.id,
        marketCapUsd: toFixed2(response.data.data.marketCapUsd),
        maxSupply: toFixed2(response.data.data.maxSupply),
        supply: toFixed2(response.data.data.supply),
        volumeUsd24Hr: toFixed2(response.data.data.volumeUsd24Hr),
      });
    })
    .catch((err: AxiosError) => console.error(err));
};

export const fetchCoinHistory = (
  setCoinHistory: React.Dispatch<React.SetStateAction<CoinHistory>>,
  coinId: string | undefined
) => {
  Axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
    .then((response) => {
      setCoinHistory(response.data);
    })
    .catch((err: AxiosError) => console.error(err));
};

export const fetchListOfCoins = (
  limit: number,
  setListOfCoins: React.Dispatch<React.SetStateAction<APICoin[]>>,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
) => {
  Axios.get(`https://api.coincap.io/v2/assets?limit=${limit}`)
    .then((response) => {
      setListOfCoins(response.data.data);
      setFetching(false);
    })
    .finally(() => setFetching(false));
};
