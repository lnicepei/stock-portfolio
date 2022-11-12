import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "../../../App/App.styles";

const UserCoin = ({ coin, setUserPortfolio }) => {
  const navigate = useNavigate();
  const deleteCoin = (e) => {
    e.stopPropagation();
    //TODO: Delete from localstorage too
    setUserPortfolio((prevUserPortfolio) =>
      prevUserPortfolio.filter((coinInPortfolio) => {
        if (coinInPortfolio.id !== coin.id) {
          return coinInPortfolio;
        }
      })
    );
  };

  const openCoinPage = () => {
    navigate(coin.id);
  };

  return (
    <Card onClick={openCoinPage}>
      {coin?.id}
      <Button onClick={(e) => deleteCoin(e)}>Delete </Button>
    </Card>
  );
};

export default UserCoin;
