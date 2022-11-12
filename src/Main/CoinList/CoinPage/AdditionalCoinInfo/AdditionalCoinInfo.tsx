import styled from "styled-components";
import AdditionalCoinInfoCard from "./AdditionalCoinInfoCard/AdditionalCoinInfoCard";

const StyledAdditionalCoinInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AdditionalCoinInfo = ({ additionalCoinInfo }) => {
  return (
    <StyledAdditionalCoinInfo>
      {Object.keys(additionalCoinInfo).map((key) => (
        <AdditionalCoinInfoCard
          key={key}
          parameter={key}
          info={additionalCoinInfo[key]}
        />
      ))}
    </StyledAdditionalCoinInfo>
  );
};

export default AdditionalCoinInfo;
