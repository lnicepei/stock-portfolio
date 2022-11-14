import styled from "styled-components";
import AdditionalCoinInfoCard from "../AdditionalCoinInfoCard/AdditionalCoinInfoCard";

const StyledAdditionalCoinInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
`;

type Props = {
  additionalCoinInfo: APICoin;
};

const AdditionalCoinInfo: React.FC<Props> = ({ additionalCoinInfo }) => {
  return (
    <StyledAdditionalCoinInfo>
      {Object.keys(additionalCoinInfo).map((key) => (
        <AdditionalCoinInfoCard
          key={key}
          parameter={key}
          info={additionalCoinInfo[key as keyof APICoin]}
        />
      ))}
    </StyledAdditionalCoinInfo>
  );
};

export default AdditionalCoinInfo;
