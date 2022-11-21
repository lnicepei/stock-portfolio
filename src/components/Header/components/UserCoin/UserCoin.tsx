import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledDeleteButton,
  StyledPrice,
  StyledQuantity,
  StyledUserCoin,
} from "./style";

type Props = {
  propIndex: number;
  coin: APICoin | undefined;
  userCoin: UserCoin;
  setUserPortfolio: React.Dispatch<React.SetStateAction<UserCoin[]>>;
  toggleModal: (e: React.SyntheticEvent) => void;
};

const UserCoin: React.FC<Props> = ({
  coin,
  setUserPortfolio,
  toggleModal,
  userCoin,
  propIndex,
}) => {
  const navigate = useNavigate();

  const deleteCoin = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    setUserPortfolio((prevUserPortfolio) =>
      prevUserPortfolio.filter((coinInPortfolio: UserCoin, index) => {
        if (index !== propIndex) {
          return coinInPortfolio;
        }
        return null;
      })
    );
  };

  const openCoinPage = (e: React.SyntheticEvent) => {
    toggleModal(e);
    navigate(coin?.id ?? "/");
  };

  return (
    <StyledUserCoin>
      <StyledPrice onClick={openCoinPage}>{coin?.symbol}</StyledPrice>
      <p>{Number(userCoin.buyPrice).toFixed(3)}$</p>
      <StyledQuantity>
        <svg width={12} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>{" "}
        {userCoin.quantity}
      </StyledQuantity>
      <StyledDeleteButton onClick={deleteCoin}>
        <svg width={24} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </StyledDeleteButton>
    </StyledUserCoin>
  );
};

export default UserCoin;
