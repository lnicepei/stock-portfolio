import React from "react";

type Props = {
  priceUsd: string;
  symbol: string;
};

const HeaderCoin: React.FC<Props> = ({ priceUsd, symbol }) => {
  return (
    <li>
      {symbol} {window.innerWidth > 600 && priceUsd}
    </li>
  );
};

export default HeaderCoin;
