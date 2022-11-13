import React, { useState } from "react";
import styled from "styled-components";
import { HeaderProps } from "../Header";
import UserCoin from "./UserCoinsModal/UserCoin/UserCoin";
import UserCoinsModal from "./UserCoinsModal/UserCoinsModal";
import UserStats from "./UserStats/UserStats";

const StyledUserCorner = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const StyledModalToggle = styled.div`
  align-items: flex-start;
  z-index: 2;
  height: auto;
  cursor: pointer;
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

  const toggleModal = (e: React.SyntheticEvent) => {
    e.stopPropagation();
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
      <UserStats
        currentMoney={currentUserMoney}
        difference={(currentUserMoney - previousUserMoney).toFixed(2)}
        percents={Math.abs(
          (currentUserMoney / previousUserMoney || 1) * 100 - 100
        ).toFixed(2)}
      />
      <StyledModalToggle onClick={toggleModal}>
        <svg width={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
          />
        </svg>
      </StyledModalToggle>
      {isModalOpen && (
        <UserCoinsModal toggleModal={toggleModal}>{userCoins}</UserCoinsModal>
      )}
    </StyledUserCorner>
  );
};

export default UserCorner;
