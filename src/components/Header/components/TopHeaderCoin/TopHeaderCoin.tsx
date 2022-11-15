import React from "react";

type Props = {
  priceUsd: string;
  symbol: string;
};

const HeaderCoin: React.FC<Props> = ({ priceUsd, symbol }) => {
  return (
    <li>
      {symbol} {priceUsd}
    </li>
  );
};

export default HeaderCoin;
