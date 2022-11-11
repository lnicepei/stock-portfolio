import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Axios from "axios";
import { format, parseISO } from "date-fns";

const StyledCoinPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CoinPage = ({ coinInfo, listOfCoins }) => {
  const { coinId } = useParams();
  const fullInfo = listOfCoins?.find((coin) => coin.id === coinId);
  const [coinHistory, setCoinHistory] = useState([]);
  const [additionalCoinInfo, setAdditionalCoinInfo] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.coincap.io/v2/assets/${coinId}`).then((response) => {
      setAdditionalCoinInfo(response.data.data);
    });

    Axios.get(
      `https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`
    ).then((response) => {
      setCoinHistory(response.data);
    });
  }, []);

  console.log(additionalCoinInfo);

  const renderLineChart = (
    <ResponsiveContainer width="75%" height={400}>
      <AreaChart data={coinHistory.data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="priceUsd" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          tickFormatter={(str) => {
            const date = new Date(str || "");
            return date.toDateString();
          }}
        />

        <YAxis
          dataKey="priceUsd"
          tickCount={8}
          tickFormatter={(number) => `$${+number.toFixed(2)}`}
        />

        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Tooltip />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <StyledCoinPage>
      {fullInfo?.id} {renderLineChart}{" "}
      {Object.keys(additionalCoinInfo).map((key) => (
        <div>
          {key}: {additionalCoinInfo[key]}
        </div>
      ))}
    </StyledCoinPage>
  );
};

export default CoinPage;
