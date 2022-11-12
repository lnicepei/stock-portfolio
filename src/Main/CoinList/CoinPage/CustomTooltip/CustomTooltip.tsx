import { format, parseISO } from "date-fns";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styled from "styled-components";

const StyledToolTip = styled.div`
  border-radius: 0.25rem;
  background: #26313c;
  color: #fff;
  padding: 1rem;
  box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && label) {
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
