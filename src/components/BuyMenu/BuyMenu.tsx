import React, { useContext, useEffect, useRef } from "react";
import { BuyContext } from "../../App/App";
import { StyledBuyMenu, StyledCloseButton, StyledBuyText, BlurBackground, StyledInput, StyledBuyButton } from "./style";

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
    <StyledBuyMenu>
      <BlurBackground>
        <StyledCloseButton onClick={() => setIsBuyMenuOpen(false)}>
          ✖
        </StyledCloseButton>
        <StyledBuyText>Buy {currentCoin.id}</StyledBuyText>
        <StyledInput
          value={currentCoin.quantity}
          type="number"
          onChange={(e) => setCurrentCoinQuantity(e)}
          ref={quantityInputRef}
        />
        <StyledBuyButton onClick={buy}>Buy</StyledBuyButton>
      </BlurBackground>
    </StyledBuyMenu>
  );
};

export default BuyMenu;
