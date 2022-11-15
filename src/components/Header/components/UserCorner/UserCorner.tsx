import React, { useState } from "react";
import { HeaderProps } from "../../Header";
import ModalToggle from "./components/ModalToggle/ModalToggle";
import UserCoin from "./components/UserCoin/UserCoin";
import UserStats from "./components/UserStats/UserStats";
import { StyledUserCorner } from "./style";

const UserCorner: React.FC<HeaderProps> = ({
  listOfCoins,
  userPortfolio,
  setUserPortfolio,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const previousUserMoney = userPortfolio.reduce(
    (total: number, coin: UserCoin) => total + +coin.quantity * coin.buyPrice,
    0
  );

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
      userCoin={coin}
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
      <ModalToggle
        toggleModal={toggleModal}
        userCoins={userCoins}
        isModalOpen={isModalOpen}
      />
    </StyledUserCorner>
  );
};

export default UserCorner;