import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAdditionalCoinInfo, fetchCoinHistory } from "../../api";
import { BuyContext } from "../../App/App";
import AdditionalCoinInfo from "../../components/AdditionalCoinInfo/AdditionalCoinInfo";
import BuyMenu from "../../components/BuyMenu/BuyMenu";
import RenderLineChart from "../../components/RenderLineChart/RenderLineChart";
import {
  StyledBounceLoader,
  StyledBuyButton,
  StyledCoinPage,
  StyledH2,
  StyledMain,
  TopRightSection,
  TopSection
} from "./style";

type Props = {
  listOfCoins: APICoin[];
};

export interface CoinHistory {
  data: [
    {
      date: string;
      priceUsd: string;
    }
  ];
}

const CoinPage: React.FC<Props> = ({ listOfCoins }) => {
  const { coinId } = useParams();

  const { setIsBuyMenuOpen, isBuyMenuOpen, setCurrentCoin } =
    useContext(BuyContext);

  const fullInfo = listOfCoins?.find((coin) => coin.id === coinId);

  const [coinHistory, setCoinHistory] = useState<CoinHistory>(
    {} as CoinHistory
  );

  const [additionalCoinInfo, setAdditionalCoinInfo] = useState<APICoin>(
    {} as APICoin
  );

  const toggleBuyMenuOpen = () => {
    setIsBuyMenuOpen((prevBuyMenuOpen) => !prevBuyMenuOpen);
  };

  useEffect(() => {
    fetchAdditionalCoinInfo(setAdditionalCoinInfo, coinId);

    fetchCoinHistory(setCoinHistory, coinId);

    setCurrentCoin((prevCurrentCoin) => {
      return {
        ...prevCurrentCoin,
        id: coinId ?? "",
      };
    });
  }, [coinId]);

  return (
    <StyledCoinPage>
      {coinHistory.data === undefined ? (
        <StyledBounceLoader color="white" speedMultiplier={2} />
      ) : (
        <>
          <StyledMain>
            <TopSection>
              <RenderLineChart coinHistory={coinHistory} />
              <TopRightSection>
                <StyledH2>{fullInfo?.id}</StyledH2>
                <StyledBuyButton onClick={toggleBuyMenuOpen}>
                  Buy
                </StyledBuyButton>
              </TopRightSection>
            </TopSection>
            <section>
              <AdditionalCoinInfo additionalCoinInfo={additionalCoinInfo} />
            </section>
          </StyledMain>
        </>
      )}
      {isBuyMenuOpen && <BuyMenu />}
    </StyledCoinPage>
  );
};

export default CoinPage;
