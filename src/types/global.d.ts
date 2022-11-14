export {};

declare global {
  interface APICoin {
    changePercent24Hr: string;
    explorer: string;
    id: string;
    marketCapUsd: string;
    maxSupply: string;
    name: string;
    priceUsd: string;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
  }

  interface UserCoin {
    id: string;
    quantity: number;
    buyPrice: number;
  }
}
