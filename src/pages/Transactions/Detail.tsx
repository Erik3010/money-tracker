import { useParams } from "react-router-dom";

const TransactionDetail = () => {
  const { transactionId } = useParams();

  return <div>{transactionId}</div>;
};

export default TransactionDetail;
