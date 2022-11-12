import React from "react";
import { HeaderProps } from "../Header";
import UserCoin from "./UserCoin/UserCoin";

const UserCorner: React.FC<HeaderProps> = ({
  listOfCoins,
  userPortfolio,
  setUserPortfolio,
}) => {
  const userCoins = userPortfolio.map((coin) => (
    <UserCoin
      key={coin.id}
      coin={listOfCoins.find((listCoin) => listCoin.id === coin.id)}
      setUserPortfolio={setUserPortfolio}
    />
  ));

  const previousUserMoney = userPortfolio.reduce(
    (total: number, coin: UserCoin) => total + +coin.quantity * coin.buyPrice,
    0
  );

  const currentUserMoney = userPortfolio.reduce(
    (total: number, coin: UserCoin) =>
      total +
      +coin.quantity *
        listOfCoins.find((coinInList: APICoin) => coinInList.id === coin.id)
          ?.priceUsd,
    0
  );

  return (
    <div>
      <div>
        {currentUserMoney} USD {currentUserMoney - previousUserMoney}{" "}
        {100 - (currentUserMoney / previousUserMoney || 1) * 100}
      </div>
      {userCoins} {previousUserMoney} {currentUserMoney}
    </div>
  );
};

export default UserCorner;
