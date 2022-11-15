import { format } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CoinHistory } from "../../pages/CoinPage/CoinPage";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { StyledRenderLineChart } from "./style";

type Props = {
  coinHistory: CoinHistory;
};

const RenderLineChart: React.FC<Props> = ({ coinHistory }) => {
  return (
    <StyledRenderLineChart width="90%" height={400}>
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
