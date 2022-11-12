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

  useEffect(() => {
    Axios.get(`https://api.coincap.io/v2/assets/${coinId}`).then((response) => {
      setAdditionalCoinInfo(response.data.data);
    });

    Axios.get(
      `https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`
    ).then((response) => {
      setCoinHistory(response.data);
    });
  }, [coinId]);

  return (
    <StyledCoinPage>
      <Card>{fullInfo?.id}</Card>
      <RenderLineChart coinHistory={coinHistory} />
      <AdditionalCoinInfo additionalCoinInfo={additionalCoinInfo} />
    </StyledCoinPage>
  );
};

export default CoinPage;
