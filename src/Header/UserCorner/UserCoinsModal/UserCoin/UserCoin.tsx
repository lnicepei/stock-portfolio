import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Card } from "../../../../App/App.styles";

type Props = {
  coin: APICoin | undefined;
  setUserPortfolio: React.Dispatch<React.SetStateAction<UserCoin[]>>;
  toggleModal: (e: React.SyntheticEvent) => void;
};

const StyledUserCoin = styled(Card)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const StyledDeleteButton = styled(Button)`
  padding: 5px;
  margin: 5px 0;
`

const UserCoin: React.FC<Props> = ({ coin, setUserPortfolio, toggleModal }) => {
  const navigate = useNavigate();
  const deleteCoin = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    //TODO: Delete from localstorage too
    setUserPortfolio((prevUserPortfolio) =>
      prevUserPortfolio.filter((coinInPortfolio: UserCoin) => {
        if (coinInPortfolio.id !== coin!.id) {
          return coinInPortfolio;
        }
        return;
      })
    );
  };

  const openCoinPage = (e: React.SyntheticEvent) => {
    toggleModal(e);
    navigate(coin!.id);
  };

  return (
    <StyledUserCoin onClick={openCoinPage}>
      <p>{coin?.id}</p>
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
