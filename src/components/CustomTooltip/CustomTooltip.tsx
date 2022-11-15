import { format } from "date-fns";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { StyledToolTip } from "./style";

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && label && label !== "auto") {
    return (
      <StyledToolTip>
        <h4>{format(new Date(label), "eeee, d MMM, yyyy")}</h4>
        <p>${Number(payload?.[0].value).toFixed(2)} USD</p>
      </StyledToolTip>
    );
  }
  return null;
};

export default CustomTooltip;
