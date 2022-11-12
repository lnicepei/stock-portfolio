import React from "react";
import { Card } from "../../App/App.styles";

type Props = {
  rank: string;
  id: string;
  priceUsd: string;
  symbol: string;
};

const HeaderCoin: React.FC<Props> = ({ rank, id, priceUsd, symbol }) => {
  return (
    <Card>
      {rank}, {id}, {priceUsd}, {symbol}
    </Card>
  );
};

export default HeaderCoin;
