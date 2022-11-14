import styled from "styled-components";

type Props = {
  parameter: string;
  info: string;
};

const StyledFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  flex: 1 1;
  margin: 5px;
  padding: 5px;
  border: 1px solid #e7ecef;
  box-shadow: 0 2px 4px rgba(33, 36, 41, 0.05);
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  user-select: none;
  color: #fff;

  legend {
    text-transform: capitalize;
  }
`;

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
