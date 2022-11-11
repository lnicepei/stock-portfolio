import { Card } from "../../../../../App/App.styles";

const AdditionalCoinInfoCard = ({ parameter, info }) => {
  return (
    <Card key={parameter}>
      <p>{parameter}</p>
      <p>{":" + info}</p>
    </Card>
  );
};

export default AdditionalCoinInfoCard;
