import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { BuyContext } from "../../App/App";
import { Button } from "../../App/App.styles";
import BuyMenu from "../../components/BuyMenu/BuyMenu";
import AdditionalCoinInfo from "../../components/AdditionalCoinInfo/AdditionalCoinInfo";
import RenderLineChart from "../../components/RenderLineChart/RenderLineChart";

const StyledCoinPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 80vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledBuyButton = styled(Button)`
  /* flex: 1 2; */
  width: 75%;
  box-sizing: border-box;
  padding: 20px;
`;

const StyledH2 = styled.h2`
  color: white;
  text-transform: capitalize;
`;

const StyledBounceLoader = styled(BounceLoader)`
  position: relative;
  margin: 0 auto;
  top: 25%;
`;

const TopSection = styled.section`
  display: flex;
`;

const TopRightSection = styled.section`
  flex: 2 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
  const { setIsBuyMenuOpen, isBuyMenuOpen, setCurrentCoin } =
    useContext(BuyContext);
  const { coinId } = useParams();
  const fullInfo = listOfCoins?.find((coin) => coin.id === coinId);
  const [coinHistory, setCoinHistory] = useState<CoinHistory>(
    {} as CoinHistory
  );
  const [additionalCoinInfo, setAdditionalCoinInfo] = useState<APICoin>(
    {} as APICoin
  );

  const toFixed2 = (parameter: string) => {
    return Number(parameter).toFixed(2);
  };

  const toggleBuyMenuOpen = () => {
    setIsBuyMenuOpen((prevBuyMenuOpen) => !prevBuyMenuOpen);
  };

  useEffect(() => {
    Axios.get(`https://api.coincap.io/v2/assets/${coinId}`)
      .then((response) => {
        setAdditionalCoinInfo({
          rank: response.data.data.rank,
          symbol: response.data.data.symbol,
          name: response.data.data.name,
          priceUsd: toFixed2(response.data.data.priceUsd),
          changePercent24Hr: toFixed2(response.data.data.changePercent24Hr),
          explorer: response.data.data.explorer,
          id: response.data.data.id,
          marketCapUsd: toFixed2(response.data.data.marketCapUsd),
          maxSupply: toFixed2(response.data.data.maxSupply),
          supply: toFixed2(response.data.data.supply),
          volumeUsd24Hr: toFixed2(response.data.data.volumeUsd24Hr),
        });
      })
      .catch((err) => console.error(err));

    Axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`)
      .then((response) => {
        setCoinHistory(response.data);
      })
      .catch((err) => console.error(err));

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
