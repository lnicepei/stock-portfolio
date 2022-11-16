import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BuyContext } from "../../App/App";
import BuyMenu from "../../components/BuyMenu/BuyMenu";
import Coin from "../../components/Coin/Coin";
import { StyledMain } from "./style";

type Props = {
  listOfCoins: APICoin[];
  setListOfCoins: React.Dispatch<React.SetStateAction<APICoin[]>>;
};

const Main: React.FC<Props> = ({ listOfCoins }) => {
  const navigate = useNavigate();
  const buyMenuRef = useRef<HTMLDivElement | null>(null);
  const { setCurrentCoin, isBuyMenuOpen, setIsBuyMenuOpen } =
    useContext(BuyContext);

  const handleBuyMenuOpen = (e: React.SyntheticEvent, coin: APICoin) => {
    e.stopPropagation();
    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        id: coin.id,
      };
    });
    setIsBuyMenuOpen(true);
  };

  const handleCoinMenuOpen = (
    e: React.BaseSyntheticEvent<Event, EventTarget & Element, EventTarget>,
    coin: APICoin
  ) => {
    if (
      buyMenuRef.current &&
      !buyMenuRef.current.contains(e.target as HTMLDivElement)
    ) {
      setIsBuyMenuOpen(false);
    } else {
      navigate(coin.id);
    }
  };

  return (
    <StyledMain>
      {isBuyMenuOpen && <BuyMenu />}
      {listOfCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            coin={coin}
            handleBuyMenuOpen={(e: React.SyntheticEvent) =>
              handleBuyMenuOpen(e, coin)
            }
            handleCoinMenuOpen={(e: React.SyntheticEvent) =>
              handleCoinMenuOpen(e, coin)
            }
          />
        );
      })}
    </StyledMain>
  );
};

export default Main;
