import { format } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";
import { CoinHistory } from "../../pages/CoinPage/CoinPage";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

type Props = {
  coinHistory: CoinHistory;
};

const StyledRenderLineChart = styled(ResponsiveContainer)`
  width: 100%;
  flex: 4 1;
`;

const RenderLineChart: React.FC<Props> = ({ coinHistory }) => {
  return (
    <StyledRenderLineChart height={400}>
      <AreaChart data={coinHistory.data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="priceUsd" fill="url(#color)" />

        <XAxis
          dataKey="date"
          tickFormatter={(str) => {
            const date = new Date(str);
            return format(
              date.toDateString() === "Invalid Date" ? new Date() : date,
              "MMM, d"
            );
          }}
        />

        <YAxis
          dataKey="priceUsd"
          tickCount={8}
          tickFormatter={(number) => `$${+number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </StyledRenderLineChart>
  );
};

export default RenderLineChart;
