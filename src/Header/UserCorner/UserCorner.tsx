import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../../App/App.styles";
import { HeaderProps } from "../Header";
import UserCoin from "./UserCoin/UserCoin";

const StyledUserCorner = styled.div`
  display: flex;
`;

const StyledUserCornerModal = styled.div`
  z-index: 2;
`;

const StyledModalToggle = styled(Card)`
  align-items: flex-start;
  z-index: 2;
  height: auto;
`;

const UserCorner: React.FC<HeaderProps> = ({
  listOfCoins,
  userPortfolio,
  setUserPortfolio,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const previousUserMoney = userPortfolio.reduce(
    (total: number, coin: UserCoin) => total + +coin.quantity * coin.buyPrice,
    0
  );

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const currentUserMoney =
    userPortfolio.reduce(
      (total: number, coin: UserCoin) =>
        total +
        +coin.quantity *
          +listOfCoins.filter?.(
            (coinInList: APICoin) => coinInList.id === coin.id
          )[0]?.priceUsd,
      0
    ) || 0;

  const userCoins = userPortfolio.map((coin) => (
    <UserCoin
      key={coin.id}
      toggleModal={toggleModal}
      coin={listOfCoins.find((listCoin) => listCoin.id === coin.id)}
      setUserPortfolio={setUserPortfolio}
    />
  ));

  return (
    <StyledUserCorner>
      <div>
        {currentUserMoney} USD {currentUserMoney - previousUserMoney}{" "}
        {100 - (currentUserMoney / previousUserMoney || 1) * 100}
      </div>
      <StyledModalToggle onClick={toggleModal}>
        <div>Modal</div>
        {isModalOpen && (
          <StyledUserCornerModal>{userCoins}</StyledUserCornerModal>
        )}
      </StyledModalToggle>

      <div>{previousUserMoney}</div>
      <div>{currentUserMoney}</div>
    </StyledUserCorner>
  );
};

export default UserCorner;
