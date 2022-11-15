import { StyledFieldset } from "../../style";

type Props = {
  parameter: string;
  info: string;
};

const AdditionalCoinInfoCard: React.FC<Props> = ({ parameter, info }) => {
  return (
    <StyledFieldset key={parameter}>
      <legend>{parameter}</legend>
      {parameter === "explorer" ? (
        <a href={info} target="_blank" rel="noreferrer">
          {info}
        </a>
      ) : (
        <p>{info}</p>
      )}
    </StyledFieldset>
  );
};

export default AdditionalCoinInfoCard;
