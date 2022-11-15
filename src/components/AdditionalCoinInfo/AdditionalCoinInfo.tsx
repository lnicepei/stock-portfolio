import AdditionalCoinInfoCard from "./components/AdditionalCoinInfoCard/AdditionalCoinInfoCard";
import { StyledAdditionalCoinInfo } from "./style";

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
