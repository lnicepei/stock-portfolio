import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../../App/App.styles";
import AdditionalCoinInfo from "./AdditionalCoinInfo/AdditionalCoinInfo";
import RenderLineChart from "./RenderLineChart/RenderLineChart";

const StyledCoinPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledMain = styled.main`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
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

  useEffect(() => {
    Axios.get(`https://api.coincap.io/v2/assets/${coinId}`).then((response) => {
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
    });

    Axios.get(
      `https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`
    ).then((response) => {
      setCoinHistory(response.data);
    });
  }, [coinId]);

  return (
    <StyledCoinPage>
      <header>
        <Card>{fullInfo?.id}</Card>
      </header>
      <StyledMain>
        <RenderLineChart coinHistory={coinHistory} />
        <AdditionalCoinInfo additionalCoinInfo={additionalCoinInfo} />
      </StyledMain>
    </StyledCoinPage>
  );
};

export default CoinPage;
