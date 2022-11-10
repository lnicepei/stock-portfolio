import React from "react";

const HeaderCoin = ({ rank, name, price, symbol }) => {
  return (
    <div>
      {rank}, {name}, {price}, {symbol}
    </div>
  );
};

export default HeaderCoin;
