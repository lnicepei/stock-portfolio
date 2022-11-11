import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledBuyMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  background-color: #5eb2f739;
  box-sizing: border-box;
  padding: 100px;
  backdrop-filter: blur(10px);
  background-clip: content-box, padding-box;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  right: 100px;
  top: 100px;
`;

const BuyMenu = ({
  innerRef,
  buy,
  currentCoin,
  setCurrentCoin,
  setIsBuyMenuOpen,
}) => {
  const quantityInputRef = useRef(null);

  const setCurrentCoinQuantity = (e) => {
    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        quantity: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (quantityInputRef.current) quantityInputRef.current.select();
  }, [quantityInputRef]);

  return (
    <StyledBuyMenu ref={innerRef}>
      <StyledCloseButton onClick={() => setIsBuyMenuOpen(false)}>
        X
      </StyledCloseButton>
      <div>Buy {currentCoin.name}</div>
      <input
        value={currentCoin.quantity}
        type="number"
        onChange={(e) => setCurrentCoinQuantity(e)}
        ref={quantityInputRef}
      />
      <button onClick={buy}>Buy</button>
    </StyledBuyMenu>
  );
};

export default BuyMenu;
