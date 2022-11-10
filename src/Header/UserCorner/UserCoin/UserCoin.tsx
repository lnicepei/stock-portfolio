import React from "react";

const UserCoin = ({ coin, setUserPortfolio }) => {
  const deleteCoin = () => {
    //TODO: Delete from localstorage too
    setUserPortfolio((prevUserPortfolio) =>
      prevUserPortfolio.filter((coinInPortfolio) => {
        if (coinInPortfolio.name !== coin.name) {
          return coinInPortfolio;
        }
      })
    );
  };

  return (
    <div>
      {coin.name}
      <button onClick={deleteCoin}>Delete </button>
    </div>
  );
};

export default UserCoin;
