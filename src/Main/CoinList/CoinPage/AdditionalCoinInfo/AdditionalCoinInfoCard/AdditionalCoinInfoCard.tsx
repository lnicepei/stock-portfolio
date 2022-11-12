import { Card } from "../../../../../App/App.styles";

type Props = {
  parameter: string;
  info: string;
}

const AdditionalCoinInfoCard: React.FC<Props> = ({ parameter, info }) => {
  return (
    <Card key={parameter}>
      <p>{parameter}</p>
      <p>{":" + info}</p>
    </Card>
  );
};

export default AdditionalCoinInfoCard;
