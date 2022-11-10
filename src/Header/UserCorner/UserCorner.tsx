import React from "react";
import UserCoin from "./UserCoin/UserCoin";

const UserCorner = ({ listOfCoins, userPortfolio, setUserPortfolio }) => {
  const userCoins = userPortfolio.map((coin) => (
    <UserCoin coin={coin} setUserPortfolio={setUserPortfolio} />
  ));

  const previousUserMoney = userPortfolio.reduce(
    (total, coin) => total + +coin.quantity * coin.buyPrice,
    0
  );

  const currentUserMoney = userPortfolio.reduce(
    (total, coin) =>
      total +
      +coin.quantity *
        listOfCoins.find((coinInList) => coinInList.id === coin.name)?.priceUsd,
    0
  );

  console.log(userPortfolio);
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
