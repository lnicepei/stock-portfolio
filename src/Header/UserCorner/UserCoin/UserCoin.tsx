import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "../../../App/App.styles";

type Props = {
  coin: APICoin | undefined;
  setUserPortfolio: React.Dispatch<React.SetStateAction<UserCoin[]>>;
};

const UserCoin: React.FC<Props> = ({ coin, setUserPortfolio }) => {
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

  const openCoinPage = () => {
    navigate(coin!.id);
  };

  return (
    <Card onClick={openCoinPage}>
      {coin?.id}
      <Button onClick={deleteCoin}>Delete</Button>
    </Card>
  );
};

export default UserCoin;
