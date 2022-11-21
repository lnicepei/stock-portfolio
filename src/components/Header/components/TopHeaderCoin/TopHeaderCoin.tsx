import React from "react";
import { StyledLI } from "./style";

type Props = {
  priceUsd: string;
  symbol: string;
};

const HeaderCoin: React.FC<Props> = ({ priceUsd, symbol }) => {
  return (
    <StyledLI>
      <span>{symbol}</span> <span>{priceUsd}$</span>
    </StyledLI>
  );
};

export default HeaderCoin;
