import React, { useContext, useEffect, useRef } from "react";

import { BuyContext } from "../../App/App";
import {
  BlurBackground,
  StyledBuyButton,
  StyledBuyMenu,
  StyledBuyText,
  StyledCloseButton,
  StyledInput,
} from "./style";

const BuyMenu = () => {
  const { setCurrentCoin, currentCoin, buy, setIsBuyMenuOpen } =
    useContext(BuyContext);

  const quantityInputRef = useRef<HTMLInputElement | null>(null);

  const setCurrentCoinQuantity = (e: React.SyntheticEvent) => {
    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        quantity: +(e.target as HTMLInputElement).value,
      };
    });
  };

  useEffect(() => {
    if (quantityInputRef.current) quantityInputRef.current.select();
  }, [quantityInputRef]);

  return (
    <StyledBuyMenu onSubmit={buy}>
      <BlurBackground>
        <StyledCloseButton onClick={() => setIsBuyMenuOpen(false)}>
          ✖
        </StyledCloseButton>
        <StyledBuyText>Buy {currentCoin.id}</StyledBuyText>
        <StyledInput
          value={currentCoin.quantity || ""}
          type="number"
          onChange={setCurrentCoinQuantity}
          ref={quantityInputRef}
        />
        <StyledBuyButton disabled={currentCoin.quantity <= 0}>
          Buy
        </StyledBuyButton>
      </BlurBackground>
    </StyledBuyMenu>
  );
};

export default BuyMenu;
