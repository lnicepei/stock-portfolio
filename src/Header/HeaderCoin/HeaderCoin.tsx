import React from "react";
import { Card } from "../../App/App.styles";

const HeaderCoin = ({ rank, id, price, symbol }) => {
  return (
    <Card>
      {rank}, {id}, {price}, {symbol}
    </Card>
  );
};

export default HeaderCoin;
